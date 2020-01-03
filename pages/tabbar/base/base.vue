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
						name: '不滚动',
						path: '/pages/base/base'
					},
					{
						name: '滚动与居中',
						path: '/pages/base/runAndCenter'
					},
					{
						name: 'animationMode选择',
						path: '/pages/base/animationMode'
					},
					{
						name: '改变背景颜色与主题颜色',
						path: '/pages/base/changeBackground'
					},
					{
						name: '控制过渡时长',
						path: '/pages/base/duration'
					}
				]
			}
		}
	}
</script>

<style>
</style>
