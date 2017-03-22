<template>
    <li :class="{active:isActive}" @click="handClick">
        <router-link :to="to">
            <i class="fa" :class="tabPaneIcon"></i> {{ tabPaneTitle }}
        </router-link>
    </li>
</template>
<script>
import langConfig from '~/lang';

export default {
    name: 'BtTabPane',
    props: ["tabPaneTitle", "tabPaneIcon", "to", "tabPaneActive"],
    data() {
        return {
            langConfig,
            isActive: this.tabPaneActive
        };
    },
    methods: {
      handClick(){
        this.isActive = true;
        this.$parent.$children.forEach(child => {
                    if (child._uid !== this._uid) {
                        child.isActive = false;
                    }
                });
      }
    },
    computed: {},
};
</script>
