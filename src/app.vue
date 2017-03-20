<template>
    <div class="wrapper">
        <header :style="{ 'background-color': primaryColor }">
            <span class="header-logo">Dolphin</span>
            <!-- <img src="./assets/clock.png" alt="element-logo" class="header-logo"> -->
            <ul class="header-operations">
                <li @click="showThemeDialog">桌面</li>
                <li @click="showHelpDialog">前台业务</li>
                <li @click="showThemeDialog">教学教务</li>
                <li @click="showHelpDialog">数据统计</li>
                <li @click="showThemeDialog">财务统计</li>
                <li @click="showHelpDialog">运营管理</li>
                <li @click="showHelpDialog">系统设置</li>
                <!--
                <li>
                    <span @click="switchLang('/zh-CN')" :class="{ 'is-active': lang === '/zh-CN' }" class="header-lang">
            中文
          </span>
                    <span>/</span>
                    <span @click="switchLang('/en-US')" :class="{ 'is-active': lang === '/en-US' }" class="header-lang">
            En
          </span>
                </li>-->
            </ul>
        </header>
        <el-row class="container">
            <el-col :span="4" class="menu">
                <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>咨询管理</template>
                        <el-menu-item index="/activePublic">新建咨询</el-menu-item>
                        <el-menu-item index="/studentlist">咨询查询</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-star-on"></i>学员管理</template>
                        <el-menu-item index="/studentManage">管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-share"></i>班级管理</template>
                        <el-menu-item index="/courseList">管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-date"></i>班级管理</template>
                        <el-menu-item index="/activeManage">管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-edit"></i>通知管理</template>
                        <el-menu-item index="/activeManage">管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-loading"></i>活动管理</template>
                        <el-menu-item index="/activeManage">管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title"><i class="el-icon-menu"></i>商品管理</template>
                        <el-menu-item index="/activeManage">管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="8">
                        <template slot="title"><i class="el-icon-document"></i>教师管理</template>
                        <el-menu-item index="/activeManage">管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="9">
                        <template slot="title"><i class="el-icon-time"></i>排课管理</template>
                        <el-menu-item index="/activeManage">管理</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" class="content">
                <transition name="fade" v-if="viewshow">
                    <router-view class="view"></router-view>
                </transition>
                <bt-design></bt-design>
                <bt-hello></bt-hello>
                <moduletable :modulename="modulename" v-if="moduleshow"></moduletable>
            </el-col>
        </el-row>
        <el-dialog v-model="themeDialogVisible" :title="langConfig.header.switch[lang]" size="tiny">
            <el-form :model="colors" :rules="rules" ref="form" label-position="top" label-width="70px">
                <el-form-item :label="langConfig.form.theme[lang]" prop="primary">
                    <el-input type="color" v-model="colors.primary" class="color-input"></el-input>
                </el-form-item>
                <el-form-item class="color-buttons">
                    <el-button type="primary" @click="submitForm">{{ langConfig.form.switch[lang] }}</el-button>
                    <el-button @click="resetForm">{{ langConfig.form.reset[lang] }}</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog v-model="helpDialogVisible" :title="langConfig.help.title[lang]">
            <div v-html="langConfig.help.content[lang]" class="help"></div>
            <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="helpDialogVisible = false">{{ langConfig.help.ok[lang] }}</el-button>


      </span>
        </el-dialog>
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
