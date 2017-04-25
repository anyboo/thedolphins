<template>
    <div :id="getId" :draggable="draggable" @dragstart="dragstart($event)" :class="getClass()">
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
            ctrlkey: false
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
            }
        },
        getClass() {
            let className = {}
            if (this.component == 'bt-label') {
                let dragenterClassTemp = this.getComponentActive()
                className = {
                    'dragblock': true
                }
                className = lodash.merge(className, dragenterClassTemp)
            }

            return className
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
