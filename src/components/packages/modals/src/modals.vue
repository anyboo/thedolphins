<template>
    <div v-if="modalsActive">
        <div id="modal-header-primary" tabindex="-1" role="dialog" aria-labelledby="modal-header-primary-label" aria-hidden="false" class="modal fade in" style="display: block" @click.self=" handleClose">
            <div class="modal-dialog ">
                <div class="modal-content ">
                    <div class="modal-header modal-header-primary ">
                        <button type="button " data-dismiss="modal " aria-hidden="true " class="close " @click="handleClose ">×</button>
                        <h4 id="modal-header-primary-label " class="modal-title ">{{ modalsTitle }}</h4>
                    </div>
                    <div class="modal-body ">
                        <slot></slot>
                    </div>
                    <div class="modal-footer ">
                        <button type="button " data-dismiss="modal " class="btn btn-default " @click="handleClose" >关闭</button>
                        <button type="button " class="btn btn-primary " @click="handleSave ">保存</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade in"></div>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtModals',
    props: ['modalsTitle', 'modalsActive'],
    data() {
        return {
            langConfig
        }
    },
    computed: {

    },
    methods: {
        handleSave() {
            this.$emit('save')
        },
        handleClose() {
            this.$emit('close')
        }
    }
}
</script>
