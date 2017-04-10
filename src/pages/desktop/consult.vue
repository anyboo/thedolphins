<template>
    <div class="row">
        <div class="col-lg-8">
            <div class="panel panel-grey">
                <div class="panel-heading">{{ title }}</div>
                <div class="panel-body pan">
                    <form action="#">
                        <div class="form-body pal">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-icon"><i class="fa fa-user"></i>
                                            <input id="inputFirstName" v-bind:placeholder="FirstName" class="form-control" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-icon"><i class="fa fa-user"></i>
                                            <input id="inputLastName" v-bind:placeholder="LastName" class="form-control" type="text">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-icon"><i class="fa fa-envelope"></i>
                                            <input id="inputEmail" v-bind:placeholder="Email" class="form-control" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-icon"><i class="fa fa-phone"></i>
                                            <input id="inputPhone" v-bind:placeholder="Phone" class="form-control" type="text">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="panel panel-green">
                <div class="panel-heading">{{ title2 }}</div>
                <div class="panel-body pan">
                    <form action="#">
                        <div class="form-body pal">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-1">
                                        <label class=" pts">{{ label1 }}</label>
                                    </div>
                                    <div class="col-md-1">
                                        <label class="cradio-inline">
                                            <input id="optionsVisa" type="radio" name="optionsRadios" value="Visa" checked="checked" />&nbsp {{ source1 }}
                                        </label>
                                    </div>
                                    <div class="col-md-1">
                                        <label class="adio-inline">
                                            <input id="optionsMasterCard" type="radio" name="optionsRadios" value="MasterCard" />&nbsp {{ source2 }}
                                        </label>
                                    </div>
                                    <div class="col-md-1">
                                        <label class="adio-inline">
                                            <input id="optionsMasterCard" type="radio" name="optionsRadios" value="MasterCard" />&nbsp {{ source3 }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-1">
                                        <label class="pts">{{ label2 }}</label>
                                    </div>
                                    <div class="col-md-1">
                                        <label class="adio-inline">
                                            <input id="optionsVisa" type="radio" name="optionsRadios" value="Visa" checked="checked" />&nbsp {{ method1 }}
                                        </label>
                                    </div>
                                    <div class="col-md-1">
                                        <label class="adio-inline">
                                            <input id="optionsMasterCard" type="radio" name="optionsRadios" value="MasterCard" />&nbsp {{ method2 }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <select class="form-control">
                                            <option>{{ subject }}</option>
                                            <option>{{ subject }}</option>
                                            <option>{{ subject }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <select class="form-control">
                                            <option>{{ course }}</option>
                                            <option>{{ course }}</option>
                                            <option>{{ course }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>&nbsp{{ follow }}
                                            <select class="form-control">
                                                <option>{{ follow }}</option>
                                                <option>{{ follow }}</option>
                                                <option>{{ follow }}</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea rows="8" v-bind:placeholder="detail" class="form-control"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="form-actions text-center pal">
                <button type="submit" class="btn btn-primary">{{ commit }}</button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'consult',
    data: function() {
        return {
            title: "学员信息",
            title2: "咨询信息",
            FirstName: "姓",
            LastName: "名",
            Email: "年龄",
            Phone: "联系电话",
            commit: "提交",
            source1: "广告",
            source2: "传单",
            source3: "朋友",
            method1: "电话",
            method2: "来访",
            label1: "信息来源",
            label2: "方式",
            subject: "科目",
            course: "课程",
            follow: "跟进",
            detail: "沟通情况"
        }
    },
}
</script>
