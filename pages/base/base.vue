<template>
	<view class="width100">
		<view class="null"></view>
		<view class="tip">
			<text decode>{{tip}}</text>
		</view>
		
		<view class="title">两项-不滑动</view>
		<!-- 1 -->
		<view class="box">
			<QSTabs :current="current_1" :tabs="tabs_1" minWidth="375" @change="change($event, '1')"/>
		</view>
		
		<view class="null"></view>
		
		<view class="title">三项-不滑动</view>
		<!-- 2 -->
		<view class="box">
			<QSTabs :current="current_1" :tabs="tabs_2" minWidth="250" @change="change($event, '1')"/>
		</view>
		
		<view class="null"></view>
		
		<view class="title">更改主题颜色为#f1505c</view>
		<!-- 3 -->
		<view class="box">
			<QSTabs :current="current_2" :tabs="tabs_2" minWidth="250" activeColor="#f1505c" @change="change($event, '2')"/>
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
				tip: `	*需传入tabs数组\n
						&nbsp;&nbsp;并监听change事件绑定current参数使用\n
						*当所传入的current大于tabs的长度时,取tabs长度-1\n
						*目前QS-tabs使用的单位是rpx\n
						&nbsp;&nbsp;所以width=375时每项占屏幕宽度的一半\n
						&nbsp;&nbsp;当长度总和没有超过scroll-view组件时不会滚动\n
						*width默认为250\n
						*animationMode默认为line1`,
						
				// 1
				tabs_1: [],
				current_1: 0,
				
				// 1
				tabs_2: ['tab-1', 'tab-2', 'tab-3'],
				current_2: 0,
			}
		},
		onLoad() {

		},
		onReady() {
			this.tabs_1 = ['tab-1', 'tab-2']
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
