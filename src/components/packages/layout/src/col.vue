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
            langConfig
        }
    },
    methods: {

    }
}
</script>
