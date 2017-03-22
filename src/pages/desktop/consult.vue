<template>
    <div class="panel panel-grey">
        <div class="panel-heading">{{ title }}</div>
        <div class="panel-body pan">
            <form action="#">
                <div class="form-body pal">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <div class="input-icon"><i class="fa fa-user"></i>
                                    <input id="inputFirstName" placeholder="First Name" class="form-control" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <div class="input-icon"><i class="fa fa-user"></i>
                                    <input id="inputLastName" placeholder="Last Name" class="form-control" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <div class="input-icon"><i class="fa fa-envelope"></i>
                                    <input id="inputEmail" placeholder="E-mail" class="form-control" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <div class="input-icon"><i class="fa fa-phone"></i>
                                    <input id="inputPhone" placeholder="Phone" class="form-control" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Country</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input id="inputCity" placeholder="City" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input id="inputPostCode" placeholder="Post code" class="form-control" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input id="inputAddress" placeholder="Address" class="form-control" type="text">
                    </div>
                    <div class="form-group">
                        <textarea rows="8" placeholder="Additional info" class="form-control"></textarea>
                    </div>
                    <hr>
                    <div class="form-group">
                        <div class="radio">
                            <label class="radio-inline">
                                <div class="iradio_minimal-grey checked" style="position: relative;">
                                    <input id="optionsVisa" name="optionsRadios" value="Visa" checked="checked" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;" type="radio">
                                    <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                </div>&nbsp; Visa
                            </label>
                            <label class="radio-inline">
                                <div class="iradio_minimal-grey" style="position: relative;">
                                    <input id="optionsMasterCard" name="optionsRadios" value="MasterCard" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;" type="radio">
                                    <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                </div>&nbsp; MasterCard
                            </label>
                            <label class="radio-inline">
                                <div class="iradio_minimal-grey" style="position: relative;">
                                    <input id="optionsPayPal" name="optionsRadios" value="PayPal" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;" type="radio">
                                    <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                </div>&nbsp; PayPal
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <input id="inputNameCard" placeholder="Name on card" class="form-control" type="text">
                    </div>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="form-group">
                                <input id="inputCardNumber" placeholder="Card number" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <input id="inputCVV2" placeholder="CVV2" class="form-control" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group mbn">
                                <label class="pts">Expiration date</label>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Month</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group mbn">
                                <input id="inputYear" placeholder="Year" class="form-control" type="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-actions text-right pal">
                    <button type="submit" class="btn btn-primary">Continue</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
		name: 'consult',
		data() {
            return{ title: 'Test form' }
        }
	}
</script>