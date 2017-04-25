<template>
    <bt-row :row-id="getProps('id',0)">
        <template v-for="item,index in colArray">
            <bt-col :class="colClass(item)" :component-id="getProps('id',0)+index+1"> </bt-col>
        </template>
    </bt-row>
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
            active: false
        }
    },
    methods: {
        colClass(num) {
            return 'col-md-' + num
        },
    },
    computed: {
        colArray() {
            let colvalue = this.getProps('colvalue', 12)
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
        }
    },
}
</script>
