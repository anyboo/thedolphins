export default {
    techermanage: [{
        name: 'name',
        label: '姓名',
        desc: '老师姓名',
        align: 'right',
        fieldColumn: true,
        type: 'input',
        placeholder: '课程必须输入2到20个字符.',
        required: true,
        invalid: true,
        minlength: 2,
        maxlength: 20
    }, {
        name: 'phone',
        label: '电话',
        desc: '电话',
        placeholder: '请输入电话号码',
        align: 'right',
        fieldColumn: true,
        type: 'input',
        required: true,
        invalid: true,
    }, {
        name: 'sex',
        label: '性别',
        desc: '性别',
        align: 'right',
        fieldColumn: true,
        type: 'radio',
        defvalue: '1',
        data: [
            { label: '男', value: '1' },
            { label: '女', value: '2' }
        ]
    }, {
        name: 'email',
        label: '邮箱',
        desc: '邮箱',
        placeholder: '请输入邮箱',
        align: 'right',
        fieldColumn: true,
        type: 'input'
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
            applend: true,
            tableName: 'courseclass',
            tableLabel: 'className',
            tableId: '_id'
        }
    }, {
        name: 'birthday',
        label: '生日日期',
        desc: '生日日期',
        placeholder: '选择生日日期',
        align: 'right',
        fieldColumn: true,
        type: 'date'
    }, {
        name: 'joinday',
        label: '入职日期',
        desc: '入职日期',
        placeholder: '选择入职日期',
        align: 'right',
        fieldColumn: true,
        type: 'date'
    }]
}
