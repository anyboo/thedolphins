<template>
    <div :id="getPid" :class="{'dragenter':dragenterclass}" @drop="drop($event)" @dragover="allowDrop($event)" @dragleave="dragleave($event)" @dragenter="dragenter($event)">
        <slot></slot>
    </div>
</template>
<script>
import langConfig from '~/lang'
import lodash from 'lodash'

export default {
    name: 'BtDrop',
    props: {
        'pid': {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            langConfig,
            dragenterclass: false
        }
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault()
        },
        dragleave(ev) {
            if (ev.target.id == this.getPid) {
                this.dragenterclass = false
            }
            return true
        },
        dragenter(ev) {
            if (ev.target.id == this.getPid) {
                this.dragenterclass = true
            }
            return true
        },
        drop(ev) {
            if (ev.target.id == this.getPid) {
                let maxobj = lodash.maxBy(this.$store.state.design, 'id')
                let maxid = 100
                if (lodash.isObject(maxobj) && lodash.isInteger(maxobj.id)) {
                    maxid = maxobj.id + 100
                }
                let designitem = {}
                let id = ev.dataTransfer.getData('id')
                let copy = ev.dataTransfer.effectAllowed

                console.log(copy)
                if (id == 0) {
                    this.$store.state.designitem.id = maxid
                    this.$store.state.designitem.name = ev.dataTransfer.getData('name')
                    this.$store.state.designitem.component = ev.dataTransfer.getData('component')
                    this.$store.state.designitem.componentdata = ev.dataTransfer.getData('componentdata')
                    this.$store.state.designitem.pid = this.pid
                    this.$store.state.designitem.index = maxid
                    designitem = lodash.cloneDeep(this.$store.state.designitem)
                    this.$store.commit('designPush', designitem)
                } else {
                    let action = 'designCopy'
                    if (copy == 'move') {
                        action = 'designEdit'
                    }

                    this.$store.commit(action, {
                        'id': id,
                        'pid': this.pid,
                        'maxid': maxid
                    })
                }
                this.dragenterclass = false
                ev.preventDefault()
            }
        },
    },
    computed: {
        getPid() {
            let pid = this.pid
            if (!lodash.isNumber(pid)) {
                pid = -1
            }
            return 'pid' + pid
        }
    }
}
</script>
