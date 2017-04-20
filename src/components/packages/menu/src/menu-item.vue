<template>
    <li :class="{ active: isActive }">
        <a @click="handleClick">
            <bt-drag :draggable="draggable" :component="component" :component-id="0" :component-data="componentData" :component-name="menuTitle">
                <i class="fa" :class="menuIcon">
                     <div class="icon-bg bg-orange"/>
              </i>
                <span class="menu-title">{{ menuTitle }}</span>
                <span v-if="menuName" class="fa arrow"></span>
            </bt-drag>
        </a>
        <slot></slot>
    </li>
</template>
<script>
export default {
    name: 'BtMenuItem',
    componentName: 'BtMenuItem',
    props: ['menuName', 'menuTitle', 'menuIcon', 'to', 'draggable', 'component', 'componentData'],
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        handChange() {
            this.isActive = false
            var obj = this.getSlots()
            if (obj) {
                obj.menuChanged(this.isActive)
                this.changAction(obj, 0)
            }
        },
        getSlots() {
            var obj = null
            if (this.$slots.default && this.$slots.default.length > 0) {
                obj = this.$slots.default[0].componentInstance
            }
            return obj
        },
        changAction(obj, uid) {
            if (obj) {
                obj.$children.forEach(child => {
                    if (child._uid !== uid) {
                        if (typeof(child.handChange) == 'function')
                            child.handChange()
                    }
                })
            }
        },
        handleClick(event) {
            this.isActive = !this.isActive
            this.changAction(this.$parent, this._uid)
            var obj = this.getSlots()
            if (obj) {
                obj.menuChanged(this.isActive)
                if (event) event.preventDefault()
            } else {
                if (this.to) {
                    this.$router.push(this.to)
                }
            }
        }
    }
}
</script>
