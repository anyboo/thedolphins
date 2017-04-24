<template>
    <bt-droplist componentClass="bt-col" :component-id="componentId" />
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtCol',
    props: ['componentId'],
    data() {
        return {
            langConfig,
            dragenterclass: false,
        }
    },
    methods: {

    },
    computed: {
        getDesignStore() {
            return this.$store.state.design.filter(designitem => designitem.pid == this.componentId)
        }
    },
}
</script>
