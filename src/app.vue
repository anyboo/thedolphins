<template>
    <div :class="{ sidebarCollapsed:isSidebarCollapsed }">
        <bt-topbar v-on:sidebarCollapsed="sidebarCollapsed"/>
        <div id="wrapper">
            <bt-sidebar-menu/>
            <div id="page-wrapper">
                <bt-breadcrumb>
                    <bt-breadcrumb-item>首页</bt-breadcrumb-item>
                    <bt-breadcrumb-item>前台业务</bt-breadcrumb-item>
                    <bt-breadcrumb-item>报名</bt-breadcrumb-item>
                </bt-breadcrumb>
                <div class="page-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <bt-footer/>
    </div>
</template>
<script>
import langConfig from './lang';

import Vue from 'vue';

export default {
    name: 'app',

    data() {
        return {
            langConfig,
            isSidebarCollapsed: false,
        };
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
        sidebarCollapsed(){
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
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
    }
};
</script>
