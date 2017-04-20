<template>
    <bt-drag :draggable="draggable" :component="componentData.component" :component-id="componentData.id" :component-data="componentData.componentdata" :component-name="componentData.name">
        <bt-row>
            <template v-for="item,index in colArray">
                <bt-col :class="colClass(item)" :component-id="getComponentId+index"> </bt-col>
            </template>
        </bt-row>
    </bt-drag>
</template>
<script>
import langConfig from '~/lang'
import lodash from 'lodash'

export default {
    name: 'BtLayout',
    props: ['colNum', 'componentData'],
    data() {
        return {
            langConfig,
            draggable: true
        }
    },
    methods: {
        colClass(num) {
            return 'col-md-' + num
        },
    },
    computed: {
        colArray() {
            let colvalue = this.componentData ? this.componentData.componentdata : 12
            let col = this.colNum || colvalue
            let num = lodash(col).trim()
            let numArray = num.split(' ')
            let numcount = lodash.reduce(numArray,
                function(sum, n) {
                    return sum + Number(n)
                }, 0)
            if (numcount != 12) {
                numArray = [12]
            }
            return numArray
        },
        getComponentId() {
            return this.componentData ? this.componentData.id : 0
        }
    },
}
</script>
