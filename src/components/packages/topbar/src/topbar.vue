<template>
    <div id="header-topbar-option-demo" class="page-header-topbar">
        <nav id="topbar" role="navigation" style="margin-bottom: 0; z-index: 2;" class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                </button>
                <a id="logo" href="index.html" class="navbar-brand">
                    <span class="fa fa-rocket"></span><span class="logo-text">Dolphin </span><span style="display: none" class="logo-text-icon">
                </span></a>
            </div>
            <div class="topbar-main"><a id="menu-toggle" href="#" class="hidden-xs" @click="sidebarCollapsed"><i class="fa fa-bars"></i></a>
                <ul class="nav navbar-nav    ">
                    <li class="active"><a href="index.html">Dashboard</a>
                    </li>
                    <li><a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">Layouts
&nbsp;<i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="layout-left-sidebar.html">Left Sidebar</a>
                            </li>
                            <li><a href="layout-right-sidebar.html">Right Sidebar</a>
                            </li>
                            <li><a href="layout-left-sidebar-collapsed.html">Left Sidebar Collasped</a>
                            </li>
                            <li><a href="layout-right-sidebar-collapsed.html">Right Sidebar Collasped</a>
                            </li>
                            <li class="dropdown-submenu"><a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">More Options</a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Second level link</a>
                                    </li>
                                    <li class="dropdown-submenu"><a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">More Options</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#">Third level link</a>
                                            </li>
                                            <li><a href="#">Third level link</a>
                                            </li>
                                            <li><a href="#">Third level link</a>
                                            </li>
                                            <li><a href="#">Third level link</a>
                                            </li>
                                            <li><a href="#">Third level link</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Second level link</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="mega-menu-dropdown"><a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">UI Elements
&nbsp;<i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="mega-menu-content">
                                    <div class="row">
                                        <ul class="col-md-4 mega-menu-submenu">
                                            <li>
                                                <h3>Neque porro quisquam</h3>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                            </li>
                                        </ul>
                                        <ul class="col-md-4 mega-menu-submenu">
                                            <li>
                                                <h3>Neque porro quisquam</h3>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                            </li>
                                        </ul>
                                        <ul class="col-md-4 mega-menu-submenu">
                                            <li>
                                                <h3>Neque porro quisquam</h3>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="mega-menu-dropdown mega-menu-full"><a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">Extras
