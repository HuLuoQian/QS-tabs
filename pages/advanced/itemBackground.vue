<template>
	<view class="width100">
		<view class="null"></view>
		<view class="tip">
			<text decode>{{tip}}</text>
		</view>
		
		<view class="title">统一背景颜色</view>
		<view class="null"></view>
		<!-- 1 -->
		<view class="box">
			<QSTabs :current="current_1" hasItemBackground itemBackgroundColor="rgba(130,130,130,.4)" backgroundColor="#bacac6" activeColor="#eedeb0" animationMode="line2" :tabs="tabs_1" minWidth="187.5" @change="change($event, '1')"/>
		</view>
		<!-- 2 -->
		<view class="title">tabs中控制背景颜色与主题颜色</view>
		<view class="null"></view>
		<view class="box">
			<QSTabs :current="current_1" hasItemBackground animationMode="line2" :tabs="tabs_2" minWidth="187.5" @change="change($event, '1')"/>
		</view>
		<!-- 3 -->
		<view class="title">控制背景追光样式</view>
		<view class="null"></view>
		<view class="box">
			<QSTabs :current="current_1" hasItemBackground itemBackgroundStyle="height:75rpx;width:75rpx;border-radius:50%" animationMode="line2" :tabs="tabs_2" minWidth="187.5" @change="change($event, '1')"/>
		</view>
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
				tip: `	*由hasItemBackground控制是否显示背景追光\n
						*itemBackground可以由itemBackgroundColor控制颜色\n
						*可以由itemBackgroundStyle控制样式\n`,
						
				// 1
				tabs_1: ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6', 'tab-7', 'tab-8'],
				tabs_2: [
					{ name: 'tab-1', backgroundColor: '#bacac6', activeColor: '#eedeb0', itemBackgroundColor: 'rgba(130,130,130,.4)'}, 
					{ name: 'tab-2', backgroundColor: '#fff', activeColor: '#eaff56', itemBackgroundColor: 'rgba(188,230,114, .4)'}, 
					{ name: 'tab-3', backgroundColor: '#ff461f', activeColor: '#70f3ff', itemBackgroundColor: 'rgba(195,33,54, .4)'}, 
					{ name: 'tab-4', backgroundColor: '#ca6924', activeColor: '#7fecad', itemBackgroundColor: 'rgba(131,175,155, .4)'}, 
					{ name: 'tab-5', backgroundColor: '#3d3b4f', activeColor: '#ca6924', itemBackgroundColor: 'rgba(200,200,169, .4)'}, 
					{ name: 'tab-6', backgroundColor: '#f3f9f1', activeColor: '#ffc64b', itemBackgroundColor: 'rgba(249,205,173, .4)'}, 
					{ name: 'tab-7', backgroundColor: '#4c8dae', activeColor: '#c83c23', itemBackgroundColor: 'rgba(199,237,233, .4)'}, 
					{ name: 'tab-8', backgroundColor: '#d6ecf0', activeColor: '#ff8c31', itemBackgroundColor: 'rgba(137,190,178, .4)'}, 
				],
				current_1: 0,
			}
		},
		onLoad() {

		},
		methods: {
			change(index, i) {
				this['current_' + i] = index;
			}
		}
	}
</script>

<style>
</style>
