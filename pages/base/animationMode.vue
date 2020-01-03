<template>
	<view class="width100">
		<view class="null"></view>
		<view class="tip">
			<text decode>{{tip}}</text>
		</view>
		
		<view class="title">line1模式</view>
		<view class="null"></view>
		<!-- 1 -->
		<view class="box">
			<QSTabs :current="current_1" animationMode="line1" :tabs="tabs_1" minWidth="187.5" @change="change($event, '1')"/>
		</view>
		<view class="null"></view>
		<view class="title">line2模式</view>
		<view class="null"></view>
		<!-- 2 -->
		<view class="box">
			<QSTabs :current="current_1" animationMode="line2" :tabs="tabs_2" minWidth="187.5" @change="change($event, '1')"/>
		</view>
		
		<view class="null"></view>
		<view class="title">none</view>
		<view class="null"></view>
		<!-- 3 -->
		<view class="box">
			<QSTabs :current="current_1" animationMode="none" :tabs="tabs_2" minWidth="187.5" @change="change($event, '1')"/>
		</view>
		<view class="null"></view>
		<view class="title">line3模式</view>
		<view class="null"></view>
		<button type="primary" @tap="openWin('/pages/demo/line3_demo/line3_demo')">line3 示例</button>
	</view>
</template>

<script>
	import QSTabs from '@/components/QS-tabs/QS-tabs.vue';
	export default {
		components: {
			QSTabs
		},
		data() {
			return {
				tip: `	*由animationMode控制动画类型\n
						&nbsp;&nbsp;目前有line1,line2模式\n
						&nbsp;&nbsp;默认line1模式\n
						*若都不需要则可以传none\n`,
						
				// 1
				tabs_1: ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6', 'tab-7', 'tab-8'],
				current_1: 0,
				
				// 2
				tabs_2: ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6', 'tab-7', 'tab-8'],
			}
		},
		onLoad() {

		},
		methods: {
			change(index, i) {
				this['current_' + i] = index;
			},
			openWin(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>
</style>
