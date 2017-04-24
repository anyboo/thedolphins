<template>
    <bt-drop :componentClass="getProps('componentClass', '')" :pid="getProps('componentId',0)">
        <template v-for="item in getDesignStore()">
            <bt-drag :draggable="draggable" :component="item.component" :component-id="item.id" :component-data="item.componentdata" :component-name="item.name">
                <bt-component :component-name="item.component" :component-data="item" />
            </bt-drag>
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
            draggable: true,
        }
    },
    methods: {

    },
    computed: {


    },
}
</script>
