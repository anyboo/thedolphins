export default {
    tabs: [{
        title: '用户信息',
        icon: 'fa-edit',
        to: '/userprofile/step2'
    }, {
        title: '带班信息',
        icon: 'fa-edit',
        to: '/userprofile/step1'
    }, {
        title: '排课信息',
        icon: 'fa-edit',
        to: '/userprofile/step3'
    }],
    /*
    tableHeadData: [
        {
            label: 'sss',
            ss: 'sss',
        }, {
            label: 'sss',
        }, {
            label: 'sss',
        }
    ],*/
    tableData: [{
        label: '用户名',
        ss: '林祖鑫',
    }, {
        label: 'Email',
        label1: 'name@example.com',
    }, {
        wer: '地址',
        wers: '福州市台江区富力中心C2座12层',
    }, {
        wer: {
            text: 'Email',
            attrs: {
                width: '50%'
            }
        },
        wers: {
            tag: 'bt-label',
            props: {
                'label-text': 'sdfsd',
                'label-style': 'yellow'
            }
        },
    }, {
        wer: {
            text: 'wwwww',
            attrs: {
                width: '50%'
            }
        },
        wers: {
            tag: 'bt-label',
            props: {
                'label-text': 'sdfsd',
                'label-style': 'yellow'
            }
        },
    }]
};
