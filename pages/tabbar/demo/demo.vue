<template>
	<view>
		<button type="primary" @tap="openWin('line3_demo')">line3 示例</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openWin(page) {
				uni.navigateTo({
					url: `/pages/demo/${page}/${page}`
				})
			}
		}
	}
</script>

<style>

</style>
