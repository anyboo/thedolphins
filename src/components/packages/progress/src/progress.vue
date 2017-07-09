<template>
    <div class="progress progress-striped active">
        <div role="progressbar" :class="styleName" style="width: 60%">
            <span class="progressbar-front-text">{{ getProps('progressValue','60') }}%</span>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtProgress',
    props: ['progressStyle', 'progressValue', 'componentData'],
    data() {
        return {
            langConfig
        }
    },
    computed: {
        styleName() {
            let styleName = 'progress-bar progress-bar-' + this.getProps('progressStyle', 'success')
            return styleName
        }
    }
}
</script>
