<template>
    <bt-drop class="bt-col" :pid="componentId">
        <template v-for="item in getDesignStore">
            <bt-component :component-name="item.component" :component-data="item" />
        </template>
    </bt-drop>
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
