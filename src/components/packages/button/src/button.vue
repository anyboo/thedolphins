<template>
    <button type="button" :class="styleName">{{ getProps('buttonText','button') }}</button>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtButton',
    props: ['buttonStyle', 'buttonText', 'buttonSize', 'buttonBlock', 'buttonOutlined', 'componentData'],
    data() {
        return {
            langConfig
        }
    },
    computed: {
        styleName() {
            var styleName = 'btn '
            if (this.getProps('buttonOutlined', false)) {
                styleName += 'btn-outlined '
            }
            if (this.getProps('buttonBlock', false)) {
                styleName += 'btn-block '
            }
            styleName += 'btn-' + this.getProps('buttonStyle', 'default')
            let btnSize = this.getProps('buttonSize', 'default')
            if (btnSize != 'default') {
                styleName += ' btn-' + btnSize
            }
            return styleName
        }
    }
}
</script>
