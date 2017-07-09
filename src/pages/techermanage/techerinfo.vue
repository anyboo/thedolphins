<template>
    <div>
        <bt-form :item-data="modalsdata" ref="modalform" :form-data="tabsData" />
        <div>
            <button type="button" class="btn btn-default " @click="handleClose">返回列表</button>
            <button type="button" class="btn btn-primary" @click="handleSave">保存</button>
            <button type="button" class="btn btn-primary" @click="handleDelete">删除</button>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang'
import * as types from '~/store/mutation-types'
import techerManageStore from '~/store/pages/techermanage.js'

export default {
    name: 'BtTecherInfo',
    props: ['tabsData'],
    data() {
        return {
            langConfig,
            modalsdata: techerManageStore.techermanage,
        }
    },
    methods: {
        handleClose() {
            this.$router.push('/techermanage/')
        },
        handleSave() {
            let vm = this
            let id = this.$route.params.id
            let modalform = vm.$refs.modalform
            let modalformValue = modalform.getForm()
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
                //let datatime = new Date()+ datatime.getTime()
                this.$router.push('/techerprofile/' + id + '/ss' )
            })
        },
        handleDelete() {
            let vm = this
            let id = this.$route.params.id
            this.$confirm('老师删除操作, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                vm.$store.dispatch(types.DELETE_API, {
                    'model': 'techermanage',
                    'id': id,
                }).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '老师删除成功!',
                        type: 'success'
                    })
                    this.handleClose()

                })
            })
        },
    },
    computed: {},
}
</script>
