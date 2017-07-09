<template>
	<div>
	<transition>
		<router-view></router-view>
		<router-view></router-view>
		<router-view></router-view>
	</transition>
	<li>desktop view</li>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'desktop',

		data() {
			return this
		},
	}
</script>