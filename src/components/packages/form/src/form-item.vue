<template>
    <div class="form-group" :class="{'state-error':stateError}">
        <label :for="itemData.name" class="col-md-3 control-label">{{ itemData.label }} <span v-if="itemData.required" class="require">*</span> </label>
        <div class="col-md-9">
            <template v-if="itemData.type==='textarea'">
                <textarea :id="itemData.name" :name="itemData.name" rows="8" class="form-control" style="resize:vertical" v-model="curValue"></textarea>
            </template>
            <template v-else-if="itemData.type==='radio'">
                <template v-for="radioitem in itemData.data">
                    <label class="radio-inline">
                        <input type="radio" :id="itemData.name" :name="itemData.name" :value="radioitem.value" v-model="curValue">&nbsp; {{ radioitem.label }}
                    </label>
                </template>
            </template>
            <template v-else-if="itemData.type==='number'">
                <div class="input-icon" :class="itemData.align"><i class="fa" :class="itemData.icon"></i>
                    <input :id="itemData.name" :name="itemData.name" type="number" :placeholder="itemData.placeholder" class="form-control" v-model:value="curValue">
                </div>
            </template>
            <template v-else-if="itemData.type==='dropdown-select'">
                <bt-dropdown-select :name="itemData.name" :applend="getItemData('applend',false)" :table-name="getItemData('tableName')" :table-label="getItemData('tableLabel')" :table-id="getItemData('tableId')" v-model="curValue" :filter-value="filterValue" :filter-id="getItemData('filter')" :info="getItemData('info',[])" />
            </template>
            <template v-else-if="itemData.type==='date'">
                <el-date-picker v-model="curValue" type="date" :placeholder="itemData.placeholder" format="yyyy-MM-dd">
                </el-date-picker>
            </template>
            <template v-else>
                <div class="input-icon" :class="itemData.align"><i class="fa" :class="itemData.icon"></i>
                    <input :id="itemData.name" :minlength="itemData.minlength" :maxlength="itemData.maxlength" :name="itemData.name" type="text" :placeholder="itemData.placeholder" class="form-control invalid" :class="required=itemData.required" @blur="handleBlur" v-model:value="curValue">
                    <em v-if="stateError" for="username1" class="invalid" style="display: block">{{ itemData.placeholder }}</em>
                </div>
            </template>
        </div>
    </div>
</template>
<style>
.form-group .radio-inline input[type=radio],
.form-group .checkbox-inline input[type=checkbox] {
    position: relative;
    margin-left: 0px;
}
</style>
<script>
import langConfig from '~/lang'
import schema from 'async-validator'

export default {
    name: 'BtFormItem',
    props: ['itemData', 'valueData'],
    data() {
        return {
            langConfig,
            stateError: false,
            curValue: this.valueData,
            curKey: this.itemData.name,
            filterValue: ''
        }
    },
    watch: {
        valueData: {
            handler: function(newValue) {
                this.curValue = newValue
            },
            deep: true
        },
        curValue: {
            handler: function(newValue) {
                if (this.itemData.type === 'dropdown-select') {
                    this.$emit('dropdownchange', this.itemData.name, newValue)
                }
            },
            deep: true
        }
    },
    methods: {
        handleBlur() {
            this.validate()
        },
        handleErrors( /*errors, fields*/ ) {
            this.stateError = true
        },
        getItemData(name, defvalue) {
            return this.itemData.props ? this.itemData.props[name] : defvalue
        },
        filterAction(name, value) {
            if (this.getItemData('filter') == name) {
                this.filterValue = value
            }
        },
        validate() {
            //var fieldName = this.itemData.name
            let value = this.curValue
            let descriptor = {
                fieldName: {
                    type: 'string',
                    required: this.itemData.required
                }
            }
            if (this.itemData.type === 'date') {
                let dateValue = new Date(value)
                value = dateValue.getTime()
                if (isNaN(value)) {
                    value = 0
                }
                descriptor = {
                    fieldName: {
                        type: 'number',
                        required: this.itemData.required
                    }
                }
            }
            let validator = new schema(descriptor)
            validator.validate({
                fieldName: value
            }, (errors, fields) => {
                if (errors) {
                    return this.handleErrors(errors, fields)
                }
                this.stateError = false
            })
        }
    },
    computed: {

    },
}
</script>
