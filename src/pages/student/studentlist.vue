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
                <el-button type="primary" @click="dialogFormVisible = true">{{ langConfig.query.add[lang] }}</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData[lang]" class="table" stripe border>
            <el-table-column prop="date" :label="langConfig.table.date[lang]" sortable width="200"></el-table-column>
            <el-table-column prop="name" :label="langConfig.table.name[lang]" width="200"></el-table-column>
            <el-table-column prop="address" :label="langConfig.table.address[lang]"></el-table-column>
            <el-table-column prop="zip" :label="langConfig.table.zip[lang]" width="200"></el-table-column>
            <el-table-column :label="langConfig.table.operations[lang]" width="160">
                <template scope="scope">
                    <el-button size="small">{{ langConfig.table.edit[lang] }}</el-button>
                    <el-button size="small" type="danger">{{ langConfig.table.delete[lang] }}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="100" class="pagination">
        </el-pagination>
        <el-dialog title="新建" v-model="dialogFormVisible">
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
                <el-button type="primary" @click="postApiData">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import langConfig from '~/lang';
import tableData from '~/table-data';
export default {
    name: 'studentlist',
    data() {
        return {
            langConfig,
            tableData,
            apiUrl: 'http://www.bullstech.cn:9999/api/table',
            dialogFormVisible: false,
            formLabelWidth: '120px',
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
        };
    },
    computed: {
        lang() {
            return '/zh-CN';
        }
    },
    mounted: function() {
        this.getApiData();
    },
    methods: {
        postApiData: function() {
            var vm = this;
            vm.$http.post(vm.apiUrl, vm.form)
                .then((response) => {
                    //vm.$set('form', {})
                    vm.getApiData();
                });
            this.dialogFormVisible = false;
        },
        getApiData: function() {
            this.$http.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data);
                    //this.$set('gridData', response.data)
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    },
};
</script>
