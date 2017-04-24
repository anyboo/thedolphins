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
            console.log(this.componentId)
            return this.$store.state.design.filter(designitem => designitem.pid == this.componentId)
        },
        getComponentActive() {
            let item = this.$store.state.design.find(designitem => designitem.dragenter == true)
            let classobj = {
                'dragenter': false
            }
            if (item) {
                classobj = {
                    'dragenter': true
                }
            }
            return classobj
        }
    }
}
