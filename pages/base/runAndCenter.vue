<template>
	<view class="width100">
		<view class="null"></view>
		<view class="tip">
			<text decode>{{tip}}</text>
		</view>
		
		<view class="title">滚动</view>
		<!-- 1 -->
		<view class="box">
			<QSTabs :current="current_1" :tabs="tabs_1" minWidth="187.5" @change="change($event, '1')"/>
		</view>
		<view class="null"></view>
		<view class="null"></view>
		
		<view class="title">不同的滚动模式</view>
		<view class="null"></view>
		<view class="title">以组件中心为滚动目标: 默认， autoCenterMode不为window</view>
		<!-- 3 -->
		<view class="box">
			<view style="width: 80%;">
				<QSTabs :current="current_3" :tabs="tabs_3" minWidth="187.5" @change="change($event, '3')"/>
			</view>
		</view>
		<view class="null"></view>
		<view class="title">以屏幕中心为滚动目标: autoCenterMode为window</view>
		
		<view class="box">
			<view style="width: 80%;">
				<QSTabs :current="current_3" autoCenterMode="window" :tabs="tabs_3" minWidth="187.5" @change="change($event, '3')"/>
			</view>
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
				tip: `	*QS-tabs是默认滚动的\n
						&nbsp;&nbsp;由autoCenter参数控制是否滚动\n
						*由autoCenterMode参数控制滚动模式\n`,
						
				// 1
				tabs_1: ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6', 'tab-7', 'tab-8'],
				current_1: 0,
				
				// 2
				tabs_2: ['tab-1', 'tab-2', 'tab-3'],
				current_2: 0,
				
				// 3
				tabs_3: ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6', 'tab-7', 'tab-8'],
				current_3: 0,
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
