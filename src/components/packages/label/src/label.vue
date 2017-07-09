<template>
    <span :class="styleName">{{ getProps('labelText','label') }}</span>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtLabel',
    props: ['labelStyle', 'labelText', 'lableBadge','componentData'],
    data() {
        return {
            langConfig
        }
    },
    computed: {
        styleName() {
            var styleName = 'label-primary'
            if (this.getProps('lableBadge',false)) {
                styleName = 'badge badge-' + this.getProps('labelStyle','primary')
            } else {
                styleName = 'label label-' + this.getProps('labelStyle','primary')
            }

            return styleName
        }
    }
}
</script>
