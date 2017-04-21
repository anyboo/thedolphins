<template>
    <bt-drop class="demo" :class="getComponentActive">
        <template v-for="item in getDesignStore">
            <bt-component :component-name="item.component" :component-data="item" />
        </template>
    </bt-drop>
</template>
<style>
.demo {
    margin-left: 0px;
    margin-top: 10px;
    padding: 30px 15px 15px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    position: relative;
    word-wrap: break-word;
    min-height: 823px;
    background-color: #fff;
}

.demo:after {
    border: 1px solid #DDDDDD;
    border-radius: 4px 0 4px 0;
    color: #9DA0A4;
    content: "设计";
    font-size: 12px;
    font-weight: bold;
    left: -1px;
    padding: 3px 7px;
    position: absolute;
    top: -1px;
}

.demo .bt-row:nth-child(odd) {
    background-color: #d3dce6;
    padding: 7px 7px;
}

.demo .bt-row:nth-child(even) {
    background-color: #c5c9c2;
    padding: 7px 7px;
}

.demo .bt-col:nth-child(odd) {
    background-color: #fefefe;
}

.demo .bt-col:nth-child(even) {
    background-color: #efefef;
}

.demo .bt-col:nth-child(odd):after {
    border: 1px solid #efefef;
}

.demo .bt-col:nth-child(even):after {
    border: 1px solid #ffffef;
}

.demo .bt-col {
    min-height: 80px;
    border-radius: 4px;
    padding: 25px 20px;
    padding-bottom: 5px;
}

.demo .bt-col:after {
    border-radius: 4px 0 4px 0;
    color: #9DA0A4;
    content: "列";
    font-size: 12px;
    font-weight: bold;
    left: -1px;
    padding: 3px 7px;
    position: absolute;
    top: -1px;
}

.dragenter {
    border: 1px dashed #ff0000;
}

.dragenter:after {
    border: 1px dashed #ff0000 !important;
}

.bt-row.active {
    border: 1px dashed #0000ff !important;
}
.bt-col.active {
    border: 1px dashed #ff0000 !important;
}
.bt-row.haveactive {
    border: 1px dashed #ff00ff !important;
}
</style>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtLayoutPage',
    data() {
        return {
            langConfig
        }
    },
    methods: {

    },
    computed: {
        getDesignStore() {
            return this.$store.state.design.filter(designitem => designitem.pid == 0)
        },
        getComponentActive() {
            let item = this.$store.state.design.find(designitem => designitem.dragenter == true)
            let classobj = {'dragenter': false}
            if (item) {
                classobj = {
                    'dragenter': true
                }
            }
            console.log('getComponentActive',item)
            return classobj
        }
    },
}
</script>
