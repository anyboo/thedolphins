export default {
    classroom: [{
        name: 'name',
        label: '教室名称',
        desc: '教室名称',
        align: 'right',
        fieldColumn: true,
        type: 'input',
        placeholder: '课程必须输入2到20个字符.',
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
    } , {
        name: 'minpeople',
        label: '最小人数',
        desc: '最大小人数',
        placeholder: '请输入数字',
        align: 'right',
        fieldColumn: true,
        type: 'number'
    }]
}
