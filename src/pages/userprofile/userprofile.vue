<template>
    <div id="page-user-profile" class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <div class="text-center mbl"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/oliveirasimoes/128.jpg" style="border: 5px solid #fff; box-shadow: 0 2px 3px rgba(0,0,0,0.25);" class="img-circle" />
                        </div>
                    </div>
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
                </div>
                <div class="col-md-9">
                    <bt-tabs :tabs="tabs"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang';
import userprofile from '~/store/userprofile';

console.log(userprofile);
export default {
    name: 'BtUser',
    data() {
        return {
            langConfig,
            tabs:userprofile.tabs
        };
    },
    methods: {},
    computed: {},
};
</script>
