<template>
    <div class="bt-col" :class="{'dragenter':dragenterclass}" @drop="drop($event)" @dragover="allowDrop($event)" @dragleave="dragleave($event)" @dragenter="dragenter($event)">
        <template v-for="item in allComponents">
            <bt-component :component-name="item.component" :component-data="item.componentdata" />
        </template>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtCol',
    data() {
        return {
            langConfig,
            allComponents: [], 
            dragenterclass: false,
        }
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault()
        },
        dragleave(ev) {
            if (ev.target.className.indexOf('bt-col') != -1) {
                this.dragenterclass = false
            }
            return true
        },
        dragenter(ev) {
            if (ev.target.className.indexOf('bt-col') != -1) {
                this.dragenterclass = true
            }
            return true
        },
        drop(ev) {
            let componentinfo = {}
            componentinfo.component = ev.dataTransfer.getData('component')
            componentinfo.componentdata = ev.dataTransfer.getData('componentdata')
            this.dragenterclass = false
            this.allComponents.push(componentinfo)
            ev.preventDefault()
        },
    },
    computed: {},
}
</script>
