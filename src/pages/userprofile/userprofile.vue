<template>
    <div id="page-user-profile" class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <div class="text-center mbl"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/oliveirasimoes/128.jpg" style="border: 5px solid #fff box-shadow: 0 2px 3px rgba(0,0,0,0.25)" class="img-circle" />
                        </div>
                    </div>
                    <bt-table :table-header-data="tableHeadData" :table-data="tableData" />
                </div>
                <div class="col-md-9">
                    <bt-tabs :tabs="tabs" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang'
import userprofile from '~/store/userprofile'

export default {
    name: 'BtUser',
    data() {
        return {
            langConfig,
            tabs: userprofile.tabs,
            tableHeadData : userprofile.tableHeadData,
            tableData : userprofile.tableData
        }
    }
}
</script>
