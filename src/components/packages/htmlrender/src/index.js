// <bt-render-hello :level="1">renderhello</bt-render-hello>
export default {
    name: 'BtHtmlRender',
    render: function(createElement) {
        return createElement(
            this.flag, // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    props: {
        flag: {
            type: String,
            required: true
        }
    }
}
