<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="portlet portlet-blue box">
                    <div class="portlet-header">
                        <div class="caption">面板</div>
                        <div class="tools"><i class="fa fa-chevron-up"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i>
                        </div>
                    </div>
                    <div class="portlet-body pan">
                        <form action="#" class="form-horizontal">
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
                                    <label for="inputEmail" class="col-md-3 control-lmabel">课程
                                    </label>
                                    <div class="col-md-9 gallery-pages">
                                        <ul style="float: left;" class="list-filter list-unstyled">
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
                                    <button class="btn btn-primary"> <i class="fa fa-upload mrs"></i>添加</button>
                                    <button class="btn btn-primary"> <i class="fa fa-edit mrs"></i>搜索 </button>
                                    <button class="btn btn-primary"> <i class="fa fa-trash-o mrs"></i>重置</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="col-lg-12">
                <div class="col-lg-6">
                    <div class="panel panel-orange">
                        <div class="panel-heading">&#x3C;select&#x3E; tag on Top & Bottom</div>
                        <div class="panel-body">
                            <table class="table table-hover table-bordered table-advanced">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Age</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Henry</td>
                                        <td>23</td>
                                        <td><span class="label label-sm label-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Henry</td>
                                        <td>23</td>
                                        <td><span class="label label-sm label-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Henry</td>
                                        <td>23</td>
                                        <td><span class="label label-sm label-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Henry</td>
                                        <td>23</td>
                                        <td><span class="label label-sm label-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Henry</td>
                                        <td>23</td>
                                        <td><span class="label label-sm label-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>John</td>
                                        <td>45</td>
                                        <td><span class="label label-sm label-info">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>30</td>
                                        <td><span class="label label-sm label-warning">Suspended</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Lahm</td>
                                        <td>15</td>
                                        <td><span class="label label-sm label-danger">Blocked</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="panel panel-orange">
                        <div class="panel-heading">&#x3C;select&#x3E; tag on Top & Bottom</div>
                        <div class="panel-body">
                            <table class="table table-hover table-bordered table-advanced">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Age</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Henry</td>
                                        <td>23</td>
                                        <td><span class="label label-sm label-success">Approved</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>John</td>
                                        <td>45</td>
                                        <td><span class="label label-sm label-info">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>30</td>
                                        <td><span class="label label-sm label-warning">Suspended</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Lahm</td>
                                        <td>15</td>
                                        <td><span class="label label-sm label-danger">Blocked</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-lg-12">
                        <div class="col-lg-6">
                            <div class="panel panel-orange">
                                <div class="panel-heading">&#x3C;select&#x3E; tag on Top & Bottom</div>
                                <div class="panel-body">
                                    <table class="table table-hover table-bordered table-advanced">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Username</th>
                                                <th>Age</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Henry</td>
                                                <td>23</td>
                                                <td><span class="label label-sm label-success">Approved</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>John</td>
                                                <td>45</td>
                                                <td><span class="label label-sm label-info">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td>30</td>
                                                <td><span class="label label-sm label-warning">Suspended</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Lahm</td>
                                                <td>15</td>
                                                <td><span class="label label-sm label-danger">Blocked</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="panel panel-yellow">
                                <div class="panel-heading">&#x3C;input&#x3E; tag on Top & Bottom</div>
                                <div class="panel-body">
                                    <table class="table table-hover table-bordered table-advanced">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>班级名称</th>
                                                <th>状态</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Henry</td>
                                                <td><span class="label label-sm label-info">Pending</span></td>
                                                <td><span class="label label-sm label-success">Approved</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>John</td>
                                                <td><span class="label label-sm label-info">Pending</span></td>
                                                <td><span class="label label-sm label-info">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td>30</td>
                                                <td>
                                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; 编辑
                                                    </button>&nbsp;
                                                    <button type="button" class="btn btn-danger btn-xs "><i class="fa fa-trash-o"></i>&nbsp; 删除
                                                    </button>&nbsp;
                                                    <button class="btn btn-xs btn-success filter-submit"><i class="fa fa-search"></i>&nbsp;详情
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td>30</td>
                                                <td>
                                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; 编辑
                                                    </button>&nbsp;
                                                    <button type="button" class="btn btn-danger btn-xs "><i class="fa fa-trash-o"></i>&nbsp; 删除
                                                    </button>&nbsp;
                                                    <button class="btn btn-xs btn-success filter-submit"><i class="fa fa-search"></i>&nbsp;详情
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td>30</td>
                                                <td>
                                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; 编辑
                                                    </button>&nbsp;
                                                    <button type="button" class="btn btn-danger btn-xs "><i class="fa fa-trash-o"></i>&nbsp; 删除
                                                    </button>&nbsp;
                                                    <button class="btn btn-xs btn-success filter-submit"><i class="fa fa-search"></i>&nbsp;详情
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td>30</td>
                                                <td>
                                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; 编辑
                                                    </button>&nbsp;
                                                    <button type="button" class="btn btn-danger btn-xs "><i class="fa fa-trash-o"></i>&nbsp; 删除
                                                    </button>&nbsp;
                                                    <button class="btn btn-xs btn-success filter-submit"><i class="fa fa-search"></i>&nbsp;详情
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Lahm</td>
                                                <td>15</td>
                                                <td>
                                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang';
import userprofile from '~/store/userprofile';

export default {
    name: 'BtCourseManage',
    data() {
        return {
            langConfig,
        };
    }
};
</script>
