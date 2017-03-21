<template>
    <div>
        <bt-topbar/>
        <div id="wrapper">
            <bt-sidebar-menu/>
            <div id="page-wrapper">
                <bt-breadcrumb>
                    <bt-breadcrumb-item>首页</bt-breadcrumb-item>
                    <bt-breadcrumb-item>前台业务</bt-breadcrumb-item>
                    <bt-breadcrumb-item>报名</bt-breadcrumb-item>
                </bt-breadcrumb>
                <div class="page-content"></div>
            </div>
        </div>
        <bt-footer/>
    </div>
</template>
<script>
import generateColors from './utils/color';
import objectAssign from 'object-assign';
import blobUtil from 'blob-util';
import langConfig from './lang';

import Vue from 'vue';
import moduletable from './components/moduletable.vue';

export default {
    name: 'app',

    data() {
        const colorValidator = (rule, value, callback) => {
            if (!value) {
                return callback(new Error(this.langConfig.validate.required[this.lang]));
            } else if (!/^#[\dabcdef]{6}$/i.test(value)) {
                return callback(new Error(this.langConfig.validate.format[this.lang]));
            } else {
                callback();
            }
        };
        return {
            colors: {
                primary: '#20a0ff'
            },
            rules: {
                primary: [{
                    validator: colorValidator,
                    trigger: 'blur'
                }]
            },
            originalStylesheetCount: -1,
            originalStyle: '',
            langConfig,
            primaryColor: '#20a0ff',
            themeDialogVisible: false,
            helpDialogVisible: false,
            zip: null,
            styleFiles: [],
            fonts: [],
            canDownload: false,
            moduleshow: false,
            modulename: 'studentList',
            viewshow: true,
            query: {
                name: '',
                date: []
            }
        };
    },
    components: {
        moduletable
    },
    computed: {
        lang() {
            console.log(this.$route.path);
            Vue.config.lang = '/zh-CN';
            if (this.$route.path === '/en-US') {
                Vue.config.lang = '/en-US';
            }
            return Vue.config.lang;; //this.$route.path;
        }
    },

    watch: {
        '$route.path': {
            immediate: true,
            handler(val) {
                console.log(val);
                if (val === '/zh-CN') {
                    Vue.config.lang = 'zh-cn';
                } else {
                    Vue.config.lang = 'en';
                }
            }
        }
    },

    methods: {
        switchLang(lang) {
            this.$router.push(lang);
        },

        showThemeDialog() {
            //this.themeDialogVisible = true;
        },

        showHelpDialog() {
            //this.helpDialogVisible = true;
        },

        submitForm() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.themeDialogVisible = false;
                    this.primaryColor = this.colors.primary;
                    this.colors = objectAssign({}, this.colors, generateColors(this.colors.primary));

                    this.canDownload = true;
                    this.writeNewStyle();
                } else {
                    return false;
                }
            });
        },

        resetForm() {
            this.$refs.form.resetFields();
        },
        handleSelect(index) {
            console.log(index);
            if (index === '/activePublic') {
                this.moduleshow = false;
                this.viewshow = true;
                this.$router.push('/activePublic');
            } else if (index === '/studentlist') {
                this.moduleshow = false;
                this.viewshow = true;
                this.$router.push('/studentlist');
            } else if (index === '/activeManage') {
                this.moduleshow = false;
                this.viewshow = true;
                this.$router.push('/activeManage');
            } else if (index === '/studentManage') {
                this.modulename = 'studentList';
                this.moduleshow = true;
                this.viewshow = false;
            } else if (index === '/courseList') {
                this.modulename = 'courseList';
                this.moduleshow = true;
                this.viewshow = false;
            }
        },
    },

    created() {

    },

    mounted() {
        this.$nextTick(_ => {
            this.originalStylesheetCount = document.styleSheets.length;
        });
    }
};
</script>
