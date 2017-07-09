<template>
    <div :class="styleName">
        <!--
        <div class="ribbon-wrapper">
            <div class="ribbon-inner">热</div>
        </div>
        -->
        <div class="panel-heading clearfix">
              <slot name="head"></slot>
        </div>
        <div class="panel-body pan text-center">
            <slot></slot>
        </div>
        <div class="panel-footer pan">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<style>
.panel > .panel-heading {
    font-size: 18px;
    border-top-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
    border-color: #e5e5e5 !important;
    color: #00ff00;
}
.panel > .panel-heading .toolbars a:link {
     color: #cccccc;
}
</style>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtPanel',
    props: ['panelStyle', 'componentData'],
    data() {
        return {
            langConfig
        }
    },
    methods: {},
    computed: {
        styleName() {
            var styleName = 'panel panel-orange'
            if (this.panelStyle) {
                styleName = 'panel panel-' + this.panelStyle
            }
            return styleName
        }
    }
}
</script>
