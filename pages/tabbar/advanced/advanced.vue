<template>
	<view class="width100">
		<textView :content="content"/>
		<itemList :itemList="items"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '注意在小程序中模拟器也许会出现line2的线段不显示问题，但在真机中是好的，以真机为准',
				items: [
					{
						name: 'itemBackground-背景追光',
						path: '/pages/advanced/itemBackground'
					},
					{
						name: '获取QS-tabs的布局信息',
						path: '/pages/advanced/getQuery'
					}
				]
			}
		}
	}
</script>

<style>
</style>
