<template>
    <div class="row">
        <div class="col-md-8">
            <bt-droplist componentClass="demo" :component-id="0" />
        </div>
        <div class="col-md-4">
            <div class="panel panel-violet">
                <div class="panel-heading">属性</div>
                <div class="panel-body pan">
                    <bt-form :item-data="modalsdata" ref="modalform" :form-data="tabsData" />
                    <div class="form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button type="button" class="btn btn-primary">保存</button>&nbsp;
                            <button type="button" class="btn btn-green">重置</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-green">
                <div class="panel-heading">事件</div>
                <div class="panel-body pan">
                    <div class="form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button type="button" class="btn btn-primary">保存</button>&nbsp;
                            <button type="button" class="btn btn-green">重置</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
import layouteStore from '~/store/pages/layout.js'
export default {
    name: 'BtLayoutPage',
    data() {
        return {
            langConfig,
            modalsdata: layouteStore.layout,
            tabsData: {}
        }
    },
    methods: {

    },
    computed: {


    },
}
</script>
