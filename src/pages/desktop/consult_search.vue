<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="portlet box">
                <div class="portlet-body">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="Date" width="180"></el-table-column>
                        <el-table-column prop="name" label="Name" width="180"></el-table-column>
                        <el-table-column prop="address" label="Address" width="180"></el-table-column>
                    </el-table>
                    <!-- <table id="example-export" class="table table-hover table-striped table-bordered table-advanced tablesorter mbn">
                        <thead>
                            <tr>
                                <th width="9%">Record #</th>
                                <th width="10%">Username</th>
                                <th width="10%">Country</th>
                                <th width="10%">Gender</th>
                                <th width="7%">Order</th>
                                <th width="12%">Date</th>
                                <th width="10%">Price</th>
                                <th width="9%">Status</th>
                                <th width="12%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Henry</td>
                                <td>United States</td>
                                <td>Male</td>
                                <td>32</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-success">Approved</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>John</td>
                                <td>United States</td>
                                <td>Female</td>
                                <td>45</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-info">Pending</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>United States</td>
                                <td>Female</td>
                                <td>40</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-warning">Suspended</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Lahm</td>
                                <td>United States</td>
                                <td>Female</td>
                                <td>15</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-danger">Blocked</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Henry</td>
                                <td>United States</td>
                                <td>Male</td>
                                <td>32</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-success">Approved</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>John</td>
                                <td>United States</td>
                                <td>Female</td>
                                <td>45</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-info">Pending</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>United States</td>
                                <td>Female</td>
                                <td>40</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-warning">Suspended</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Lahm</td>
                                <td>United States</td>
                                <td>Female</td>
                                <td>15</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-danger">Blocked</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>United States</td>
                                <td>Female</td>
                                <td>40</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-warning">Suspended</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Lahm</td>
                                <td>United States</td>
                                <td>Female</td>
                                <td>15</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-danger">Blocked</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Henry</td>
                                <td>United States</td>
                                <td>Male</td>
                                <td>32</td>
                                <td>20-05-2014</td>
                                <td>$240.50</td>
                                <td><span class="label label-sm label-success">Approved</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp Edit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table> -->
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage2" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'consult_search',
    data: function() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }]
        }
    },
}
</script>
