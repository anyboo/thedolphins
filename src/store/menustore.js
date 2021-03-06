export default [{
    menuTitle: '设计',
    menuIcon: 'fa-columns',
    to: '/layout/0'
}, {
    menuTitle: '设计库',
    menuIcon: 'fa-gear',
    menuName: 'menu1',
    menu: [{
        menuTitle: '基础布局控件库',
        menuIcon: 'fa-credit-card',
        menuName: 'menu1',
        menu: [{
            menuTitle: '12布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: {
                colvalue: '12'
            }
        }, {
            menuTitle: '6 6布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: {
                colvalue: '6 6'
            }
        }, {
            menuTitle: '8 4布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: {
                colvalue: '8 4'
            }
        }, {
            menuTitle: '4 4 4布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: {
                colvalue: '4 4 4'
            }
        }, {
            menuTitle: '2 6 4布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: {
                colvalue: '2 6 4'
            }
        }]
    }, {
        menuTitle: '基础标签控件库',
        menuIcon: 'fa-credit-card',
        menuName: 'menu1',
        menu: [{
            menuTitle: 'Label控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-label',
            componentdata: {}
        }, {
            menuTitle: 'Badge控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-label',
            componentdata: {
                lableBadge: true
            }
        }, {
            menuTitle: 'Note控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-note',
            componentdata: {}
        }, {
            menuTitle: 'Alert控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-alert',
            componentdata: {}
        }, {
            menuTitle: 'Button控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-button',
            componentdata: {}
        }, {
            menuTitle: 'Icon控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-icon',
            componentdata: {}
        }, {
            menuTitle: 'Progressbar控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-progress',
            componentdata: { progressValue: 60 }
        }]
    }, {
        menuTitle: '容器控件库',
        menuIcon: 'fa-credit-card',
        menuName: 'menu1',
        menu: [{
            menuTitle: 'Tab控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-tabs',
            componentdata: {
                tabs: [{
                    title: '老师信息',
                    icon: 'fa-edit',
                    to: '/techerprofile/step2'
                }, {
                    title: '带班信息',
                    icon: 'fa-edit',
                    to: '/userprofile/step1'
                }, {
                    title: '排课信息',
                    icon: 'fa-edit',
                    to: '/userprofile/step3'
                }]
            }
        }, {
            menuTitle: 'Portlet控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-portlet',
            componentdata: {
                portletTitle: 'portlet',
                portletTools:'true',
                portletActive:'true'
            }
        }, {
            menuTitle: 'Panel控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-panel',
            componentdata: {
                portletTitle: 'Panel'
            }
        }, {
            menuTitle: 'Table控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-table',
            componentdata: {}
        }, {
            menuTitle: 'List控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-list',
            componentdata: {}
        }, {
            menuTitle: 'TimeLine控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-timeline',
            componentdata: {}
        }]
    }, {
        menuTitle: '表单控件库',
        menuIcon: 'fa-credit-card',
        menuName: 'menu1',
        menu: [{
            menuTitle: 'Form控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-form',
            componentdata: {}
        }, {
            menuTitle: 'Input控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-input',
            componentdata: {}
        }, {
            menuTitle: '数字input控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-input',
            componentdata: {}
        }, {
            menuTitle: '邮件input控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-input',
            componentdata: {}
        }, {
            menuTitle: '电话input控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-input',
            componentdata: {}
        }, {
            menuTitle: '密码input控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-input',
            componentdata: {}
        }, {
            menuTitle: 'select控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-select',
            componentdata: {}
        }, {
            menuTitle: 'textarea控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-textarea',
            componentdata: {}
        }, {
            menuTitle: '头像photo控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-photo',
            componentdata: {}
        }]
    }, {
        menuTitle: 'html控件库',
        menuIcon: 'fa-credit-card',
        menuName: 'menu1',
        menu: [{
            menuTitle: 'div控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-label',
            componentdata: {}
        }, {
            menuTitle: 'hr控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: 'br控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: 'p控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: 'span控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: 'a控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: 'h1-h6控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }]
    }, {
        menuTitle: '数据控件库',
        menuIcon: 'fa-credit-card',
        menuName: 'menu1',
        menu: [{
            menuTitle: '数据源控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-label',
            componentdata: {}
        }, {
            menuTitle: '数据字段控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: '数据关联控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: '数据过滤控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: '数据转换控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }, {
            menuTitle: '数据检验控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-badge',
            componentdata: {}
        }]
    }]
}, {
    menuTitle: '页面库',
    menuIcon: 'fa-gear',
    menuName: 'menu1',
    menu: [{
        menuTitle: '默认页面',
        menuIcon: 'fa-credit-card',
    }],
    menutree: true
}, {
    menuTitle: '桌面',
    menuIcon: 'fa-windows',
    to: '/desktop'
}, {
    menuTitle: '前台业务',
    menuIcon: 'fa-laptop',
    menuName: 'menu1',
    menu: [{
        menuTitle: '咨询',
        menuIcon: 'fa-phone-square',
        to: '/coursemanage'
    }, {
        menuTitle: '报名',
        menuIcon: 'fa-keyboard-o',
        to: '/techermanage'
    }, {
        menuTitle: '签到',
        menuIcon: 'fa-pencil-square-o',
        to: '/techermanage'
    }]
}, {
    menuTitle: '教务教学',
    menuIcon: 'fa-clipboard',
    menuName: 'menu1',
    menu: [{
        menuTitle: '课程设置',
        menuIcon: 'fa-book',
        to: '/coursemanage'
    }, {
        menuTitle: '班级管理',
        menuIcon: 'fa-group',
        to: '/glassmanage'
    }, {
        menuTitle: '学员管理',
        menuIcon: 'fa-user',
        to: '/techermanage'
    }, {
        menuTitle: '教室管理',
        menuIcon: 'fa-sitemap',
        to: '/classroom'
    }, {
        menuTitle: '老师管理',
        menuIcon: 'fa-male',
        to: '/techermanage'
    }, {
        menuTitle: '排课',
        menuIcon: 'fa-calendar',
        to: '/techermanage'
    }]
}, {
    menuTitle: '系统设置',
    menuIcon: 'fa-gear',
    menuName: 'menu1',
    menu: [{
        menuTitle: '账号设置',
        menuIcon: 'fa-credit-card',
        to: '/coursemanage'
    }]
}]
