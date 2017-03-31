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
                            <input type="text" placeholder="新增" v-model.trim="inputValue" class="form-control" @focus="handleFocus" @blur="handleBlur">
                            <span class="input-group-addon"><i class="fa fa-plus" @click="handleApplend"></i></span>
                        </div>
                    </li>
                    <template v-for="item in eventSelect">
                        <bt-dropdown-select-item :item="item" @selected="handleSelected" />
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang';
import BtDropdownSelectItem from './dropdown-select-item.vue';

export default {
    name: 'BtDropdownSelect',
    components: {
        "bt-dropdown-select-item": BtDropdownSelectItem
    },
    data() {
        return {
            langConfig,
            menuOpen: false,
            menuEnter: false,
            menuFocus: false,
            inputValue: "",
            selectValue: "",
            numbers: ["1", "12", "3", "4", "5"]
        };
    },
    props: ["applend", "tableName", "tableLabel", "tableid"],
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
            let value = this.inputValue;
            return this.numbers.filter(function(number) {
                let result = true;
                if (value !== "") {
                    result = (number.indexOf(value) != -1);
                }
                return result;
            });
        },
    },
    methods: {
        handleApplend() {
            if (this.eventSelect.length == 0) {

            }
        },
        handleSelected(value) {
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
