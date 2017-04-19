<template>
    <bt-row>
        <template v-for="item in colArray">
            <bt-col :class="colClass(item)"> </bt-col>
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
            langConfig
        }
    },
    methods: {
        colClass(num) {
            return 'col-md-' + num
        },
    },
    computed: {
        colArray() {
            let col = this.colNum || this.componentData
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
