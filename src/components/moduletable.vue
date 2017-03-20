<template>
    <div class="moduletable">
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
            <template v-for="item in fieldColumn">
                <el-table-column :prop="item.name" :label="fieldlang(item.name)"></el-table-column>
            </template>
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
                <template v-for="item in fieldColumn">
                    <el-form-item :label="fieldlang(item.name)" :label-width="formLabelWidth" v-model="form[item.name]">
                        <el-input v-if="fieldType(item,'input')" v-model="form[item.name]" auto-complete="off"></el-input>
                        <el-select v-if="fieldType(item,'select')" v-model="form[item.name]" placeholder="请选择活动区域" :loading="true">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <span v-if="fieldType(item,'text')">{{ form[item.name] }}</span>
                        <el-upload v-if="fieldType(item,'upload')" list-type="picture-card" :file-list="form[item.name]" action="http://www.bullstech.cn:9999/upload/" :before-upload="beforeAvatarUpload" :on-preview="handlePictureCardPreview" :on-success="handleAvatarScucess" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </template>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog v-model="dialogImageVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>
<script>
import langConfig from '~/lang';
import modulelist from '~/modulelist.js';

export default {
    name: 'moduletable',
    props: ['modulename'],
    data() {
        return {
            langConfig,
            tableData: [],
            apiUrl: 'http://www.bullstech.cn:9999/api/', //'http://127.0.0.1:9999/api/table/',//
            dialogFormVisible: false,
            formLabelWidth: '120px',
            hasEdit: false,
            total: 0,
            currentPage: 1,
            pageSize: 10,
            modulelist,
            form: {},
            uploadfield: '',
            dialogImageUrl: '',
            dialogImageVisible: false,
            query: {
                name: '',
                date: []
            }
        };
    },
    computed: {
        lang() {
            return '/zh-CN';
        },
        title() {
            return this.hasEdit ? '编辑' : '新建';
        },
        fieldColumn() {
            var tablefield = this.modulelist[this.modulename];
            var fields = [];
            for (var item in tablefield) {
                if (tablefield[item].fieldColumn) {
                    fields.push(tablefield[item]);
                }
            }
            return fields;
        },
    },
    watch: {
        modulename(val) {
            console.log("watch");
            //this.Initform();
            this.operationGet();
        },
    },
    mounted() {
        this.Initform();
        this.operationGet();
    },
    methods: {
        fieldType(item, eltype) {
            var result = false;
            if (typeof(item[eltype]) == "undefined") {

            } else {
                result = item[eltype];
            }
            return result;
        },
        Initform() {
            var tablefield = this.modulelist[this.modulename];
            //console.log(this.form);
            this.form = {};
            for (var item in tablefield) {
                if (tablefield[item].fieldColumn) {
                    if (tablefield[item].upload) {
                        this.uploadfield = tablefield[item].name;
                        this.form[tablefield[item].name] = [];
                    } else {
                        this.form[tablefield[item].name] = "";
                    }
                }
            }
        },
        url() {
            return this.apiUrl + this.modulename + "/";
        },
        fieldlang(item) {
            var mlang = this.langConfig[this.modulename];
            if (typeof(mlang) == "undefined") {
                mlang = item;
            } else {
                var ilang = mlang[item];
                if (typeof(ilang) == "undefined") {
                    mlang = item;
                } else {
                    mlang = ilang['/zh-CN'];
                }
            }
            return mlang;
        },
        handleRemove(file, fileList) {
            this.form[this.uploadfield] = fileList;
        },
        handleAvatarScucess(res, file) {
            if (res.success) {
                this.form[this.uploadfield].push(res);
            }
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogImageVisible = true;
        },
        handleAppend() {
            this.hasEdit = false;
            this.Initform();
            this.dialogFormVisible = true;
        },
        handleEdit(index, row) {
            this.hasEdit = true;
            this.form = row;
            this.dialogFormVisible = true;
        },
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let apiUrlDelete = this.url() + row._id;
                this.operationDelete(apiUrlDelete);
                this.$notify({
                    title: '消息',
                    message: '删除成功',
                    type: 'success'
                });
            }).catch(() => {
                this.$notify({
                    title: '消息',
                    message: '已取消删除',
                    type: 'warning'
                });
            });
        },
        handleSubmit() {
            this.dialogFormVisible = false;
            if (this.hasEdit) {
                let apiUrlPut = this.url() + this.form._id;
                this.operationEdit(apiUrlPut);
                this.$notify({
                    title: '消息',
                    message: '编辑成功',
                    type: 'success'
                });
            } else {
                this.operationAppend();
                this.$notify({
                    title: '消息',
                    message: '新建成功',
                    type: 'success'
                });
            }
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.operationGet();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.operationGet();
        },
        operationAppend() {
            var vm = this;
            vm.$http.post(this.url(), vm.form)
                .then((response) => {
                    vm.operationGet();
                });
        },
        operationEdit(apiUrlPut) {
            var vm = this;
            vm.$http.put(apiUrlPut, vm.form)
                .then((response) => {
                    vm.operationGet();
                });

        },
        operationDelete(apiUrlDelete) {
            var vm = this;
            vm.$http.delete(apiUrlDelete)
                .then((response) => {
                    vm.operationGet();
                });
        },
        operationGet() {
            var vm = this;
            var page = vm.currentPage - 1;
            var apiUrlGet = this.url() + "?page=" + page + "&prepage=" + vm.pageSize;
            vm.$http.get(apiUrlGet)
                .then((response) => {
                    vm.tableData = response.data.data;
                    vm.total = response.data.count;
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    },
};
</script>
