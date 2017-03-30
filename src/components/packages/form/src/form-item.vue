<template>
    <div class="form-group" :class="{'state-error':stateError}">
        <label :for="itemData.name" class="col-md-3 control-label">{{ itemData.label }} <span v-if="itemData.required" class="require">*</span> </label>
        <div class="col-md-9">
            <template v-if="itemData.type==='textarea'">
                <textarea :id="itemData.name" :name="itemData.name" rows="8" class="form-control" style="resize:vertical;"></textarea>
            </template>
            <template v-else-if="itemData.type==='radio'">
                <template v-for="radioitem in itemData.data">
                    <label class="radio-inline">
                        <input type="radio" :id="itemData.name" :name="itemData.name" :value="radioitem.value">&nbsp;{{ radioitem.label }}
                    </label>
                </template>
            </template>
            <template v-else-if="itemData.type==='number'">
                <div class="input-icon" :class="itemData.align"><i class="fa" :class="itemData.icon"></i>
                    <input :id="itemData.name" :name="itemData.name" type="number" :placeholder="itemData.placeholder" class="form-control">
                </div>
            </template>
            <template v-else>
                <div class="input-icon" :class="itemData.align"><i class="fa" :class="itemData.icon"></i>
                    <input :id="itemData.name" :minlength="itemData.minlength" :maxlength="itemData.maxlength" :name="itemData.name" type="text" :placeholder="itemData.placeholder" class="form-control invalid" :class="required=itemData.required" @blur="handleBlur" v-model:value="curValue">
                    <em v-if="stateError" for="username1" class="invalid" style="display: block;">Please enter at least 2 characters</em>
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
import langConfig from '~/lang';
import schema from 'async-validator';

export default {
    name: 'BtFormItem',
    props: ["itemData"],
    data() {
        return {
            langConfig,
            'stateError': false,
            curValue: ""
        };
    },
    methods: {
        handleBlur() {
            this.validate(this.curValue);
        },
        handleErrors(errors, fields) {
            this.stateError = true;
        },
        validate(value) {
            var fieldName = this.itemData.name;
            var descriptor = {
                fieldName: {
                    type: "string",
                    required: this.itemData.required
                }
            }
            var validator = new schema(descriptor);
            validator.validate({
                fieldName: value
            }, (errors, fields) => {
                if (errors) {
                    return this.handleErrors(errors, fields);
                }
                this.stateError = false;
            });
        }
    },
    computed: {},
};
</script>
