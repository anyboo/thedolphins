<template>
    <div class="form-horizontal">
        <div class="form-body pal">
            <template v-for="item in itemData">
                <bt-form-item :item-data="item" />
            </template>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang';
import BtFormItem from './form-item.vue';

export default {
    name: 'BtForm',
    components: {
        "bt-form-item": BtFormItem
    },
    props: ["itemData"],
    data() {
        return {
            langConfig,
        };
    },
    methods: {},
    computed: {},
};
</script>
