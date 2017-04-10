<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <bt-portlet portlet-title="课程面板" :portlet-tools="true" :portlet-active="true">
                    <div class="form-horizontal">
                        <div class="form-body pal">
                            <div class="form-group">
                                <label for="inputUsername" class="col-md-3 control-label">课程名称
                                </label>
                                <div class="col-md-9">
                                    <div class="input-icon"><i class="fa fa-user"></i>
                                        <input id="inputUsername" type="text" placeholder="课程名称" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail" class="col-md-3 control-label">课程
                                </label>
                                <div class="col-md-9 gallery-pages">
                                    <ul class="list-filter list-unstyled">
                                        <li data-filter="all" class="filter active">全部</li>
                                        <li data-filter=".development" class="filter">音乐</li>
                                        <li data-filter=".design" class="filter">钢琴</li>
                                        <li data-filter=".photography" class="filter">画画</li>
                                        <li data-filter=".wordpress" class="filter">英语</li>
                                        <li data-filter=".html" class="filter">汉语</li>
                                    </ul>
                                    <ul class="list-filter list-unstyled">
                                        <li data-filter="all" class="filter active">全部</li>
                                        <li data-filter=".development" class="filter">音乐</li>
                                        <li data-filter=".design" class="filter">钢琴</li>
                                        <li data-filter=".photography" class="filter">画画</li>
                                        <li data-filter=".wordpress" class="filter">英语</li>
                                        <li data-filter=".html" class="filter">汉语</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form-actions none-bg">
                            <div class="col-md-offset-3 col-md-9">
                                <button class="btn btn-primary" @click="handleShowModals"> <i class="fa fa-upload mrs"></i>添加</button>
                                <button class="btn btn-primary"> <i class="fa fa-edit mrs"></i>搜索 </button>
                                <button class="btn btn-primary"> <i class="fa fa-trash-o mrs"></i>重置</button>
                            </div>
                        </div>
                    </div>
                </bt-portlet>
            </div>
        </div>
        <div id="page-pricing" class="row">
            <div class="col-md-12">
                <h2>跳舞</h2>
                <div class="row mtl">
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <bt-panel panel-text="wer" />
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <bt-panel panel-text="wer" panel-style="violet" />
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <bt-panel panel-text="wer" panel-style="green" />
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <bt-panel panel-text="wer" panel-style="blue" />
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <bt-panel panel-text="wer" panel-style="yellow" />
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <bt-panel panel-text="wer" panel-style="pink" />
                    </div>
                </div>
            </div>
        </div>
        <bt-modals :modals-active="showModals" modalsTitle="添加课程" @close="handleClose" @save="handleSave">
            <bt-form :item-data="modalsdata" ref="modalform" />
        </bt-modals>
    </div>
</template>
<script>
import langConfig from '~/lang'
import coursemanage from '~/store/coursemanage.js'
import * as types from '~/store/mutation-types'
import lodash from 'lodash'

export default {
    name: 'BtCourseManage',
    data() {
        return {
            langConfig,
            showModals: false,
            modalsdata: coursemanage.coursemanage,
            tableName: ['coursemanage','courseclass']
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
        eventData() {
            let vm = this

            vm.$store.commit(types.GET_CURRENT_API, vm.tableName)
            let filterData = {}
            if (vm.$store.getters.getCurrentModel[vm.tableName]) {
                let data = vm.$store.getters.getCurrentModel[vm.tableName].data
                filterData = lodash.filter(data, o => {
                    let result = true
                    if (o[vm.tableLabel]) {
                        result = true
                    } else {
                        result = false
                    }
                    return result
                })
            }
            this.modelData = filterData
            return filterData
        },
    },
    beforeMount() {
        this.operationGet()
    },
    methods: {
        operationGet() {
            let vm = this
            vm.$store.dispatch(types.GET_ARRAY_API, vm.tableName).then(() => {
                this.eventData
            })
        },
        handleClose() {
            this.showModals = false
        },
        handleSave() {
            let vm = this
            let modalform = vm.$refs.modalform
            let modalformValue = modalform.getForm()
            if (modalformValue.validate) {
                vm.$store.dispatch(types.APPEND_API, {
                    'model': 'coursemanage',
                    'form': modalformValue.form
                }).then(() => {
                    vm.showModals = false
                })
            }
        },
        handleShowModals() {
            this.showModals = true
            return false
        }
    }
}
</script>
