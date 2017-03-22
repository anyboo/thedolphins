<template>
    <ul class="nav" :class="classObject">
        <slot>无菜单项</slot>
    </ul>
</template>
<script>
export default {
    name: 'BtMenu',
    componentName: 'BtMenu',
    props: ['navlevel', 'collapse', "menuname"],
    data() {
        return {
            classObject: {
                'nav-second-level ': (this.navlevel == "1"),
                'nav-third-level ': (this.navlevel == "2"),
                'collapse': this.collapse
            }
        };
    },
    methods: {
        menuChanged(isActive) {
            this.classObject.collapse = !isActive;
        }
    }
};
</script>
