<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <bt-portlet portlet-title="教室面板" :portlet-tools="true" :portlet-active="true">
                    <div class="form-horizontal">
                        <div class="form-body pal">
                            <div class="form-group">
                                <label for="inputClass" class="col-md-3 control-label">教室名称
                                </label>
                                <div class="col-md-9">
                                    <div class="input-icon"><i class="fa fa-user"></i>
                                        <input id="inputClass" type="text" placeholder="教室名称" class="form-control" v-model.lazy="inputClass" @change="handleChange($event.target.value)">
                                    </div>
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
        <el-table :data="tableData" row-key="_id" class="table" stripe border>
            <el-table-column type="index" width="50"></el-table-column>
            <template v-for="item in fieldColumn">
                <el-table-column :prop="item.name" :label="item.desc"></el-table-column>
            </template>
            <el-table-column label="操作" width="160">
                <template scope="scope">
                    <el-button size="small" @click="editShowModals(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <bt-modals :modals-active="showModals" :modalsTitle="modalsTitle" @close="handleClose" @save="handleSave">
            <bt-form :item-data="modalsdata" ref="modalform" :form-data="formData" />
        </bt-modals>
    </div>
</template>
<style>
.table {
    margin-top: 0px;
}
</style>
<script>
import langConfig from '~/lang'
import classroomStore from '~/store/pages/classroom.js'
import * as types from '~/store/mutation-types'
import lodash from 'lodash'

export default {
    name: 'BtModuleTable',
    data() {
        return {
            langConfig,
            showModals: false,
            modalsdata: classroomStore.classroom,
            tableName: ['classroom'],
            panelStyle: ['orange', 'violet', 'green', 'blue', 'yellow', 'pink'],
            modalsType: types.APPEND_API,
            formData: {},
            inputClass: '',
            classActive: '',
            tableData: [],

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
            let title = '添加教室'
            if (this.modalsType == types.APPEND_API) {
                title = '添加教室'
            } else {
                title = '编辑教室'
            }
            return title
        },
        fieldColumn() {
            var tablefield = this.modalsdata
            var fields = []
            for (var item in tablefield) {
                if (tablefield[item].fieldColumn) {
                    fields.push(tablefield[item])
                }
            }
            return fields
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
        eventData() {
            let vm = this

            vm.$store.commit(types.GET_CURRENT_API, 'classroom')

            let filterData = []
            if (vm.$store.getters.getCurrentModel['classroom']) {
                let data = vm.$store.getters.getCurrentModel['classroom'].data

                filterData = lodash.filter(data, o => {
                    let result = false
                    let className = this.inputClass.trim()

                    if (className.length > 0) {
                        result = (o.name.indexOf(className) != -1)
                    } else {
                        result = true
                    }
                    return result
                })

                this.tableData = filterData
            }
            return filterData
        },
        operationGet() {
            let vm = this
            vm.$store.dispatch(types.GET_ARRAY_API, vm.tableName).then(() => {
                this.eventData()
            })
        },
        handleClear() {
            this.inputClass = ''
            this.eventData()
        },
        handleChange() {
            this.eventData()
        },
        handleDelete(index, row) {
            let vm = this
            this.$confirm('教室删除操作, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                vm.$store.dispatch(types.DELETE_API, {
                    'model': 'classroom',
                    'id': row._id,
                }).then(() => {
                    this.operationGet()
                    this.$notify({
                        title: '成功',
                        message: '教室删除成功!',
                        type: 'success'
                    })
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
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
                        'model': 'classroom',
                        'form': modalformValue.form
                    }).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '教室新建成功',
                            type: 'success'
                        })
                        this.inputClass = ''
                        this.operationGet()
                        vm.showModals = false
                    })
                } else {
                    vm.$store.dispatch(types.EDIT_API, {
                        'model': 'classroom',
                        'id': id,
                        'form': modalformValue.form,
                    }).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '教室修改成功!',
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
        editShowModals(index, row) {
            let vm = this
            vm.$store.dispatch(types.GET_ID_API, {
                'model': 'classroom',
                'id': row._id
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
