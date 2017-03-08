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
        <el-date-picker
            v-model="query.date"
            type="daterange"
            :placeholder="langConfig.query.dateHolder[lang]">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">{{ langConfig.query.search[lang] }}</el-button>
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
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
      class="pagination">
    </el-pagination>
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
        query: {
          name: '',
          date: []
        }
      };
    },
    computed: {
      lang() {
        console.log(this.$route.path);
        return '/zh-CN';
      }
    },

  };
</script>