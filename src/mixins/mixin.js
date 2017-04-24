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
                return designitem.id == this.componentId
            })
            console.log('getComponentActive',item,this.pid,this.componentId)
            let classobj = {
                'dragenter': false,
                'btactive': false
            }
            if (this.$store.state.dragenterCol == this.pid) {
                classobj.btactive = true
            }
            if (item) {
                classobj.dragenter = true
            }
            return classobj
        }
    }
}
