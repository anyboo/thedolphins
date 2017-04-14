 let glassstatus = [
     { label: '未开班', value: '1' },
     { label: '开班中', value: '2' },
     { label: '已结班', value: '3' }
 ]

 export default {
     glassstatus: glassstatus,
     glassmanage: [{
         name: 'name',
         label: '班级名称',
         desc: '班级名称',
         align: 'right',
         fieldColumn: true,
         type: 'input',
         placeholder: '班级必须输入2到20个字符.',
         required: true,
         invalid: true,
         minlength: 2,
         maxlength: 20
     }, {
         name: 'maxpeople',
         label: '最大人数',
         desc: '最大人数',
         placeholder: '请输入数字',
         align: 'right',
         fieldColumn: true,
         type: 'number'
     }, {
         name: 'status',
         label: '班级状态',
         desc: '班级状态',
         align: 'right',
         fieldColumn: true,
         type: 'radio',
         defvalue: '1',
         data: glassstatus
     }, {
         name: 'category',
         label: '课程大类',
         desc: '课程大类',
         placeholder: '课程',
         align: 'right',
         fieldColumn: true,
         type: 'dropdown-select',
         /*required: true,*/
         props: {
             applend: false,
             tableName: 'courseclass',
             tableLabel: 'className',
             tableId: '_id'
         }
     }, {
         name: 'course',
         label: '课程',
         desc: '课程',
         placeholder: '课程',
         align: 'right',
         fieldColumn: true,
         type: 'dropdown-select',
         /*required: true,*/
         props: {
             applend: false,
             tableName: 'coursemanage',
             tableLabel: 'name',
             filter: 'category',
             tableId: '_id',
             info: [{ label: '课时', field: 'classhours' }, { label: '总价格', field: 'price' }]
         }
     }, {
         name: 'techer',
         label: '老师',
         desc: '老师',
         placeholder: '老师',
         align: 'right',
         fieldColumn: true,
         type: 'dropdown-select',
         /*required: true,*/
         props: {
             applend: false,
             tableName: 'techermanage',
             tableLabel: 'name',
             filter: 'category',
             tableId: '_id'
         }
     }]
 }
