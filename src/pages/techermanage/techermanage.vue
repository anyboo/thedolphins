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
                                        <input id="inputClass" type="text" placeholder="老师姓名" class="form-control" v-model.lazy="inputClass" @handleChange="handleChange($event.target.value)" />
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
            <div class="col-md-3">
                <div class="panel  panel-default">
                    <div class="profile">
                        <div class="user-info">
                            <div style="margin-bottom: 15px" class="row">
                                <div class="col-xs-12 col-sm-8">
                                    <h2>程玲</h2>
                                    <p><strong>电话:</strong>18960828505 </p>
                                    <p><strong>教学理念:</strong> 快乐学习</p>
                                    <p><strong class="mrs">课程:</strong><span class="label label-green mrs">吉他</span><span class="label label-green mrs">钢琴</span><span class="label label-green mrs">美术</span>
                                    </p>
                                </div>
                                <div class="col-xs-12 col-sm-4 text-center">
                                    <figure><img src="/assets/128.png" alt="" style="display: inline-block" class="img-responsive img-circle" />
                                        <div>
                                            <h3><strong>3</strong>班级</h3>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="total" class="pagination" :current-page="currentPage" :page-size="pageSize" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
        <bt-modals :modals-active="showModals" :modalsTitle="modalsTitle" @close="handleClose" @save="handleSave">
            <bt-form :item-data="modalsdata" ref="modalform" :form-data="formData" />
        </bt-modals>
    </div>
</template>
<script>
import langConfig from '~/lang'
import techerManageStore from '~/store/pages/techermanage.js'
import * as types from '~/store/mutation-types'
import lodash from 'lodash'

export default {
    name: 'BtTecherManage',
    data() {
        return {
            langConfig,
            showModals: false,
            modalsdata: techerManageStore.coursemanage,
            tableName: ['coursemanage', 'courseclass'],
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
            let title = '添加课程'
            if (this.modalsType == types.APPEND_API) {
                title = '添加课程'
            } else {
                title = '编辑课程'
            }
            return title
        },

    },
    beforeMount() {
        this.operationGet()
    },
    methods: {
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
        eventSubData(key) {
            let vm = this

            vm.$store.commit(types.GET_CURRENT_API, 'coursemanage')

            let filterData = []
            if (vm.$store.getters.getCurrentModel['coursemanage']) {
                let data = vm.$store.getters.getCurrentModel['coursemanage'].data
                filterData = lodash.filter(data, o => {
                    let result = false
                    let className = this.inputClass.trim()
                    if (key._id == o.category) {
                        if (className.length > 0) {
                            result = (o.name.indexOf(className) != -1)
                        } else {
                            result = true
                        }
                    }

                    return result
                })
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
        handleClass(value) {
            this.classActive = value
            this.eventData()
        },
        handleClear() {
            this.inputClass = ''
            this.classActive = ''
            this.eventData()
        },
        handleChange(value) {
            this.inputClass = value
            this.eventData()
        },
        handleDelete(id) {
            let vm = this
            this.$confirm('课程删除操作, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                vm.$store.dispatch(types.DELETE_API, {
                    'model': 'coursemanage',
                    'id': id,
                }).then(() => {
                    this.operationGet()
                    this.$notify({
                        title: '成功',
                        message: '课程删除成功!',
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
            if (modalformValue.validate) {
                if (this.modalsType == types.APPEND_API) {
                    vm.$store.dispatch(types.APPEND_API, {
                        'model': 'coursemanage',
                        'form': modalformValue.form
                    }).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '课程新建成功',
                            type: 'success'
                        })
                        this.operationGet()
                        vm.showModals = false
                    })
                } else {
                    vm.$store.dispatch(types.EDIT_API, {
                        'model': 'coursemanage',
                        'id': id,
                        'form': modalformValue.form,
                    }).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '课程修改成功!',
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
                'model': 'coursemanage',
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
