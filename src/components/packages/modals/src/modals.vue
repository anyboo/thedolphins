<template>
    <div v-if="modalsActive">
        <div id="modal-header-primary" tabindex="-1" role="dialog" aria-labelledby="modal-header-primary-label" aria-hidden="false" class="modal fade in" style="display: block;" @click.self=" handClose">
            <div class="modal-dialog ">
                <div class="modal-content ">
                    <div class="modal-header modal-header-primary ">
                        <button type="button " data-dismiss="modal " aria-hidden="true " class="close " @click="handClose ">×</button>
                        <h4 id="modal-header-primary-label " class="modal-title ">{{ modalsTitle }}</h4>
                    </div>
                    <div class="modal-body ">
                        <slot></slot>
                    </div>
                    <div class="modal-footer ">
                        <button type="button " data-dismiss="modal " class="btn btn-default " @click="handClose ">关闭</button>
                        <button type="button " class="btn btn-primary " @click="handSave ">保存</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade in"></div>
    </div>
</template>
<script>
import langConfig from '~/lang';

export default {
    name: 'BtModals',
    props: ['modalsTitle', 'modalsActive'],
    data() {
        return {
            langConfig
        };
    },
    computed: {

    },
    methods: {
        handSave() {
            this.isActive = false;
            this.handClose();
        },
        handClose() {
            this.isActive = false;
            this.$emit('close');
        }
    }
};
</script>
