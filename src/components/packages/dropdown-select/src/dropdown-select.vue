<template>
    <div>
        <input type="hidden" :value="dropdownValue" :name="name" :id="name" />
        <div class="btn-group bootstrap-select show-tick form-control" :class="{open:menuShow}" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <button type="button" class="btn dropdown-toggle selectpicker btn-white" @focus="handleFocus" @blur="handleBlur">
                <span class="filter-option pull-left">{{ selectValue }} </span>&nbsp<span class="caret"></span>
            </button>
            <div class="dropdown-menu open">
                <ul class="dropdown-menu inner selectpicker" role="menu">
                    <li v-if="applend">
                        <div class="input-group">
                            <input type="text" :value="inputValue" placeholder="新增" @input="handleInput($event.target.value)" class="form-control" @focus="handleFocus" @blur="handleBlur">
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
import langConfig from '~/lang'
import BtDropdownSelectItem from './dropdown-select-item.vue'
import * as types from '~/store/mutation-types'
import lodash from 'lodash'

export default {
    name: 'BtDropdownSelect',
    components: {
        'bt-dropdown-select-item': BtDropdownSelectItem
    },
    data() {
        return {
            langConfig,
            menuOpen: false, //焦点控制是否隐藏下拉
            menuEnter: false, //焦点控制是否隐藏下拉
            menuFocus: false, //焦点控制是否隐藏下拉
            inputValue: '', //搜索框的值
            selectValue: '', //选择框的值
            lodash: lodash, //lodash对象
            modelData: {}, //模型数据
            dropdownValue: this.value //下拉组件值
        }
    },
    props: ['applend', 'name', 'tableName', 'tableLabel', 'tableId', 'value'],
    beforeMount() {
        this.operationGet()
    },
    computed: {
        menuShow() {
            if (this.menuOpen) {
                this.menuOpen = this.menuFocus || this.menuEnter
            } else {
                this.menuOpen = this.menuFocus && this.menuEnter
            }
            return this.menuOpen
        },
        eventSelect() {
            let vm = this
            let value = vm.inputValue
            vm.$store.commit(types.GET_CURRENT_API, vm.tableName)
            let filterData = {}
            if (vm.$store.getters.getCurrentModel[vm.tableName]) {
                let data = vm.$store.getters.getCurrentModel[vm.tableName].data
                filterData = lodash.filter(data, o => {
                    let result = true
                    if (o[vm.tableLabel]) {
                        if (value !== '') {
                            result = (o[vm.tableLabel].indexOf(value) != -1)
                        }
                    } else {
                        result = false
                    }
                    return result
                })
            }
            this.modelData = filterData
            return filterData
        },
    },
    methods: {
        getSelectValue() {
            let vm = this
            vm.modelData.forEach(item => {
                if (item[vm.tableId] == this.value) {
                    vm.selectValue = item[vm.tableLabel]
                    return false
                }
            })

        },
        operationGet() {
            let vm = this
            vm.$store.dispatch(types.GET_API, vm.tableName).then(() => {
                this.eventSelect
                this.getSelectValue()
            })
        },
        handleApplend() {
            let vm = this
            let value = vm.inputValue
            if (vm.eventSelect.length == 0 && value.length > 0) {
                let form = {}
                form[vm.tableLabel] = value
                vm.$store.dispatch(types.APPEND_API, {
                    'model': vm.tableName,
                    'form': form
                }).then(() => {
                    vm.inputValue = ''
                    vm.operationGet()
                })
            }
        },
        handleInput(value) {
            this.inputValue = value
            this.eventSelect
        },
        handleSelected({
            value,
            key
        }) {
            this.selectValue = value
            this.dropdownValue = key
            console.log(key)
            this.$emit('input', key)
        },
        handleBlur() {
            this.menuFocus = false
        },
        handleFocus() {
            this.menuFocus = true
        },
        handleMouseLeave() {
            this.menuEnter = false
        },
        handleMouseEnter() {
            this.menuEnter = true
        }
    }
}
</script>
