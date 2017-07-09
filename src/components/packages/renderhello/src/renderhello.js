// <bt-render-hello :level="1">renderhello</bt-render-hello>
export default {
    name: 'BtRenderHello',
    render: function(createElement) {
        return createElement(
            'h' + this.level, // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}
