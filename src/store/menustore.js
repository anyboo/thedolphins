export default [{
    menuTitle: '设计',
    menuIcon: 'fa-columns',
    to: '/layout'
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
            componentdata: '12'
        }, {
            menuTitle: '6 6布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: '6 6'
        }, {
            menuTitle: '8 4布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: '8 4'
        }, {
            menuTitle: '4 4 4布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: '4 4 4'
        }, {
            menuTitle: '2 6 4布局控件',
            menuIcon: 'fa-puzzle-piece',
            component: 'bt-layout',
            componentdata: '2 6 4'
        }]
    }]
}, {
    menuTitle: '元素库',
    menuIcon: 'fa-gear',
    menuName: 'menu1',
    menu: [{
        menuTitle: '元素列表',
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
