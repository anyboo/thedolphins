<template>
    <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side">
        <div class="sidebar-collapse menu-scroll" id="side-menu">
            <bt-menu>
                <li class="user-panel">
                    <div class="thumb">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/oliveirasimoes/128.jpg" alt="" class="img-circle" />
                    </div>
                    <div class="info">
                        <p>林祖鑫</p>
                        <ul class="list-inline list-unstyled">
                            <li><a href="extra-profile.html" data-hover="tooltip" title="Profile"><i class="fa fa-user"></i></a>
                            </li>
                            <li><a href="email-inbox.html" data-hover="tooltip" title="Mail"><i class="fa fa-envelope"></i></a>
                            </li>
                            <li><a href="#" data-hover="tooltip" title="Setting" data-toggle="modal" data-target="#modal-config"><i class="fa fa-cog"></i></a>
                            </li>
                            <li><a href="extra-signin.html" data-hover="tooltip" title="Logout"><i class="fa fa-sign-out"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </li>
                <bt-menu-item v-for="(menuItem, index) in menuStore" :to="menuItem.to" :menu-name="menuItem.menuName"  :menu-title="menuItem.menuTitle" :menu-icon="menuItem.menuIcon">
                    <template v-if="menuItem.menu">
                        <bt-menu navlevel="1" collapse="true">
                            <bt-menu-item v-for="(menuItem1, index1) in menuItem.menu" :to="menuItem1.to" :menu-name="menuItem1.menuName" :menu-title="menuItem1.menuTitle" :menu-icon="menuItem1.menuIcon">
                                <template v-if="menuItem1.menu">
                                    <bt-menu navlevel="2" collapse="true">
                                        <bt-menu-item v-for="(menuItem2, index2) in menuItem1.menu" :to="menuItem2.to" :menu-name="menuItem2.menuName" :menu-title="menuItem2.menuTitle" :menu-icon="menuItem2.menuIcon" />
                                    </bt-menu>
                                </template>
                            </bt-menu-item>
                        </bt-menu>
                    </template>
                </bt-menu-item>
            </bt-menu>
        </div>
    </nav>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtSidebarMenu',
    props: ['menuStore'],
    data() {
        return {
            langConfig
        }
    },
    methods: {},
    computed: {},
}
</script>
