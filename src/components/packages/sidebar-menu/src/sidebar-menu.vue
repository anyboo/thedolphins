<template>
    <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side">
        <div class="sidebar-collapse menu-scroll">
            <ul id="side-menu" class="nav">
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
                <!--<li><a href="index.html"><i class="fa fa-tachometer fa-fw"><div class="icon-bg bg-orange"></div></i><span class="menu-title">Dashboard</span></a>
                </li>
                 <li><a href="http://madmin.swlabs.co/" target="_blank"><i class="fa fa-bullhorn fa-fw"><div class="icon-bg bg-orange"></div></i><span class="menu-title">Angular JS Version</span><span class="label label-violet">v4.0</span></a>
                </li>
                <li><a href="#"><i class="fa fa-laptop fa-fw"><div class="icon-bg bg-pink"></div></i><span class="menu-title">Frontend</span><span class="fa arrow"></span><span class="label label-yellow">v3.0</span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="frontend-one-page.html"><i class="fa fa-rocket"></i><span class="submenu-title">One Page</span></a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-desktop fa-fw"><div class="icon-bg bg-pink"></div></i><span class="menu-title">Layouts</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="layout-left-sidebar.html"><i class="fa fa-align-left"></i><span class="submenu-title">Left Sidebar</span></a>
                        </li>
                        <li><a href="layout-left-sidebar-collapsed.html"><i class="fa fa-angle-double-left"></i><span class="submenu-title">Left Sidebar Collapsed</span></a>
                        </li>
                        <li><a href="layout-right-sidebar.html"><i class="fa fa-align-right"></i><span class="submenu-title">Right Sidebar</span></a>
                        </li>
                        <li><a href="layout-right-sidebar-collapsed.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Right Sidebar Collapsed</span></a>
                        </li>
                        <li><a href="layout-horizontal-menu.html"><i class="fa fa-header"></i><span class="submenu-title">Horizontal Menu</span></a>
                        </li>
                        <li><a href="layout-horizontal-menu-sidebar.html"><i class="fa fa-h-square"></i><span class="submenu-title">Horizontal Menu & Sidebar</span></a>
                        </li>
                        <li><a href="layout-fixed-topbar.html"><i class="fa fa-magnet"></i><span class="submenu-title">Fixed Topbar</span></a>
                        </li>
                        <li><a href="layout-boxed.html"><i class="fa fa-columns"></i><span class="submenu-title">Boxed Layout</span></a>
                        </li>
                        <li><a href="layout-hidden-footer.html"><i class="fa fa-eye-slash"></i><span class="submenu-title">Hidden Footer</span></a>
                        </li>
                        <li><a href="layout-header-topbar.html"><i class="fa fa-paperclip"></i><span class="submenu-title">Header & Topbar</span></a>
                        </li>
                        <li><a href="layout-title-breadcrumb.html"><i class="fa fa-link"></i><span class="submenu-title">Title & Breadcrumb</span></a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-send-o fa-fw"><div class="icon-bg bg-green"></div></i><span class="menu-title">UI Elements</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="ui-generals.html"><i class="fa fa-briefcase"></i><span class="submenu-title">Generals</span></a>
                        </li>
                        <li><a href="ui-portlets.html"><i class="fa fa-instagram"></i><span class="submenu-title">Portlets</span></a>
                        </li>
                        <li><a href="ui-buttons.html"><i class="fa fa-hand-o-up"></i><span class="submenu-title">Buttons</span></a>
                        </li>
                        <li><a href="ui-tabs.html"><i class="fa fa-trello"></i><span class="submenu-title">Tabs</span></a>
                        </li>
                        <li><a href="ui-progressbars.html"><i class="fa fa-ellipsis-h"></i><span class="submenu-title">Progress Bars</span></a>
                        </li>
                        <li><a href="ui-typography.html"><i class="fa fa-font"></i><span class="submenu-title">Typography</span></a>
                        </li>
                        <li><a href="ui-modals.html"><i class="fa fa-list-alt"></i><span class="submenu-title">Modals</span></a>
                        </li>
                        <li><a href="ui-sliders.html"><i class="fa fa-arrows-h"></i><span class="submenu-title">Sliders</span></a>
                        </li>
                        <li><a href="ui-icons.html"><i class="fa fa-tint"></i><span class="submenu-title">Icons</span></a>
                        </li>
                        <li><a href="ui-checkbox-radio.html"><i class="fa fa-dot-circle-o"></i><span class="submenu-title">Checkbox & Radio</span></a>
                        </li>
                        <li><a href="ui-panels.html"><i class="fa fa-th-large"></i><span class="submenu-title">Panels</span></a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-rocket fa-fw"><div class="icon-bg bg-green"></div></i><span class="menu-title">UI Advanced</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="ui-preloader.html"><i class="fa fa-spinner"></i><span class="submenu-title">Preloader</span><span class="label label-yellow">v4.1</span></a>
                        </li>
                        <li><a href="ui-editors.html"><i class="fa fa-edit"></i><span class="submenu-title">Editors</span></a>
                        </li>
                        <li><a href="ui-nestable-list.html"><i class="fa fa-list-ol"></i><span class="submenu-title">Nestable List</span></a>
                        </li>
                        <li><a href="ui-dropdown-select.html"><i class="fa fa-level-down"></i><span class="submenu-title">Dropdown Select</span><span class="label label-yellow">v2.1</span></a>
                        </li>
                        <li><a href="ui-notific8-notifications.html"><i class="fa fa-exclamation-circle"></i><span class="submenu-title">Notific8 & Message</span><span class="label label-blue">v2.1</span></a>
                        </li>
                        <li><a href="ui-toastr-notifications.html"><i class="fa fa-exclamation-triangle"></i><span class="submenu-title">Toastr Notifications</span></a>
                        </li>
                        <li><a href="ui-treeview.html"><i class="fa fa-tasks"></i><span class="submenu-title">Tree View</span></a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-edit fa-fw"><div class="icon-bg bg-violet"></div></i><span class="menu-title">Forms</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="form-layouts.html"><i class="fa fa-columns"></i><span class="submenu-title">Form Layouts</span></a>
                        </li>
                        <li><a href="form-basic.html"><i class="fa fa-file-text-o"></i><span class="submenu-title">Form Basics</span></a>
                        </li>
                        <li><a href="form-components.html"><i class="fa fa-cube"></i><span class="submenu-title">Form Components</span></a>
                        </li>
                        <li><a href="form-xeditable.html"><i class="fa fa-edit"></i><span class="submenu-title">Form X-editable</span></a>
                        </li>
                        <li><a href="form-wizard.html"><i class="fa fa-magic"></i><span class="submenu-title">Form Wizard</span></a>
                        </li>
                        <li><a href="form-validation.html"><i class="fa fa-exclamation"></i><span class="submenu-title">Form Validation</span></a>
                        </li>
                        <li><a href="form-multiple-file-upload.html"><i class="fa fa-upload"></i><span class="submenu-title">Multiple File Upload</span></a>
                        </li>
                        <li><a href="form-dropzone-file-upload.html"><i class="fa fa-cloud-upload"></i><span class="submenu-title">Dropzone File Upload</span></a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-th-list fa-fw"><div class="icon-bg bg-blue"></div></i><span class="menu-title">Tables</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="table-basic.html"><i class="fa fa-th-large"></i><span class="submenu-title">Basic Tables</span></a>
                        </li>
                        <li><a href="table-responsive.html"><i class="fa fa-tablet"></i><span class="submenu-title">Responsive Tables</span></a>
                        </li>
                        <li><a href="table-action.html"><i class="fa fa-tencent-weibo"></i><span class="submenu-title">Action Tables</span></a>
                        </li>
                        <li><a href="table-filter.html"><i class="fa fa-filter"></i><span class="submenu-title">Filter Tables</span></a>
                        </li>
                        <li><a href="table-advanced.html"><i class="fa fa-indent"></i><span class="submenu-title">Advanced Tables</span></a>
                        </li>
                        <li><a href="table-export.html"><i class="fa fa-paperclip"></i><span class="submenu-title">Table Export</span><span class="label label-yellow">v2.1</span></a>
                        </li>
                        <li></li>
                        <li><a href="table-editable.html"><i class="fa fa-edit"></i><span class="submenu-title">Jeditable</span><span class="label label-blue">v2.0        </span></a>
                        </li>
                        <li><a href="table-datatables.html"><i class="fa fa-list-alt"></i><span class="submenu-title">DataTables</span><span class="label label-pink">v2.0</span></a>
                        </li>
                        <li><a href="table-sample.html"><i class="fa fa-table"></i><span class="submenu-title">Sample Tables</span></a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-database fa-fw"><div class="icon-bg bg-red"></div></i><span class="menu-title">Data Grids</span><span class="fa arrow"></span><span class="label label-yellow">Hot</span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="#"><i class="fa fa-th-large"></i><span class="submenu-title">Layout Examples</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li><a href="grid-layout-div.html"><i class="fa fa-angle-right"></i><span class="submenu-title">DIVs Layout</span></a>
                                </li>
                                <li><a href="grid-layout-table-1.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Table Demo 1</span></a>
                                </li>
                                <li><a href="grid-layout-table-2.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Table Demo 2</span></a>
                                </li>
                                <li><a href="grid-layout-2-table.html"><i class="fa fa-angle-right"></i><span class="submenu-title">2 Tables on the Page</span></a>
                                </li>
                                <li><a href="grid-layout-ul-li.html"><i class="fa fa-angle-right"></i><span class="submenu-title">UL LI</span></a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#"><i class="fa fa-tencent-weibo"></i><span class="submenu-title">Actions Examples</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li><a href="grid-filter-with-ul-li.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Filters With UL/LI</span></a>
                                </li>
                                <li><a href="grid-filter-with-select.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Filters With SELECT</span></a>
                                </li>
                                <li><a href="grid-double-sort.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Double Sort</span></a>
                                </li>
                                <li><a href="grid-deep-linking.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Deep Linking</span></a>
                                </li>
                                <li><a href="grid-pagination-only.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Pagination Only</span></a>
                                </li>
                                <li><a href="grid-without-item-per-page.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Without "Items per Page"</span></a>
                                </li>
                                <li><a href="grid-hidden-sort.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Hidden Sort</span></a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#"><i class="fa fa-table"></i><span class="submenu-title">jPList with jQuery UI</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li><a href="grid-range-slider.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Range Slider</span></a>
                                </li>
                                <li><a href="grid-datepicker.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Date Picker Filter</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-file-o fa-fw"><div class="icon-bg bg-yellow"></div></i><span class="menu-title">Pages</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="page-gallery.html"><i class="fa fa-suitcase"></i><span class="submenu-title">Gallery</span></a>
                        </li>
                        <li><a href="page-timeline.html"><i class="fa fa-steam"></i><span class="submenu-title">Timeline</span></a>
                        </li>
                        <li><a href="page-blog.html"><i class="fa fa-puzzle-piece"></i><span class="submenu-title">Blog</span></a>
                        </li>
                        <li><a href="page-blog-item.html"><i class="fa fa-chain"></i><span class="submenu-title">Blog Item</span></a>
                        </li>
                        <li><a href="page-about.html"><i class="fa fa-group"></i><span class="submenu-title">About Us</span></a>
                        </li>
                        <li><a href="page-contact.html"><i class="fa fa-send-o"></i><span class="submenu-title">Contact Us</span></a>
                        </li>
                        <li><a href="page-calendar.html"><i class="fa fa-calendar"></i><span class="submenu-title">Full Calendar</span></a>
                        </li>
                    </ul>
                </li>
                <li class="active"><a href="#"><i class="fa fa-gift fa-fw"><div class="icon-bg bg-grey"></div></i><span class="menu-title">Extras</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level in">
                        <li class="active"><a href="extra-profile.html"><i class="fa fa-user"></i><span class="submenu-title">User Profile</span></a>
                        </li>
                        <li><a href="extra-signin.html"><i class="fa fa-sign-in"></i><span class="submenu-title">Sign In</span></a>
                        </li>
                        <li><a href="extra-signup.html"><i class="fa fa-sign-out"></i><span class="submenu-title">Sign Up</span></a>
                        </li>
                        <li><a href="extra-lock-screen.html"><i class="fa fa-lock"></i><span class="submenu-title">Lock Screen</span></a>
                        </li>
                        <li><a href="extra-user-list.html"><i class="fa fa-user"></i><span class="submenu-title">User List</span><span class="label label-yellow">v2.1</span></a>
                        </li>
                        <li><a href="extra-invoice.html"><i class="fa fa-print"></i><span class="submenu-title">Invoice</span></a>
                        </li>
                        <li><a href="extra-faq.html"><i class="fa fa-graduation-cap"></i><span class="submenu-title">FAQ</span></a>
                        </li>
                        <li><a href="extra-pricing-table.html"><i class="fa fa-money"></i><span class="submenu-title">Pricing Tables</span></a>
                        </li>
                        <li><a href="extra-blank.html"><i class="fa fa-file-o"></i><span class="submenu-title">Blank</span></a>
                        </li>
                        <li><a href="extra-404.html"><i class="fa fa-exclamation-circle"></i><span class="submenu-title">404 Page</span></a>
                        </li>
                        <li><a href="extra-500.html"><i class="fa fa-exclamation-circle"></i><span class="submenu-title">500 Page</span></a>
                        </li>
                        <li><a href="javascript:void(0)" title="FullScreen" class="btn-fullscreen"><i class="fa fa-arrows"></i><span class="submenu-title">Full Screen</span></a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-sitemap fa-fw"><div class="icon-bg bg-dark"></div></i><span class="menu-title">Multi-Level Dropdown</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="#"><i class="fa fa-angle-right"></i><span class="submenu-title">Second Level Item</span></a>
                        </li>
                        <li><a href="#"><i class="fa fa-angle-right"></i><span class="submenu-title">Second Level Item</span></a>
                        </li>
                        <li><a href="#"><i class="fa fa-angle-right"></i><span class="submenu-title">Third Level</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Third Level Item</span></a>
                                </li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Third Level Item</span></a>
                                </li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i><span class="submenu-title"> Third Level Item</span></a>
                                </li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Third Level Item</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>-->
                <li><a href="#"><i class="fa fa-envelope-o"><div class="icon-bg bg-primary"></div></i><span class="menu-title">Email</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="email-inbox.html"><i class="fa fa-inbox"></i><span class="submenu-title">Inbox</span></a>
                        </li>
                        <li><a href="email-compose-mail.html"><i class="fa fa-pencil"></i><span class="submenu-title">Compose Mail</span></a>
                        </li>
                        <li><a href="email-view-mail.html"><i class="fa fa-eye"></i><span class="submenu-title">View Mail</span></a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-bar-chart-o fa-fw"><div class="icon-bg bg-orange"></div></i><span class="menu-title">Charts</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse">
                        <li><a href="charts-flotchart.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Flot Charts</span></a>
                        </li>
                        <li><a href="charts-chartjs.html"><i class="fa fa-angle-right"></i><span class="submenu-title">Chartjs</span></a>
                        </li>
                        <li><a href="#"><i class="fa fa-angle-right"></i><span class="submenu-title">HighCharts</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level collapse">
                                <li><a href="charts-highchart-line.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Line Charts</span></a>
                                </li>
                                <li><a href="charts-highchart-area.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Area Charts</span></a>
                                </li>
                                <li><a href="charts-highchart-column-bar.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Column & Bar Charts</span></a>
                                </li>
                                <li><a href="charts-highchart-pie.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Pie Charts</span></a>
                                </li>
                                <li><a href="charts-highchart-scatter-bubble.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Scatter & Bubble Charts</span></a>
                                </li>
                                <li><a href="charts-highchart-dynamic.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Dynamic Charts</span></a>
                                </li>
                                <li><a href="charts-highchart-combinations.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Combinations</span></a>
                                </li>
                                <li><a href="charts-highchart-more.html"><i class="fa fa-angle-double-right"></i><span class="submenu-title">More Chart Types</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <!--<li><a href="animations.html"><i class="fa fa-slack fa-fw"><div class="icon-bg bg-green"></div></i><span class="menu-title">Animations</span></a>
                </li>-->
                <!--li.charts-sum<div id="ajax-loaded-data-sidebar"></div>-->
            </ul>
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
