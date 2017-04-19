<template>
    <component v-bind:is="componentName" :component-data="componentData">{{ componentData }}</component>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtComponent',
    props: ['componentName', 'componentData'],
    data() {
        return {
            langConfig,
        }
    },
    methods: {},
    computed: {},
}
</script>
