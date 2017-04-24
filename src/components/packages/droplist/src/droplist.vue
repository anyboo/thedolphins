<template>
    <bt-drop :componentClass="getProps('componentClass', '')" :pid="getProps('componentId',0)">
        <template v-for="item in getDesignStore()">
            <bt-component :component-name="item.component" :component-data="item" />
        </template>
    </bt-drop>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtDroplist',
    props: ['componentId', 'componentClass'],
    data() {
        return {
            langConfig,
        }
    },
    methods: {
       
    },
    computed: {


    },
}
</script>
