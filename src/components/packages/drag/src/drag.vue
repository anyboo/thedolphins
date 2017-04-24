<template>
    <div :id="getPid" :draggable="draggable" @dragstart="dragstart($event)" :class="getClass()">
        <slot></slot>
    </div>
</template>
<script>
import langConfig from '~/lang'
import lodash from 'lodash'

export default {
    name: 'BtDrag',
    props: ['draggable', 'component', 'componentData', 'componentName', 'componentId'],
    data() {
        return {
            langConfig,
            ctrlkey: false
        }
    },
    methods: {
        dragstart(ev) {
            if (ev.target.id == this.getPid) {
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
                console.log(dragenterClassTemp)
                className = lodash.merge(className, dragenterClassTemp)
            }

            return className
        },
    },
    computed: {
        getPid() {
            let pid = this.componentId
            if (!lodash.isNumber(pid)) {
                pid = -1
            }
            return 'pid' + pid
        },

    }
}
</script>
