export default [{
    menuTitle: "桌面",
    menuIcon: "fa-envelope-o",
    to: "/desktop"
}, {
    menuTitle: "前台业务",
    menuIcon: "fa-envelope-o",
    menuName: "menu1",
    menu: [{
        menuTitle: "咨询",
        menuIcon: "fa-envelope-o",
        menuName: "menu1",
        menu: [
            { menuTitle: "新建咨询", menuIcon: "fa-envelope-o", to:"/consult" },
            { menuTitle: "咨询记录", menuIcon: "fa-envelope-o", to:"/consult_search" },
        ]
    }, {
        menuTitle: "报名",
        menuIcon: "fa-envelope-o",
        to: "/student"
    }]
}, {
    menuTitle: "教务教学",
    menuIcon: "fa-envelope-o",
    menuName: "menu1",
    menu: [{
        menuTitle: "课程设置",
        menuIcon: "fa-envelope-o",
        to: "/coursemanage"
    },{
        menuTitle: "老师管理",
        menuIcon: "fa-envelope-o",
        to: "/techermanage"
    }]
}, {
    menuTitle: "菜单2",
    menuIcon: "fa-envelope-o",
    menuName: "menu1",
    menu: [
        { menuTitle: "菜单11", menuIcon: "fa-envelope-o" },
        { menuTitle: "菜单12", menuIcon: "fa-envelope-o" },
        { menuTitle: "菜单13", menuIcon: "fa-envelope-o" }, {
            menuTitle: "菜单14",
            menuIcon: "fa-envelope-o",
            menuName: "menu1",
            menu: [
                { menuTitle: "菜单141", menuIcon: "fa-envelope-o" },
                { menuTitle: "菜单142", menuIcon: "fa-envelope-o" },
                { menuTitle: "菜单143", menuIcon: "fa-envelope-o" },
                { menuTitle: "菜单144", menuIcon: "fa-envelope-o" },
                { menuTitle: "菜单145", menuIcon: "fa-envelope-o" },
            ]
        }, {
            menuTitle: "菜单15",
            menuIcon: "fa-envelope-o",
            menuName: "menu1",
            menu: [
                { menuTitle: "菜单151", menuIcon: "fa-envelope-o" },
                { menuTitle: "菜单152", menuIcon: "fa-envelope-o" },
                { menuTitle: "菜单153", menuIcon: "fa-envelope-o" },
                { menuTitle: "菜单154", menuIcon: "fa-envelope-o" },
                { menuTitle: "菜单155", menuIcon: "fa-envelope-o" },
            ]
        }
    ]
}];
