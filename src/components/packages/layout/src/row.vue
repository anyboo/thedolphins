<template>
    <div class="bt-row row">
      <slot></slot>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtRow',
    data() {
        return {
            langConfig
        }
    },
    methods: {
    },
    computed: {
    },
}
</script>