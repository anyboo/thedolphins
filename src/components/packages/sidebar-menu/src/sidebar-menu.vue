<template>
    <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side">
        <div class="sidebar-collapse menu-scroll" id="side-menu">
            <bt-menu>
                <li class="user-panel">
                    <div class="thumb"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" alt="" class="img-circle" />
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
                <bt-menu-item menu-title="xxxx" menu-icon="fa-envelope-o" />
                <bt-menu-item menu-name="xsdf" menu-title="Email" menu-icon="fa-envelope-o">
                    <bt-menu navlevel="1" collapse="true" menu-name="xsdf">
                        <bt-menu-item to="link1" menu-title="Inbox" menu-icon="fa-inbox" />
                        <bt-menu-item menu-title="Compose Mail" menu-icon="fa-pencil" />
                        <bt-menu-item menu-name="xsdf" menu-title="View Mail" menu-icon="fa-eye">
                            <bt-menu navlevel="2" collapse="true" menu-name="xsdf">
                                <bt-menu-item to="activePublic" menu-title="View Mail" menu-icon="fa-eye" />
                                <bt-menu-item to="activePublic" menu-title="View Mail" menu-icon="fa-eye" />
                            </bt-menu>
                        </bt-menu-item>
                    </bt-menu>
                </bt-menu-item>
                <bt-menu-item menu-name="xsdf" menu-title="Email" menu-icon="fa-envelope-o">
                    <bt-menu navlevel="1" collapse="true" menu-name="xsdf">
                        <bt-menu-item to="link1" menu-title="Inbox" menu-icon="fa-inbox" />
                        <bt-menu-item menu-title="Compose Mail" menu-icon="fa-pencil" />
                        <bt-menu-item menu-name="xsdf" menu-title="View Mail" menu-icon="fa-eye">
                            <bt-menu navlevel="2" collapse="true" menu-name="xsdf">
                                <bt-menu-item to="activePublic" menu-title="View Mail" menu-icon="fa-eye" />
                                <bt-menu-item to="activePublic" menu-title="View Mail" menu-icon="fa-eye" />
                            </bt-menu>
                        </bt-menu-item>
                    </bt-menu>
                </bt-menu-item>
            </bt-menu>
        </div>
    </nav>
</template>
<script>
import langConfig from '~/lang';

export default {
    name: 'BtSidebarMenu',
    data() {
        return {
            langConfig
        };
    },
    methods: {},
    computed: {},
};
</script>
