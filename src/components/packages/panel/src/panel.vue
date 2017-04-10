<template>
    <div class="panel panel-orange">
        <div class="ribbon-wrapper">
            <div class="ribbon-inner">Hot</div>
        </div>
        <div class="panel-heading">
            <h3 class="panel-title text-center">初级班</h3>
        </div>
        <div class="panel-body pan text-center">
            <div class="the-price">
                <h2>$10000</h2>
            </div>
            <table class="table mbn">
                <tbody>
                    <tr>
                        <td>课时制</td>
                    </tr>
                    <tr class="active">
                        <td>14000课时</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="panel-footer pan"><a href="javascript:void(0)" role="button" class="btn btn-orange btn-block">Sign Up</a>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtPanel',
    data() {
        return {
            langConfig
        }
    },
    methods: {},
    computed: {},
}
</script>
