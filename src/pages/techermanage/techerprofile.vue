<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <div class="text-center mbl">
                            <div class="thumb">
                                <img src="/assets/128.png" style="border: 5px solid #fff box-shadow: 0 2px 3px rgba(0,0,0,0.25)" class="img-circle" />
                            </div>
                            <div>
                                <h2>{{ gettecherName()}}</h2>
                            </div>
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
<style>
.text-center .thumb {
    border: 5px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: block;
    width: 140px;
    height: 140px;
    margin: 0 auto;
}
</style>
<script>
import langConfig from '~/lang'
import techerprofile from '~/store/pages/techerprofile'
import * as types from '~/store/mutation-types'
import moment from 'moment'

export default {
    name: 'BtTecherProfile',
    data() {
        return {
            langConfig,
            tabs: this.getTecherTabs(),
            tableHeadData: techerprofile.tableHeadData,
            tableData: [],
            formData: {},
            courseAllclass: []
        }
    },
    beforeMount() {
        this.operationGetModel()
    },
    methods: {
        getTecherTabs() {
            let key = this.$route.params.id
            return [{
                title: '老师信息',
                icon: 'fa-edit',
                to: '/techerprofile/' + key + '/info'
            }, {
                title: '带班信息',
                icon: 'fa-edit',
                to: '/techerprofile/' + key + '/classinfo'
            }, {
                title: '排课信息',
                icon: 'fa-edit',
                to: '/techerprofile/' + key + '/schedule'
            }]
        },
        gettecherName() {
            let name = ''
            if (this.formData && this.formData.length > 0) {
                name = this.formData[0].name
            }
            return name
        },
        getClassName(id) {
            let name = ''
            this.courseAllclass.every(o => {
                if (o._id == id) {
                    name = o.className
                    return false
                }
                return true
            })
            return name
        },
        getSex(value) {
            let sex = '男'
            if (value == 2) {
                sex = '女'
            }
            return sex
        },
        getDateTime(value) {
            let datetime = ''
            let m = moment(value)
            if (m.isValid()) {
                datetime = m.format('YYYY/MM/DD')
            }
            return datetime
        },
        eventData() {
            let vm = this

            vm.$store.commit(types.GET_CURRENT_API, 'courseclass')

            let filterData = []
            if (vm.$store.getters.getCurrentModel['courseclass']) {
                let data = vm.$store.getters.getCurrentModel['courseclass'].data
                filterData = data
            }
            this.courseAllclass = filterData
            return filterData
        },
        operationGetModel() {
            let vm = this
            vm.$store.dispatch(types.GET_API, 'courseclass').then(() => {
                this.eventData()
                this.operationGet()
            })
        },
        operationGet() {
            let vm = this
            let key = this.$route.params.id
            vm.$store.dispatch(types.GET_ID_API, {
                'model': 'techermanage',
                'id': key
            }).then((data) => {
                vm.formData = data.data
                vm.tableData.push({
                    'label': '入职时间',
                    'birthday': vm.getDateTime(vm.formData[0].joinday)
                })
                vm.tableData.push({
                    'label': '生日',
                    'birthday': vm.getDateTime(vm.formData[0].birthday)
                })
                vm.tableData.push({
                    'label': '电话',
                    'birthday': vm.formData[0].phone
                })
                vm.tableData.push({
                    'label': '邮件',
                    'birthday': vm.formData[0].email
                })
                vm.tableData.push({
                    'label': '性别',
                    'birthday': vm.getSex(vm.formData[0].sex)
                })
                vm.tableData.push({
                    label: {
                        text: '课程',
                        attrs: {
                            width: '50%'
                        }
                    },
                    wers: {
                        tag: 'bt-label',
                        props: {
                            'label-text': vm.getClassName(vm.formData[0].category),
                            'label-style': 'yellow'
                        }
                    }
                })
            })
        }

    }
}
</script>
