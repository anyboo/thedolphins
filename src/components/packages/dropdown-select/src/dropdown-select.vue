<template>
    <div>
        <div class="btn-group bootstrap-select show-tick form-control" :class="{open:menuShow}" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <button type="button" class="btn dropdown-toggle selectpicker btn-white" @focus="handleFocus" @blur="handleBlur">
                <span class="filter-option pull-left">{{ selectValue }} </span>&nbsp;<span class="caret"></span>
            </button>
            <div class="dropdown-menu open">
                <ul class="dropdown-menu inner selectpicker" role="menu">
                    <li v-if="applend">
                        <div class="input-group">
                            <input type="text" placeholder="新增" @input="handleInput($event.target.value)" class="form-control" @focus="handleFocus" @blur="handleBlur">
                            <span class="input-group-addon"><i class="fa fa-plus" @click="handleApplend"></i></span>
                        </div>
                    </li>
                    <template v-for="item in modelData">
                        <bt-dropdown-select-item :item="lodash.get(item, tableLabel)" :item-id="lodash.get(item, tableId)" @selected="handleSelected" />
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang';
import BtDropdownSelectItem from './dropdown-select-item.vue';
import * as types from '~/store/mutation-types';
import lodash from 'lodash';

export default {
    name: 'BtDropdownSelect',
    components: {
        'bt-dropdown-select-item': BtDropdownSelectItem
    },
    data() {
        return {
            langConfig,
            menuOpen: false,
            menuEnter: false,
            menuFocus: false,
            inputValue: '',
            selectValue: '',
            lodash: lodash,
            modelData: {},
        };
    },
    props: ['applend', 'tableName', 'tableLabel', 'tableId'],
    beforeMount() {
        this.operationGet();
    },
    computed: {
        menuShow() {
            if (this.menuOpen) {
                this.menuOpen = this.menuFocus || this.menuEnter;
            } else {
                this.menuOpen = this.menuFocus && this.menuEnter;
            }
            return this.menuOpen;
        },
        eventSelect() {
            let vm = this;
            let value = vm.inputValue;
            vm.$store.commit(types.GET_CURRENT_API, vm.tableName);
            let filterData = {};
            if (vm.$store.getters.getCurrentModel[vm.tableName]) {
                let data = vm.$store.getters.getCurrentModel[vm.tableName].data;
                filterData = lodash.filter(data, o => {
                    let result = true;
                    if (value !== '') {
                        result = (o[vm.tableLabel].indexOf(value) != -1);
                    }
                    return result;
                });
            }
            this.modelData = filterData;
            return filterData;
        },
    },
    methods: {
        operationGet() {
            var vm = this;
            vm.$store.dispatch(types.GET_API, vm.tableName).then(() => {
                this.eventSelect;
            });
        },
        handleApplend() {
            if (this.eventSelect.length == 0) {
                let value = this.inputValue;
                console.info(value);
            }
        },
        handleInput(value) {
            console.info(value);
            this.inputValue = value;
            this.eventSelect;
        },
        handleSelected(value) {
            console.info(value);
            this.selectValue = value;
        },
        handleBlur() {
            this.menuFocus = false;
        },
        handleFocus() {
            this.menuFocus = true;
        },
        handleMouseLeave() {
            this.menuEnter = false;
        },
        handleMouseEnter() {
            this.menuEnter = true;
        }
    }
};
</script>
