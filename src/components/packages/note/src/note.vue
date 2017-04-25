<template>
    <div :class="styleName">
        <h3>{{ getProps('noteHeader','Hender') }}</h3>
        <p>{{ getProps('noteText','note') }}</p>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtNote',
    props: ['noteStyle', 'noteText', 'noteHeader','componentData'],
    data() {
        return {
            langConfig
        }
    },
    computed: {
        styleName() {
            let styleName = 'note note-' + this.getProps('noteStyle', 'info')
            return styleName
        }
    }
}
</script>
