<template>
    <div :class="styleName">
        <!--
        <div class="ribbon-wrapper">
            <div class="ribbon-inner">热</div>
        </div>
        -->
        <div class="panel-heading">
            <h3 class="panel-title text-center">{{ panelText }}</h3>
        </div>
        <div class="panel-body pan text-center">
            <slot></slot>
        </div>
        <div class="panel-footer pan"><a href="javascript:void(0)" role="button" class="btn btn-block" :class="btnStyleName">编辑</a>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtPanel',
    props: ['panelStyle', 'panelText'],
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
        },
        btnStyleName() {
            var styleName = 'btn-orange'
            if (this.panelStyle) {
                styleName = 'btn-' + this.panelStyle
            }
            return styleName
        }
    }
}
</script>
