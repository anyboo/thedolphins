<template>
    <div :class="styleName">
        <strong>{{ getProps('alertHeader','Hender') }}</strong>
       {{ getProps('alertText','note') }}
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtAlert',
    props: ['alertStyle', 'alertText', 'alertHeader','componentData'],
    data() {
        return {
            langConfig
        }
    },
    computed: {
        styleName() {
            let styleName = 'alert alert-' + this.getProps('alertStyle', 'info')
            return styleName
        }
    }
}
</script>
