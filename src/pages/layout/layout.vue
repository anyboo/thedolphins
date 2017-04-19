<template>
    <div class="demo" :class="{'dragenter':dragenterclass}" @drop="drop($event)" @dragover="allowDrop($event)" @dragleave="dragleave($event)" @dragenter="dragenter($event)">
        <template v-for="item in allComponents">
            <bt-component :component-name="item.component" :component-data="item.componentdata" />
        </template>
    </div>
</template>
<style>
.demo {
    margin-left: 0px;
    margin-top: 10px;
    padding: 30px 15px 15px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    position: relative;
    word-wrap: break-word;
    min-height: 823px;
    background-color: #fff;
}

.demo:after {
    border: 1px solid #DDDDDD;
    border-radius: 4px 0 4px 0;
    color: #9DA0A4;
    content: "设计";
    font-size: 12px;
    font-weight: bold;
    left: -1px;
    padding: 3px 7px;
    position: absolute;
    top: -1px;
}

.demo .bt-row:nth-child(odd) {
    background-color: #d3dce6;
    padding: 7px 7px;
}

.demo .bt-row:nth-child(even) {
    background-color: #c5c9c2;
    padding: 7px 7px;
}

.demo .bt-col:nth-child(odd) {
    background-color: #fefefe;
}

.demo .bt-col:nth-child(even) {
    background-color: #efefef;
}

.demo .bt-col:nth-child(odd):after {
    border: 1px solid #efefef;
}

.demo .bt-col:nth-child(even):after {
    border: 1px solid #ffffef;
}

.demo .bt-col {
    min-height: 80px;
    border-radius: 4px;
    padding: 25px 20px;
    padding-bottom: 5px;
}

.demo .bt-col:after {
    border-radius: 4px 0 4px 0;
    color: #9DA0A4;
    content: "列";
    font-size: 12px;
    font-weight: bold;
    left: -1px;
    padding: 3px 7px;
    position: absolute;
    top: -1px;
}

.dragenter {
    border: 1px dashed #ff0000 ;
}

.dragenter:after {
    border: 1px dashed #ff0000 !important;
}
</style>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtLayoutPage',
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
            if (ev.target.className.indexOf('demo') != -1) {
                this.dragenterclass = false
            }
            return true
        },
        dragenter(ev) {
            if (ev.target.className.indexOf('demo') != -1) {
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
