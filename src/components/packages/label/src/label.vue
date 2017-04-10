<template>
    <span :class="styleName">{{ labelText }}</span>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtLabel',
    props: ['labelStyle', 'labelText', 'lableBadge'],
    data() {
        return {
            langConfig
        }
    },
    computed: {
        styleName() {
            var styleName = 'abel-primary'
            if (this.lableBadge) {
                styleName = 'badge badge-' + this.labelStyle
            } else {
                styleName = 'label label-' + this.labelStyle
            }
            return styleName
        }
    }
}
</script>
