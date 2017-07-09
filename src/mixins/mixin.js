export default {
    methods: {
        getProps(propsName, defValue) {
            let result = defValue
            let find = false
            if (this.componentData) {
                if (this.componentData.componentdata) {
                    if (this.componentData.componentdata[propsName]) {
                        find = true
                        result = this.componentData.componentdata ? this.componentData.componentdata[propsName] : defValue
                    }
                }
                if (!find) {
                    if (this.componentData[propsName]) {
                        find = true
                        result = this.componentData ? this.componentData[propsName] : defValue
                    }
                }
            }
            if (!find) {
                result = this[propsName] ? this[propsName] : defValue
            }
            return result
        },
        getDesignStore() {
            return this.$store.state.design.filter(designitem => designitem.pid == this.componentId)
        },
        getComponentActive() {
            let item = this.$store.state.design.find(designitem => {
                return designitem.id == this.componentId && designitem.dragenter
            })
            let classobj = {
                'dragenter': false,
                'btactive': false
            }

            if (this.$store.state.dragenterCol == this.componentId) {
                classobj.btactive = true
            }
            if (this.componentId == this.componentPid && this.componentPid == 0) {
                classobj.btactive = false
            }
            if (item) {
                classobj.dragenter = true
            }
            return classobj
        }
    }
}
