<template>
    <div class="row">
        <div class="col-md-12">
            <div class="demo-btn">
                <button type="button" class="btn btn-red btn-outlined btn-square" @click="handleNew">新建</button>
                <button type="button" class="btn btn-orange btn-outlined btn-square" @click="handleShowModals">保存</button>
                <button type="button" class="btn btn-green btn-outlined btn-square" @click="handleDel">删除</button>
                <button type="button" class="btn btn-violet btn-outlined btn-square" @click="handlePreiew" v-if="!isPreiew">预览</button>
                <button type="button" class="btn btn-blue btn-outlined btn-square" @click="handleDesign" v-if="isPreiew">设计</button>
                <button type="button" class="btn btn-blue btn-outlined btn-square" @click="handleProperty">属性</button>
            </div>
        </div>
        <div :class="{'col-md-8':isProperty,'col-md-12':!isProperty}">
            <bt-droplist :componentClass="componentClass" :component-id="100" :component-pid="0" />
        </div>
        <div class="col-md-4" v-if="isProperty">
            <div class="panel panel-violet">
                <div class="panel-heading">属性</div>
                <div class="panel-body pan">
                    <bt-form :item-data="layoutdata" ref="layoutform" :form-data="tabsData" />
                    <div class="form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button type="button" class="btn btn-primary" @click="handleSaveCom">保存</button>&nbsp;
                            <button type="button" class="btn btn-primary" @click="handleDelCom">删除</button>&nbsp;
                            <button type="button" class="btn btn-green" @click="handleReset">重置</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-green">
                <div class="panel-heading">事件</div>
                <div class="panel-body pan">
                    <div class="form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button type="button" class="btn btn-primary" @click="handleSaveEvent">保存</button>&nbsp;
                            <button type="button" class="btn btn-green" @click="handleResetEvent">重置</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <bt-modals :modals-active="showModals" modalsTitle="保存页面" @close="handleClose" @save="handleSave">
            <bt-form :item-data="modalsdata" ref="modalform" :form-data="formData" />
        </bt-modals>
    </div>
</template>
<style>
.demo {
    margin-left: 0px;
    margin-top: 10px;
    padding: 30px 15px 15px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    position: relative;
    word-wrap: break-word;
    min-height: 823px;
    background-color: #fff;
}

.demo:after {
    border: 1px solid #DDDDDD;
    border-radius: 4px 0 4px 0;
    color: #9DA0A4;
    content: "设计";
    font-size: 12px;
    font-weight: bold;
    left: -1px;
    padding: 3px 7px;
    position: absolute;
    top: -1px;
}

.demo .bt-row:nth-child(odd) {
    background-color: #d3dce6;
    padding: 7px 7px;
}

.demo .bt-row:nth-child(even) {
    background-color: #c5c9c2;
    padding: 7px 7px;
}

.demo .bt-col:nth-child(odd) {
    background-color: #fefefe;
}

.demo .bt-col:nth-child(even) {
    background-color: #efefef;
}

.demo .bt-col:nth-child(odd):after {
    border: 1px solid #efefef;
}

.demo .bt-col:nth-child(even):after {
    border: 1px solid #ffffef;
}

.demo .bt-col {
    min-height: 80px;
    border-radius: 4px;
    padding: 25px 20px;
    padding-bottom: 5px;
}

.demo .bt-col:after {
    border-radius: 4px 0 4px 0;
    color: #9DA0A4;
    content: "列";
    font-size: 12px;
    font-weight: bold;
    left: -1px;
    padding: 3px 7px;
    position: absolute;
    top: -1px;
}

.dragenter {
    border: 1px dashed #ff0000;
}

.dragenter:after {
    border: 1px dashed #ff0000 !important;
}

.btactive {
    border: 1px dashed #ff0000 !important;
}

.btactive:after {
    border: 1px dashed #ff0000 !important;
}

.bt-row.haveactive {
    border: 1px dashed #ff00ff !important;
}

.dragblock {
    display: inline-block;
}
</style>
<script>
import langConfig from '~/lang'
import layouteStore from '~/store/pages/layout.js'
import * as types from '~/store/mutation-types'
import lodash from 'lodash'

export default {
    name: 'BtLayoutPage',
    data() {
        return {
            langConfig,
            showModals: false,
            modalsdata: layouteStore.design,
            layoutdata:layouteStore.layout,
            tabsData: {},
            isPreiew: false,
            componentClass: 'demo',
            isProperty: true,
            formData: {},
        }
    },
    mounted() {
        this.handleNew()
    },
    methods: {
        handleNewAction() {
            this.$store.commit('designInit')
            this.$store.state.maxid = 100
            this.$store.state.designitem.id = this.$store.state.maxid
            this.$store.state.designitem.name = '拖拉列表组件'
            this.$store.state.designitem.component = 'bt-droplist'
            this.$store.state.designitem.componentdata = {}
            this.$store.state.designitem.pid = 0
            this.$store.state.designitem.index = this.$store.state.maxid
            this.$store.state.designitem.real = false

            let designitem = lodash.cloneDeep(this.$store.state.designitem)
            this.$store.commit('designPush', designitem)
        },
        handleNew() {
            let vm = this
            if (this.$store.state.designChange) {
                this.$confirm('新建操作, 设计中有修改是否继续新建?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    vm.handleNewAction()
                    this.$message({
                        type: 'info',
                        message: '已新建成功'
                    })
                }).catch(() => {

                })
            } else {
                vm.handleNewAction()
            }
        },
        handleDel() {

        },
        handlePreiew() {
            this.isPreiew = true
            this.$store.commit('componentColChange', {
                'id': 0,
            })
            this.componentClass = ''
        },
        handleDesign() {
            this.isPreiew = false
            this.componentClass = 'demo'
        },
        handleSaveCom() {

        },
        handleDelCom() {

        },
        handleReset() {

        },
        handleSaveEvent() {

        },
        handleResetEvent() {

        },
        handleProperty() {
            this.isProperty = !this.isProperty
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
                        'model': 'designmanage',
                        'form': modalformValue.form
                    }).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '页面新建成功',
                            type: 'success'
                        })
                        vm.showModals = false
                    })
                } else {
                    vm.$store.dispatch(types.EDIT_API, {
                        'model': 'designmanage',
                        'id': id,
                        'form': modalformValue.form,
                    }).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '页面修改成功!',
                            type: 'success'
                        })
                        vm.showModals = false
                    })
                }
            }
        },
        handleShowModals() {
            this.formData = {}
            this.showModals = true
            return false
        },
    },
    computed: {},
}
</script>
