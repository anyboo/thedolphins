export default {
    coursemanage: [{
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
            tableName:'courseclass',
            tableLabel:'className',
            tableId:'_id'
        }
    }, {
        name: 'name',
        label: '课程名称',
        desc: '课程名称',
        align: 'right',
        fieldColumn: true,
        type: 'input',
        placeholder: '课程必须输入2到20个字符.',
        required: true,
        invalid: true,
        minlength: 2,
        maxlength: 20
    }, {
        name: 'charge',
        label: '收费方式',
        desc: '收费方式',
        align: 'right',
        fieldColumn: true,
        type: 'radio',
        data: [
            { label: '学时制', value: '1' },
            { label: '学期制', value: '1' }
        ]
    }, {
        name: 'price',
        label: '总价',
        desc: '总价',
        placeholder: '请输入数字',
        align: 'right',
        fieldColumn: true,
        type: 'number'
    }, {
        name: 'classhours',
        label: '课时',
        desc: '总价',
        align: 'right',
        placeholder: '请输入数字',
        fieldColumn: true,
        type: 'number'
    }, {
        name: 'desc',
        label: '课程简绍',
        desc: '课程简绍',
        align: 'right',
        fieldColumn: true,
        type: 'textarea'
    }, ]
}
