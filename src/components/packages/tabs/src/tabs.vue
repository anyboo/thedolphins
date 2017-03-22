<template>
    <div>
        <ul class="nav nav-tabs ul-edit responsive">
            <bt-tab-pane v-for="(item, index) in tabs" :to="item.to" :tab-pane-active="index==0" :tab-pane-title="item.title" :tab-pane-icon="item.icon"></bt-tab-pane>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade in active">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang';
import BtTabPane from './tab-pane.vue';

export default {
    name: 'BtTabs',
    props: ["tabs"],
    data() {
        return {
            langConfig
        };
    },
    components: {
        "bt-tab-pane": BtTabPane
    },
    methods: {},
    computed: {},
};
</script>
