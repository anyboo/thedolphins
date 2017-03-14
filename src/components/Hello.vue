<template>
    <div id="hello">
        默认按钮
        <el-table :data="tableData" row-key="_id" class="table" stripe border>
            <template v-for="item in modulelist[modulename]">
                <el-table-column prop="item.name" :label="fieldlang(item.name)" sortable width="200"></el-table-column>
                <!--
            <el-table-column prop="name" :label="langConfig.table.name[lang]" width="200"></el-table-column>
            <el-table-column prop="resource" :label="langConfig.table.address[lang]"></el-table-column>
            <el-table-column prop="desc" :label="langConfig.table.zip[lang]" width="200"></el-table-column>
            -->
            </template>
            <el-table-column :label="langConfig.table.operations[lang]" width="160">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">{{ langConfig.table.edit[lang] }}</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">{{ langConfig.table.delete[lang] }}</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import langConfig from '~/lang';
import modulelist from '~/modulelist.js';
console.log(modulelist);
export default {
    name: 'moduletable',
    props: ['modulename'],
    data() {
        return {
            langConfig,
            modulelist,
            tableData: [],
            apiUrl: 'http://www.bullstech.cn:9999/api/', //'http://127.0.0.1:9999/api/table/',//
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
        };
    },
    methods: {
        fieldlang(item) {
            var mlang = this.langConfig[this.modulename];
            if (typeof(mlang) == "undefined") {
                mlang = item;
            } else {
                var ilang = mlang[item];
                if (typeof(ilang) == "undefined") {
                    mlang = item;
                } else {
                    mlang = ilang[this.lang()];
                }
            }
            return mlang;
        },
    },
    computed: {
        lang() {
            return '/zh-CN';
        },
        title() {
            return this.hasEdit ? '编辑' : '新建';
        },
        url() {
            return this.apiUrl + modulename + "/";
        }
    },
};
</script>
