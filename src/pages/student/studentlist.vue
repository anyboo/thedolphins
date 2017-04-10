<template>
    <div class="studentlist">
        <el-breadcrumb>
            <el-breadcrumb-item>{{ langConfig.breadcrumb.main[lang] }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ langConfig.breadcrumb.project[lang] }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ langConfig.breadcrumb.page[lang] }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form inline :model="query" label-position="right" label-width="60px" class="query-form">
            <el-form-item :label="langConfig.query.name[lang]" prop="name">
                <el-input v-model="query.name" :placeholder="langConfig.query.nameHolder[lang]"></el-input>
            </el-form-item>
            <el-form-item :label="langConfig.query.date[lang]" prop="date">
                <el-date-picker v-model="query.date" type="daterange" :placeholder="langConfig.query.dateHolder[lang]">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">{{ langConfig.query.search[lang] }}</el-button>
                <el-button type="primary" @click="handleAppend">{{ langConfig.query.add[lang] }}</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" row-key="_id" class="table" stripe border>
            <el-table-column prop="region" :label="langConfig.table.date[lang]" sortable width="200"></el-table-column>
            <el-table-column prop="name" :label="langConfig.table.name[lang]" width="200"></el-table-column>
            <el-table-column prop="resource" :label="langConfig.table.address[lang]"></el-table-column>
            <el-table-column prop="desc" :label="langConfig.table.zip[lang]" width="200"></el-table-column>
            <el-table-column :label="langConfig.table.operations[lang]" width="160">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">{{ langConfig.table.edit[lang] }}</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">{{ langConfig.table.delete[lang] }}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="total" class="pagination" :current-page="currentPage" :page-size="pageSize" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
        <el-dialog :title="title" v-model="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth" v-model="form.name">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import langConfig from '~/lang'
import modulelist from '~/modulelist.js'
console.log(modulelist)
export default {
    name: 'studentlist',
    data() {
        return {
            langConfig,
            tableData: [],
            apiUrl: 'http://www.bullstech.cn:9999/api/table/', //'http://127.0.0.1:9999/api/table/',//
            dialogFormVisible: false,
            formLabelWidth: '120px',
            hasEdit: false,
            total: 0,
            currentPage: 1,
            pageSize: 10,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            query: {
                name: '',
                date: []
            }
        }
    },
    computed: {
        lang() {
            return '/zh-CN'
        },
        title() {
            return this.hasEdit ? '编辑' : '新建'
        }
    },
    mounted: function() {
        this.operationGet()
    },
    methods: {
        handleAppend() {
            this.hasEdit = false
            this.form = {}
            this.dialogFormVisible = true
        },
        handleEdit(index, row) {
            this.hasEdit = true
            this.form = row
            this.dialogFormVisible = true
        },
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let apiUrlDelete = this.apiUrl + row._id
                this.operationDelete(apiUrlDelete)
                this.$notify({
                    title: '消息',
                    message: '删除成功',
                    type: 'success'
                })
            }).catch(() => {
                this.$notify({
                    title: '消息',
                    message: '已取消删除',
                    type: 'warning'
                })
            })
        },
        handleSubmit() {
            this.dialogFormVisible = false
            if (this.hasEdit) {
                let apiUrlPut = this.apiUrl + this.form._id
                this.operationEdit(apiUrlPut)
                this.$notify({
                    title: '消息',
                    message: '编辑成功',
                    type: 'success'
                })
            } else {
                this.operationAppend()
                this.$notify({
                    title: '消息',
                    message: '新建成功',
                    type: 'success'
                })
            }
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.operationGet()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.operationGet()
        },
        operationAppend() {
            var vm = this
            vm.$http.post(vm.apiUrl, vm.form)
                .then((response) => {
                    vm.operationGet()
                })
        },
        operationEdit(apiUrlPut) {
            var vm = this
            vm.$http.put(apiUrlPut, vm.form)
                .then((response) => {
                    vm.operationGet()
                })

        },
        operationDelete(apiUrlDelete) {
            var vm = this
            vm.$http.delete(apiUrlDelete)
                .then((response) => {
                    vm.operationGet()
                })
        },
        operationGet() {
            var vm = this
            var page = vm.currentPage - 1
            var apiUrlGet = vm.apiUrl + "?page=" + page + "&prepage=" + vm.pageSize
            vm.$http.get(apiUrlGet)
                .then((response) => {
                    //console.log(response.data)
                    vm.tableData = response.data.data
                    vm.total = response.data.count
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    },
}
</script>
