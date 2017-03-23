<template>
    <table class="table table-striped table-hover">
        <tbody>
            <tr>
                <td width="50%">User Name</td>
                <td>Diane Harris</td>
            </tr>
            <tr>
                <td width="50%">Email</td>
                <td>name@example.com</td>
            </tr>
            <tr>
                <td width="50%">Address</td>
                <td>Street 123, Avenue 45, Country</td>
            </tr>
            <tr>
                <td width="50%">Status</td>
                <td><span class="label label-success">Active</span>
                </td>
            </tr>
            <tr>
                <td width="50%">Rating</td>
                <td><i class="fa fa-star text-yellow fa-fw"></i><i class="fa fa-star text-yellow fa-fw"></i><i class="fa fa-star text-yellow fa-fw"></i><i class="fa fa-star text-yellow fa-fw"></i><i class="fa fa-star text-yellow fa-fw"></i>
                </td>
            </tr>
            <tr>
                <td width="50%">Join Since</td>
                <td> Jun 03, 2014</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import langConfig from '~/lang';

export default {
    name: 'BtTable',
    data() {
        return {
            langConfig
        };
    },
    methods: {},
    computed: {},
};
</script>
