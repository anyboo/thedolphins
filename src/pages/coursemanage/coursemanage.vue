<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <bt-portlet portlet-title="课程面板" :portlet-tools="true" :portlet-active="true">
                    <div class="form-horizontal">
                        <div class="form-body pal">
                            <div class="form-group">
                                <label for="inputUsername" class="col-md-3 control-label">课程名称
                                </label>
                                <div class="col-md-9">
                                    <div class="input-icon"><i class="fa fa-user"></i>
                                        <input id="inputUsername" type="text" placeholder="课程名称" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail" class="col-md-3 control-label">课程
                                </label>
                                <div class="col-md-9 gallery-pages">
                                    <ul class="list-filter list-unstyled">
                                        <li data-filter="all" class="filter active">全部</li>
                                        <li data-filter=".development" class="filter">音乐</li>
                                        <li data-filter=".design" class="filter">钢琴</li>
                                        <li data-filter=".photography" class="filter">画画</li>
                                        <li data-filter=".wordpress" class="filter">英语</li>
                                        <li data-filter=".html" class="filter">汉语</li>
                                    </ul>
                                    <ul class="list-filter list-unstyled">
                                        <li data-filter="all" class="filter active">全部</li>
                                        <li data-filter=".development" class="filter">音乐</li>
                                        <li data-filter=".design" class="filter">钢琴</li>
                                        <li data-filter=".photography" class="filter">画画</li>
                                        <li data-filter=".wordpress" class="filter">英语</li>
                                        <li data-filter=".html" class="filter">汉语</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form-actions none-bg">
                            <div class="col-md-offset-3 col-md-9">
                                <button class="btn btn-primary" @click="handShowModals"> <i class="fa fa-upload mrs"></i>添加</button>
                                <button class="btn btn-primary"> <i class="fa fa-edit mrs"></i>搜索 </button>
                                <button class="btn btn-primary"> <i class="fa fa-trash-o mrs"></i>重置</button>
                            </div>
                        </div>
                    </div>
                </bt-portlet>
            </div>
        </div>
        <div id="page-pricing" class="row">
            <div class="col-md-12">
                <h2>Option 1</h2>
                <div class="row row-merge">
                    <div class="col-md-3 col-sm-6">
                        <div class="pricing-widget">
                            <div class="pricing-head">Basic</div>
                            <div class="pricing-body">
                                <div class="pricing-cost"><strong style="display: block">$19</strong><small>per month</small>
                                </div>
                                <ul class="pricing-list text-center">
                                    <li><a class="btn btn-sm btn-default">Start your free trial!</a>
                                    </li>
                                    <li>Amount of space <strong>10 GB</strong>
                                    </li>
                                    <li>Bandwidth per month <strong>100 GB</strong>
                                    </li>
                                    <li>No. of email accounts <strong>1</strong>
                                    </li>
                                    <li>No. of MySql database <strong>1</strong>
                                    </li>
                                    <li>24/7 Unlimited Support <strong>YES</strong>
                                    </li>
                                    <li>Support Tickets per month <strong>1</strong>
                                    </li>
                                    <li class="text-center"><a href="#" class="btn btn-success">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricing-widget active">
                            <div class="pricing-head">Professional</div>
                            <div class="pricing-body">
                                <div class="pricing-cost"><strong style="display: block"><span>$</span>39</strong><small>per month</small>
                                </div>
                                <ul class="pricing-list text-center">
                                    <li><a class="btn btn-sm btn-default">Start your free trial!</a>
                                    </li>
                                    <li>Amount of space <strong>30 GB</strong>
                                    </li>
                                    <li>Bandwidth per month <strong>200 GB</strong>
                                    </li>
                                    <li>No. of email accounts <strong>10</strong>
                                    </li>
                                    <li>No. of MySql database <strong>10</strong>
                                    </li>
                                    <li>24/7 Unlimited Support <strong>YES</strong>
                                    </li>
                                    <li>Support Tickets per month <strong>3</strong>
                                    </li>
                                    <li class="text-center"><a href="#" class="btn btn-success">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricing-widget">
                            <div class="pricing-head">Business</div>
                            <div class="pricing-body">
                                <div class="pricing-cost"><strong style="display: block">$59</strong><small>per month</small>
                                </div>
                                <ul class="pricing-list text-center">
                                    <li><a class="btn btn-sm btn-default">Start your free trial!</a>
                                    </li>
                                    <li>Amount of space <strong>100 GB</strong>
                                    </li>
                                    <li>Bandwidth per month <strong>500 GB</strong>
                                    </li>
                                    <li>No. of email accounts <strong>50</strong>
                                    </li>
                                    <li>No. of MySql database <strong>50</strong>
                                    </li>
                                    <li>24/7 Unlimited Support <strong>YES</strong>
                                    </li>
                                    <li>Support Tickets per month <strong>5</strong>
                                    </li>
                                    <li class="text-center"><a href="#" class="btn btn-success">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricing-widget">
                            <div class="pricing-head">Unlimited</div>
                            <div class="pricing-body">
                                <div class="pricing-cost"><strong style="display: block">$79</strong><small>per month</small>
                                </div>
                                <ul class="pricing-list text-center">
                                    <li><a class="btn btn-sm btn-default">Start your free trial!</a>
                                    </li>
                                    <li>Amount of space <strong>200 GB</strong>
                                    </li>
                                    <li>Bandwidth per month <strong>800 GB</strong>
                                    </li>
                                    <li>No. of email accounts <strong>100</strong>
                                    </li>
                                    <li>No. of MySql database <strong>80</strong>
                                    </li>
                                    <li>24/7 Unlimited Support <strong>YES</strong>
                                    </li>
                                    <li>Support Tickets per month <strong>8</strong>
                                    </li>
                                    <li class="text-center"><a href="#" class="btn btn-success">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Option 2</h2>
                <div class="row mtl">
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <div class="panel panel-orange">
                            <div class="panel-heading">
                                <h3 class="panel-title text-center">Bronze</h3>
                            </div>
                            <div class="panel-body pan text-center">
                                <div class="the-price">
                                    <h1>$10<span class="subscript">/month</span></h1><small>1 month FREE trial</small>
                                </div>
                                <table class="table mbn">
                                    <tbody>
                                        <tr>
                                            <td>1 Account</td>
                                        </tr>
                                        <tr class="active">
                                            <td>1 Project</td>
                                        </tr>
                                        <tr>
                                            <td>100K API Access</td>
                                        </tr>
                                        <tr class="active">
                                            <td>100MB Storage</td>
                                        </tr>
                                        <tr>
                                            <td>Custom Cloud Services</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Weekly Reports</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="panel-footer pan"><a href="javascript:void(0);" role="button" class="btn btn-orange btn-block">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <div class="panel panel-violet">
                            <div class="ribbon-wrapper">
                                <div class="ribbon-inner">Hot</div>
                            </div>
                            <div class="panel-heading">
                                <h3 class="panel-title text-center">Silver</h3>
                            </div>
                            <div class="panel-body pan text-center">
                                <div class="the-price">
                                    <h1>$20<span class="subscript">/month</span></h1><small>1 month FREE trial</small>
                                </div>
                                <table class="table mbn">
                                    <tbody>
                                        <tr>
                                            <td>2 Account</td>
                                        </tr>
                                        <tr class="active">
                                            <td>5 Project</td>
                                        </tr>
                                        <tr>
                                            <td>100K API Access</td>
                                        </tr>
                                        <tr class="active">
                                            <td>200MB Storage</td>
                                        </tr>
                                        <tr>
                                            <td>Custom Cloud Services</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Weekly Reports</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="panel-footer pan"><a href="javascript:void(0);" role="button" class="btn btn-violet btn-block">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <h3 class="panel-title text-center">Gold</h3>
                            </div>
                            <div class="panel-body pan text-center">
                                <div class="the-price">
                                    <h1>$35<span class="subscript">/month</span></h1><small>1 month FREE trial</small>
                                </div>
                                <table class="table mbn">
                                    <tbody>
                                        <tr>
                                            <td>5 Account</td>
                                        </tr>
                                        <tr class="active">
                                            <td>20 Project</td>
                                        </tr>
                                        <tr>
                                            <td>300K API Access</td>
                                        </tr>
                                        <tr class="active">
                                            <td>500MB Storage</td>
                                        </tr>
                                        <tr>
                                            <td>Custom Cloud Services</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Weekly Reports</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="panel-footer pan"><a href="javascript:void(0);" role="button" class="btn btn-green btn-block">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <div class="panel panel-blue">
                            <div class="panel-heading">
                                <h3 class="panel-title text-center">Diamond</h3>
                            </div>
                            <div class="panel-body pan text-center">
                                <div class="the-price">
                                    <h1>$99<span class="subscript">/month</span></h1><small>1 month FREE trial</small>
                                </div>
                                <table class="table mbn">
                                    <tbody>
                                        <tr>
                                            <td>Unlimited Account</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Unlimited Project</td>
                                        </tr>
                                        <tr>
                                            <td>3000K API Access</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Unlimited Storage</td>
                                        </tr>
                                        <tr>
                                            <td>Custom Cloud Services</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Weekly Reports</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="panel-footer pan"><a href="javascript:void(0);" role="button" class="btn btn-blue btn-block">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <h3 class="panel-title text-center">Gold</h3>
                            </div>
                            <div class="panel-body pan text-center">
                                <div class="the-price">
                                    <h1>$35<span class="subscript">/month</span></h1><small>1 month FREE trial</small>
                                </div>
                                <table class="table mbn">
                                    <tbody>
                                        <tr>
                                            <td>5 Account</td>
                                        </tr>
                                        <tr class="active">
                                            <td>20 Project</td>
                                        </tr>
                                        <tr>
                                            <td>300K API Access</td>
                                        </tr>
                                        <tr class="active">
                                            <td>500MB Storage</td>
                                        </tr>
                                        <tr>
                                            <td>Custom Cloud Services</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Weekly Reports</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="panel-footer pan"><a href="javascript:void(0);" role="button" class="btn btn-yellow btn-block">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-2">
                        <div class="panel panel-pink">
                            <div class="panel-heading">
                                <h3 class="panel-title text-center">Diamond</h3>
                            </div>
                            <div class="panel-body pan text-center">
                                <div class="the-price">
                                    <h1>$99<span class="subscript">/month</span></h1><small>1 month FREE trial</small>
                                </div>
                                <table class="table mbn">
                                    <tbody>
                                        <tr>
                                            <td>Unlimited Account</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Unlimited Project</td>
                                        </tr>
                                        <tr>
                                            <td>3000K API Access</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Unlimited Storage</td>
                                        </tr>
                                        <tr>
                                            <td>Custom Cloud Services</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Weekly Reports</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="panel-footer pan"><a href="javascript:void(0);" role="button" class="btn btn-pink btn-block">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <bt-modals :modals-active="showModals" modalsTitle="添加课程" @close="handClose">
            <div class="form-horizontal">
                <div class="form-body pal">
                    <div class="form-group">
                        <label for="inputName" class="col-md-3 control-label">Name</label>
                        <div class="col-md-9">
                            <div class="input-icon right"><i class="fa fa-user"></i>
                                <input id="inputName" type="text" placeholder="" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword" class="col-md-3 control-label">Password</label>
                        <div class="col-md-9">
                            <div class="input-icon right"><i class="fa fa-lock"></i>
                                <input id="inputPassword" type="text" placeholder="" class="form-control">
                            </div><span class="help-block mbn"><a href="#"><small>Forgot password?</small></a></span>
                        </div>
                    </div>
                    <div class="form-group mbn">
                        <div class="col-md-offset-3 col-md-6">
                            <div class="checkbox">
                                <label class="">
                                    <div class="icheckbox_minimal-grey" style="position: relative;">
                                        <input tabindex="5" type="checkbox" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;">
                                        <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                    </div>&nbsp; K eep me logged in</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </bt-modals>
    </div>
</template>
<script>
import langConfig from '~/lang';
import coursemanage from '~/store/coursemanage.js';

export default {
    name: 'BtCourseManage',
    data() {
        return {
            langConfig,
            showModals: false,
        };
    },
    methods: {
        handClose() {
            this.showModals = false;
        },
        handShowModals() {
            this.showModals = true;
            return false;
        }
    }
};
</script>
