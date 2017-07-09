<template>
    <div :id="getId" :draggable="draggable" @dragstart="dragstart($event)" :class="getClass()" @click="handleClick($event)">
        <slot></slot>
    </div>
</template>
<script>
import langConfig from '~/lang'
import lodash from 'lodash'

export default {
    name: 'BtDrag',
    props: {
        'draggable': Boolean,
        'component': String,
        'componentData': Object,
        'componentName': String,
        'componentPid': {
            type: Number,
            default: 0
        },
        'componentId': {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            langConfig,
            ctrlkey: false,
            dragblock: {
                'bt-label': true,
                'bt-button': true,
                'bt-note': false,
                'bt-alert': false,
                'bt-icon': true,
                'bt-progress': false,
            }
        }
    },
    methods: {
        dragstart(ev) {
            if (ev.target.id == this.getId) {
                this.$store.commit('componentStatusChange', {
                    'id': 0,
                    'status': [{
                        'active': true
                    }]
                })
                ev.dataTransfer.setData('id', this.componentId)
                ev.dataTransfer.setData('name', this.componentName)

                ev.dataTransfer.setData('componentdata', JSON.stringify(this.componentData))
                ev.dataTransfer.setData('component', this.component)
                console.log(ev.clientX,ev.clientY)
            }
        },
        getClass() {
            let className = {}
            if (lodash.has(this.dragblock, this.component)) {
                let dragenterClassTemp = this.getComponentActive()
                className = {
                    'dragblock': this.dragblock[this.component]
                }
                className = lodash.merge(className, dragenterClassTemp)
            }
            return className
        },
        handleClick(event) {
            if (lodash.has(this.dragblock, this.component)) {
                this.$store.commit('componentColChange', {
                    'id': this.componentId,
                })
                this.$store.commit('componentStatusChange', {
                    'id': this.componentId,
                    'status': [{
                        'active': true
                    }]
                })
                event.stopPropagation()
            }
        },
    },
    computed: {
        getId() {
            let id = this.componentId
            if (!lodash.isNumber(id)) {
                id = -1
            }
            return 'id' + id
        },

    }
}
</script>