&nbsp;<i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="mega-menu-content">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <h3>Neque porro quisquam</h3>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                                </li>
                                            </ul>
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <h3>Neque porro quisquam</h3>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                                </li>
                                            </ul>
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li>
                                                    <h3>Neque porro quisquam</h3>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Consectetur adipisicing elit</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Sed ut perspiciatis unde omnis</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>At vero eos et accusamus et iusto</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Nam libero tempore cum soluta</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i>Et harum quidem rerum facilis est</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-5 document-demo">
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li><a href="#"><i class="fa fa-info-circle"></i><span>Introduction</span></a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-download"></i><span>Installation</span></a>
                                                </li>
                                            </ul>
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li><a href="#"><i class="fa fa-cog"></i><span>T3 Settings</span></a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-desktop"></i><span>Layout System</span></a>
                                                </li>
                                            </ul>
                                            <ul class="col-md-4 mega-menu-submenu">
                                                <li><a href="#"><i class="fa fa-magic"></i><span>Customization</span></a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-question-circle"></i><span>FAQs</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <form id="topbar-search" action="#" method="GET" class="hidden-xs">
                    <div class="input-group">
                        <input type="text" placeholder="Search..." class="form-control" /><span class="input-group-btn"><a href="javascript:;" class="btn submit"><i class="fa fa-search"></i></a></span>
                    </div>
                </form>
                <ul class="nav navbar navbar-top-links navbar-right mbn">
                    <li class="dropdown"><a data-hover="dropdown" href="#" class="dropdown-toggle"><i class="fa fa-bell fa-fw"></i><span class="badge badge-green">3</span></a>
                        <ul class="dropdown-menu dropdown-alerts">
                            <li>
                                <p>You have 14 new notifications</p>
                            </li>
                            <li>
                                <div class="dropdown-slimscroll">
                                    <ul>
                                        <li><a href="extra-user-list.html" target="_blank"><span class="label label-blue"><i class="fa fa-comment"></i></span>New Comment<span class="pull-right text-muted small">4 mins ago</span></a>
                                        </li>
                                        <li><a href="extra-user-list.html" target="_blank"><span class="label label-violet"><i class="fa fa-twitter"></i></span>3 New Followers<span class="pull-right text-muted small">12 mins ago</span></a>
                                        </li>
                                        <li><a href="extra-user-list.html" target="_blank"><span class="label label-pink"><i class="fa fa-envelope"></i></span>Message Sent<span class="pull-right text-muted small">15 mins ago</span></a>
                                        </li>
                                        <li><a href="extra-user-list.html" target="_blank"><span class="label label-green"><i class="fa fa-tasks"></i></span>New Task<span class="pull-right text-muted small">18 mins ago</span></a>
                                        </li>
                                        <li><a href="extra-user-list.html" target="_blank"><span class="label label-yellow"><i class="fa fa-upload"></i></span>Server Rebooted<span class="pull-right text-muted small">19 mins ago</span></a>
                                        </li>
                                        <li><a href="extra-user-list.html" target="_blank"><span class="label label-green"><i class="fa fa-tasks"></i></span>New Task<span class="pull-right text-muted small">2 days ago</span></a>
                                        </li>
                                        <li><a href="extra-user-list.html" target="_blank"><span class="label label-pink"><i class="fa fa-envelope"></i></span>Message Sent<span class="pull-right text-muted small">5 days ago</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="last"><a href="extra-user-list.html" class="text-right">See all alerts</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown"><a data-hover="dropdown" href="#" class="dropdown-toggle"><i class="fa fa-envelope fa-fw"></i><span class="badge badge-orange">7</span></a>
                        <ul class="dropdown-menu dropdown-messages">
                            <li>
                                <p>You have 14 new messages</p>
                            </li>
                            <li>
                                <div class="dropdown-slimscroll">
                                    <ul>
                                        <li><a href="email-view-mail.html" target="_blank"><span class="avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">Jessica Spencer</span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a>
                                        </li>
                                        <li><a href="email-view-mail.html" target="_blank"><span class="avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">John Smith<span class="label label-blue pull-right">New</span></span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a>
                                        </li>
                                        <li><a href="email-view-mail.html" target="_blank"><span class="avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">John Doe<span class="label label-orange pull-right">10 min</span></span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a>
                                        </li>
                                        <li><a href="email-view-mail.html" target="_blank"><span class="avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">John Smith</span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a>
                                        </li>
                                        <li><a href="email-view-mail.html" target="_blank"><span class="avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">John Smith</span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="last"><a href="email-view-mail.html" target="_blank">Read all messages</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown"><a data-hover="dropdown" href="#" class="dropdown-toggle"><i class="fa fa-tasks fa-fw"></i><span class="badge badge-yellow">8</span></a>
                        <ul class="dropdown-menu dropdown-tasks">
                            <li>
                                <p>You have 14 pending tasks</p>
                            </li>
                            <li>
                                <div class="dropdown-slimscroll">
                                    <ul>
                                        <li><a href="page-blog-item.html" target="_blank"><span class="task-item">Fix the HTML code<small class="pull-right text-muted">40%</small></span><div class="progress progress-sm"><div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;" class="progress-bar progress-bar-orange"><span class="sr-only">40% Complete (success)</span></div></div></a>
                                        </li>
                                        <li>
                                            <a href="page-blog-item.html" target="_blank"> <span class="task-item">Make a wordpress theme<small class="pull-right text-muted">60%</small></span>
                                                <div class="progress progress-sm">
                                                    <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-blue"><span class="sr-only">60% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page-blog-item.html" target="_blank"> <span class="task-item">Convert PSD to HTML<small class="pull-right text-muted">55%</small></span>
                                                <div class="progress progress-sm">
                                                    <div role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="width: 55%;" class="progress-bar progress-bar-green"><span class="sr-only">55% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page-blog-item.html" target="_blank"> <span class="task-item">Convert HTML to Wordpress<small class="pull-right text-muted">78%</small></span>
                                                <div class="progress progress-sm">
                                                    <div role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style="width: 78%;" class="progress-bar progress-bar-yellow"><span class="sr-only">78% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="last"><a href="page-blog-item.html" target="_blank">See all tasks</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown topbar-user">
                        <a data-hover="dropdown" href="#" class="dropdown-toggle"><img src="assets/48.png" alt="" class="img-responsive img-circle" />&nbsp;<span class="hidden-xs">林祖鑫</span>&nbsp;<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-user pull-right">
                            <li><a href="extra-profile.html"><i class="fa fa-user"></i>My Profile</a>
                            </li>
                            <li><a href="page-calendar.html"><i class="fa fa-calendar"></i>My Calendar</a>
                            </li>
                            <li><a href="email-inbox.html"><i class="fa fa-envelope"></i>My Inbox<span class="badge badge-danger">3</span></a>
                            </li>
                            <li><a href="#"><i class="fa fa-tasks"></i>My Tasks<span class="badge badge-success">7</span></a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="extra-lock-screen.html"><i class="fa fa-lock"></i>Lock Screen</a>
                            </li>
                            <li><a href="extra-signin.html"><i class="fa fa-key"></i>Log Out</a>
                            </li>
                        </ul>
                    </li>
                    <li id="topbar-chat" class="hidden-xs"><a href="javascript:void(0)" class="btn-chat"><i class="fa fa-comments"></i><span class="badge badge-info">3</span></a>
                    </li>
                    <li class="dropdown hidden-xs">
                        <!--BEGIN THEME SETTING--><a id="theme-setting" href="javascript:;" data-hover="dropdown" data-step="1" data-intro="&lt;b&gt;Header&lt;/b&gt;, &lt;b&gt;sidebar&lt;/b&gt;, &lt;b&gt;border style&lt;/b&gt; and &lt;b&gt;color&lt;/b&gt;, all of them can change for you to create the best" data-position="left" class="dropdown-toggle"><i class="fa fa-cogs"></i></a>
                        <ul class="dropdown-menu dropdown-theme-setting pull-right">
                            <li>
                                <h4 class="mtn">Theme Styles</h4>
                                <select id="list-style" class="form-control">
                                    <option value="style1">Flat Squared style</option>
                                    <option value="style2">Flat Rounded style</option>
                                    <option value="style3">Flat Border style</option>
                                </select>
                            </li>
                            <li>
                                <h4 class="mtn">Menu Styles</h4>
                                <select id="list-menu" class="form-control">
                                    <option value="sidebar-default">Menu style 1</option>
                                    <option value="sidebar-colors">Menu style 2</option>
                                    <option value="sidebar-icons">Menu style 3</option>
                                    <option value="sidebar-collapsed">Menu style 4</option>
                                </select>
                            </li>
                            <li>
                                <h4 class="mtn">Header & Sidebar</h4>
                                <select id="list-header" class="form-control">
                                    <option value="header-static">Static</option>
                                    <option value="header-fixed">Fixed</option>
                                </select>
                            </li>
                            <li>
                                <h4 class="mtn">Theme Colors</h4>
                                <ul id="list-color" class="list-unstyled list-inline">
                                    <li data-color="green-dark" data-hover="tooltip" title="Green - Dark" class="green-dark"></li>
                                    <li data-color="red-dark" data-hover="tooltip" title="Red - Dark" class="red-dark"></li>
                                    <li data-color="pink-dark" data-hover="tooltip" title="Pink - Dark" class="pink-dark"></li>
                                    <li data-color="blue-dark" data-hover="tooltip" title="Blue - Dark" class="blue-dark"></li>
                                    <li data-color="yellow-dark" data-hover="tooltip" title="Yellow - Dark" class="yellow-dark"></li>
                                    <li data-color="green-grey" data-hover="tooltip" title="Green - Grey" class="green-grey"></li>
                                    <li data-color="red-grey" data-hover="tooltip" title="Red - Grey" class="red-grey"></li>
                                    <li data-color="pink-grey" data-hover="tooltip" title="Pink - Grey" class="pink-grey"></li>
                                    <li data-color="blue-grey" data-hover="tooltip" title="Blue - Grey" class="blue-grey"></li>
                                    <li data-color="yellow-grey" data-hover="tooltip" title="Yellow - Grey" class="yellow-grey"></li>
                                    <li data-color="yellow-green" data-hover="tooltip" title="Yellow - Green" class="yellow-green"></li>
                                    <li data-color="orange-grey" data-hover="tooltip" title="Orange - Grey" class="orange-grey"></li>
                                    <li data-color="pink-blue" data-hover="tooltip" title="Pink - Blue" class="pink-blue"></li>
                                    <li data-color="pink-violet" data-hover="tooltip" title="Pink - Violet" class="pink-violet active"></li>
                                    <li data-color="orange-violet" data-hover="tooltip" title="Orange - Violet" class="orange-violet"></li>
                                    <li data-color="pink-green" data-hover="tooltip" title="Pink - Green" class="pink-green"></li>
                                    <li data-color="pink-brown" data-hover="tooltip" title="Pink - Brown" class="pink-brown"></li>
                                    <li data-color="orange-blue" data-hover="tooltip" title="Orange - Blue" class="orange-blue"></li>
                                    <li data-color="yellow-blue" data-hover="tooltip" title="Yellow - Blue" class="yellow-blue"></li>
                                    <li data-color="green-blue" data-hover="tooltip" title="Green - Blue" class="green-blue"></li>
                                </ul>
                            </li>
                        </ul>
                        <!--END THEME SETTING-->
                    </li>
                </ul>
            </div>
        </nav>
        <!--BEGIN MODAL CONFIG PORTLET-->
        <div id="modal-config" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-hidden="true" class="close">&times;</button>
                        <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend et nisl eget porta. Curabitur elementum sem molestie nisl varius, eget tempus odio molestie. Nunc vehicula sem arcu, eu pulvinar neque cursus ac. Aliquam ultricies lobortis magna et aliquam. Vestibulum egestas eu urna sed ultricies. Nullam pulvinar dolor vitae quam dictum condimentum. Integer a sodales elit, eu pulvinar leo. Nunc nec aliquam nisi, a mollis neque. Ut vel felis quis tellus hendrerit placerat. Vivamus vel nisl non magna feugiat dignissim sed ut nibh. Nulla elementum, est a pretium hendrerit, arcu risus luctus augue, mattis aliquet orci ligula eget massa. Sed ut ultricies felis.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" data-dismiss="modal" class="btn btn-default">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!--END MODAL CONFIG PORTLET-->
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtTopbar',
    data() {
        return {
            langConfig
        }
    },
    methods: {
        sidebarCollapsed: function() {
            this.$emit('sidebarCollapsed')
        }
    },
    computed: {},
}
</script>
