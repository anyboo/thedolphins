<template>
    <div class="bt-row row" @click="handleClick($event)" :class="getComponentActive">
        <slot></slot>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtRow',
    props: ['rowId'],
    data() {
        return {
            langConfig
        }
    },
    methods: {
        handleClick(event) {
            this.$store.commit('componentStatusChange', {
                'id': this.rowId,
                'status': [{
                    'active': status
                }]
            })
            event.stopPropagation()
        },
    },
    computed: {
        getComponentActive() {
            let item = this.$store.state.design.find(designitem => designitem.id == this.rowId)
            let classobj = {}
            if (item) {
                classobj = {
                    'active': item.active,
                    'haveactive': item.haveactive,
                    'dragenter': item.dragenter
                }
            }
            return classobj
        }

    },
}
</script>
