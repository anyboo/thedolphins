<template>
    <div class="form-horizontal">
        <div class="form-body pal" ref="formitem">
            <template v-for="item in itemData">
                <bt-form-item :item-data="item" />
            </template>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang';
import BtFormItem from './form-item.vue';
import lodash from 'lodash';

export default {
    name: 'BtForm',
    components: {
        'bt-form-item': BtFormItem
    },
    props: ['itemData'],
    data() {
        return {
            langConfig,
        };
    },
    methods: {
        getForm() {
            let validate = true;
            let formValue = {};
            lodash.forEach(this.$children, obj => {
                obj.validate();
                if (obj.stateError) {
                    validate = false;
                } else {
                    formValue[obj.curKey] = obj.curValue;
                }
            });
            return {
                'validate': validate,
                'form': formValue
            };
        }
    },
    computed: {},
};
</script>
