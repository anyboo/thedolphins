<template>
    <div class="portlet portlet-blue box">
        <div class="portlet-header">
            <div class="caption">{{ portletTitle }}</div>
            <div class="tools" v-if="portletTools"><i class="fa" :class="classtool" @click="handClick"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i>
            </div>
        </div>
        <div class="portlet-body pan" v-if="isActive">
          <slot></slot>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang';

export default {
    name: 'BtPortlet',
    props: ["portletTitle", "portletTools", "portletActive"],
    data() {
        return {
            langConfig,
            isActive: this.portletActive,
            classtool: this.GetToolUpDown()
        };
    },
    computed: {

    },
    methods: {
        GetToolUpDown() {
            let classtool = 'fa-chevron-down';
            if (this.isActive) {
                classtool = 'fa-chevron-up';
            }
            return classtool;
        },
        handClick() {
            this.isActive = !this.isActive;
            this.classtool = this.GetToolUpDown();

        }
    }
};
</script>
