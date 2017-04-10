<template>
    <div class="page-title-breadcrumb">
        <ol class="breadcrumb page-breadcrumb pull-left">
            <li><i class="fa fa-home"></i>&nbsp<a href="index.html">首页</a>&nbsp&nbsp<i class="fa fa-angle-right"></i>&nbsp&nbsp</li>
            <slot></slot>
        </ol>
        <div class="page-header pull-right">
            <div class="page-title">用户管理</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BtBreadcrumb',
}
</script>
