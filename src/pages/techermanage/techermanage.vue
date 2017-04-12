<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <bt-portlet portlet-title="老师面板" :portlet-tools="true" :portlet-active="true">
                    <div class="form-horizontal">
                        <div class="form-body pal">
                            <div class="form-group">
                                <label for="inputClass" class="col-md-3 control-label">老师姓名
                                </label>
                                <div class="col-md-9">
                                    <div class="input-icon"><i class="fa fa-user"></i>
                                        <input id="inputClass" type="text" placeholder="姓名或手机号码" class="form-control" v-model.lazy="inputClass" @handleChange="handleChange($event.target.value)" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail" class="col-md-3 control-label">课程
                                </label>
                                <div class="col-md-9 gallery-pages">
                                    <ul class="list-filter list-unstyled">
                                        <li @click="handleClass('')" class="filter" :class="{'active':classActive==''}">全部</li>
                                        <template v-for="item in courseAllclass">
                                            <li @click="handleClass(item._id)" class="filter" :class="{'active':classActive==item._id}">{{ item.className }}</li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form-actions none-bg">
                            <div class="col-md-offset-3 col-md-9">
                                <button class="btn btn-primary" @click="handleShowModals"> <i class="fa fa-upload mrs"></i>添加</button>
                                <button class="btn btn-primary" @click="handleClear"> <i class="fa fa-trash-o mrs"></i>搜索重置</button>
                            </div>
                        </div>
                    </div>
                </bt-portlet>
            </div>
        </div>
        <div class="row mbl">
            <template v-for="subitem,index in eventSubData()">
                <div class="col-md-3">
                    <div class="panel  panel-default">
                        <div class="profile">
                            <div class="user-info" @click="handlelink(subitem._id)">
                                <div class="row">
                                    <div class="closebtn">
                                        <a href="javascript:void(0)" @click="handleDelete(subitem._id)" class="panel-link"><i class="fa fa-times"></i></a>
                                    </div>
                                    <div class="col-xs-12 col-sm-4 text-center">
                                        <figure>
                                            <div class="thumbtecher"><img src="/assets/128.png" alt="" style="display: inline-block" class="img-responsive img-circle" /></div>
                                            <div>
                                                <h4>{{ subitem.name }}</h4>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-xs-12 col-sm-8">
                                        <p><strong>电话:</strong>{{ subitem.phone }} </p>
                                        <p><strong>邮箱:</strong>{{ subitem.email }} </p>
                                        <p><strong>生日:</strong> {{ getDateTime(subitem.birthday) }}</p>
                                        <p><strong class="mrs">课程:</strong><span class="label label-green mrs">{{ getClassName(subitem.category) }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="total" class="pagination" :current-page="currentPage" :page-size="pageSize" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
        <bt-modals :modals-active="showModals" :modalsTitle="modalsTitle" @close="handleClose" @save="handleSave">
            <bt-form :item-data="modalsdata" ref="modalform" :form-data="formData" />
        </bt-modals>
    </div>
</template>
<style>
.closebtn {
    float: right;
    margin-right: 20px;
}

.thumbtecher {
    border: 5px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: block;
}

.img-circle {
    border-radius: 50% !important
}

.user-info {
    cursor: pointer;
}
</style>
<script>
import langConfig from '~/lang'
import techerManageStore from '~/store/pages/techermanage.js'
import * as types from '~/store/mutation-types'
import lodash from 'lodash'
import moment from 'moment'

export default {
    name: 'BtTecherManage',
    data() {
        return {
            langConfig,
            showModals: false,
            modalsdata: techerManageStore.techermanage,
            tableName: ['techermanage', 'courseclass'],
            coursemanage: [],
            courseclass: [],
            courseAllclass: [],
            panelStyle: ['orange', 'violet', 'green', 'blue', 'yellow', 'pink'],
            modalsType: types.APPEND_API,
            formData: {},
            inputClass: '',
            classActive: '',
            total: 0,
            currentPage: 1,
            pageSize: 10,
        }
    },
    computed: {
        menuShow() {
            if (this.menuOpen) {
                this.menuOpen = this.menuFocus || this.menuEnter
            } else {
                this.menuOpen = this.menuFocus && this.menuEnter
            }
            return this.menuOpen
        },
        modalsTitle() {
            let title = '添加老师'
            if (this.modalsType == types.APPEND_API) {
                title = '添加老师'
            } else {
                title = '编辑老师'
            }
            return title
        },

    },
    beforeMount() {
        this.operationGet()
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val
            this.operationGet()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.operationGet()
        },
        btnStyleName(index) {
            var styleName = 'btn-orange'
            if (this.panelStyle) {
                styleName = 'btn-' + this.getPanelStyle(index)
            }
            return styleName
        },
        getPanelStyle(index) {
            let indexs = index % 6
            let value = this.panelStyle[indexs]
            return value
        },
        getClassName(id) {
            let name = ''
            this.courseAllclass.every(o => {
                if (o._id == id) {
                    name = o.className
                    return false
                }
                return true
            })
            return name
        },
        getDateTime(value) {
            let datetime = ''
            let m = moment(value)
            if (m.isValid()) {
                datetime = m.format('YYYY/MM/DD')
            }
            return datetime
        },
        eventData(showAll = false) {
            let vm = this

            vm.$store.commit(types.GET_CURRENT_API, 'courseclass')

            let filterData = []
            if (vm.$store.getters.getCurrentModel['courseclass']) {
                let data = vm.$store.getters.getCurrentModel['courseclass'].data
                this.courseAllclass = data
                filterData = lodash.filter(data, o => {
                    let result = false
                    let classActive = this.classActive.trim()

                    if (classActive.length > 0) {
                        result = (o._id == classActive) || showAll
                    } else {
                        result = true
                    }

                    return result
                })

            }
            this.courseclass = filterData
            return filterData
        },
        eventSubData() {
            let vm = this

            vm.$store.commit(types.GET_CURRENT_API, 'techermanage')

            let filterData = []
            if (vm.$store.getters.getCurrentModel['techermanage']) {
                let data = vm.$store.getters.getCurrentModel['techermanage'].data

                let count = 0
                let start = (this.currentPage - 1) * this.pageSize
                let end = this.pageSize * this.currentPage

                filterData = lodash.filter(data, o => {
                    let result = false
                    let className = this.inputClass.trim()
                    if (this.classActive == o.category || this.classActive == '') {
                        if (className.length > 0) {
                            result = (o.name.indexOf(className) != -1 || o.phone.indexOf(className) != -1)
                        } else {
                            result = true
                        }
                    }
                    if (result) {
                        if (start <= count && count < end) {
                            result = true
                        } else {
                            result = false
                        }

                        count++
                    }

                    return result
                })
                this.total = count
            }
            this.coursemanage = filterData

            return filterData
        },
        operationGet() {
            let vm = this
            vm.$store.dispatch(types.GET_ARRAY_API, vm.tableName).then(() => {
                this.eventData()
            })
        },
        handlelink(value) {
            this.$router.push('/techerprofile/' + value)
        },
        handleClass(value) {
            this.classActive = value
            this.eventData()
            this.eventSubData()
        },
        handleClear() {
            this.inputClass = ''
            this.classActive = ''
            this.eventData()
            this.eventSubData()
        },
        handleChange(value) {
            this.inputClass = value
            this.eventData()
            this.eventSubData()
        },
        handleDelete(id) {
            let vm = this
            this.$confirm('老师删除操作, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                vm.$store.dispatch(types.DELETE_API, {
                    'model': 'techermanage',
                    'id': id,
                }).then(() => {
                    this.operationGet()
                    this.$notify({
                        title: '成功',
                        message: '老师删除成功!',
                        type: 'success'
                    })
                })
            })
        },
        handleClose() {
            this.showModals = false
        },
        handleSave() {
            let vm = this
            let modalform = vm.$refs.modalform
            let modalformValue = modalform.getForm()
            let id = modalform.getValue('_id')
            console.log(modalform)
            if (modalformValue.validate) {
                if (this.modalsType == types.APPEND_API) {
                    vm.$store.dispatch(types.APPEND_API, {
                        'model': 'techermanage',
                        'form': modalformValue.form
                    }).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '老师新建成功',
                            type: 'success'
                        })
                        this.operationGet()
                        vm.showModals = false
                    })
                } else {
                    vm.$store.dispatch(types.EDIT_API, {
                        'model': 'techermanage',
                        'id': id,
                        'form': modalformValue.form,
                    }).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '老师修改成功!',
                            type: 'success'
                        })
                        this.operationGet()
                        vm.showModals = false
                    })
                }
            }
        },
        handleShowModals() {
            this.formData = {}
            this.modalsType = types.APPEND_API
            this.showModals = true
            return false
        },
        editShowModals(key) {
            let vm = this
            vm.$store.dispatch(types.GET_ID_API, {
                'model': 'techermanage',
                'id': key
            }).then((data) => {
                this.formData = data.data
                this.modalsType = types.EDIT_API
                this.showModals = true
            })
            return false
        }
    }
}
</script>
