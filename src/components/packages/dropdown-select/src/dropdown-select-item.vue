<template>
    <li class="ms-hover" :class="{selected:itemSelect}">
        <a @click="handleClick">
        {{ item }} 
        <i class="fa fa-check icon-ok check-mark"></i>
        </a>
    </li>
</template>
<script>
import langConfig from '~/lang';

export default {
    name: 'BtDropdownSelectItem',
    props: ['item','itemId'],
    data() {
        return {
            langConfig,
            itemSelect: false
        };
    },
    methods: {
        handChange() {
            this.itemSelect = false;
        },
        handleClick() {
            this.itemSelect = !this.itemSelect;
            let value = '';
            if (this.itemSelect) {
                value = this.item;
                let uid = this._uid;
                this.$parent.$children.forEach(child => {
                    if (child._uid !== uid) {
                        if (typeof(child.handChange) == 'function')
                            child.handChange();
                    }
                });
            }

            this.$emit('selected', value);
        }
    },
    computed: {},
};
</script>
