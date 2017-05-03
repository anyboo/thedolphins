<template>
    <div :id="getId" @drop="drop($event)" @dragover="allowDrop($event)" @dragleave="dragleave($event)" @dragenter="dragenter($event)" @click="handleClick($event)" :class="getClass()">
        <slot></slot>
    </div>
</template>
<script>
import langConfig from '~/lang'
import lodash from 'lodash'

export default {
    name: 'BtDrop',
    props: {
        'componentPid': {
            type: Number,
            default: 0
        },
        'componentId': {
            type: Number,
            default: 0
        },
        'componentClass': {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            langConfig,
        }
    },
    methods: {
        getClass() {
            let result = {}
            let className = this.getProps('componentClass', '')
            let classlist = className.split(' ')
            classlist.forEach(item => {
                result[item] = true
            })
            let dragenterClassTemp = this.getComponentActive()
            result = lodash.merge(result, dragenterClassTemp)
            return result
        },
        allowDrop(ev) {
            ev.preventDefault()
        },
        changeDragenter(ev, status) {
            if (ev.target.id == this.getId) {
                this.$store.commit('componentStatusChange', {
                    'id': this.componentId,
                    'status': {
                        'dragenter': status
                    }
                })
            }
        },
        dragleave(ev) {
            this.changeDragenter(ev, false)
            return true
        },
        dragenter(ev) {
            this.changeDragenter(ev, true)
            return true
        },
        drop(ev) {
            if (ev.target.id == this.getId) {
                console.log('drop',ev.clientX,ev.clientY,ev.target.getBoundingClientRect().left,ev.target.getBoundingClientRect().top)
                let designitem = {}
                let id = ev.dataTransfer.getData('id')
                let copy = ev.dataTransfer.effectAllowed

                if (id.length == 0) {
                    return
                }

                if (id == 0) {
                    this.$store.state.maxid += 100
                    this.$store.state.designitem.id = this.$store.state.maxid
                    this.$store.state.designitem.name = ev.dataTransfer.getData('name')
                    this.$store.state.designitem.component = ev.dataTransfer.getData('component')
                    let componentdata = ev.dataTransfer.getData('componentdata') || {}

                    this.$store.state.designitem.componentdata = JSON.parse(componentdata)
                    this.$store.state.designitem.pid = this.componentId
                    this.$store.state.designitem.index = this.$store.state.maxid
                    this.$store.state.designitem.real = true
                    designitem = lodash.cloneDeep(this.$store.state.designitem)
                    this.$store.commit('designPush', designitem)
                } else {
                    let action = 'designEdit'
                    if (copy == 'move') {
                        action = 'designCopy'
                    }

                    this.$store.commit(action, {
                        'id': Number(id),
                        'pid': this.componentId
                    })
                }
                this.changeDragenter(ev, false)
                ev.preventDefault()
            }
        },
        handleClick() {
            this.$store.commit('componentColChange', {
                'id': this.componentId,
            })
        },
    },
    computed: {
        getId() {
            let id = this.componentId
            if (!lodash.isNumber(id)) {
                id = -1
            }
            return 'id' + id
        }
    }
}
</script>
