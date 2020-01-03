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
			<QSTabs :current="current_1" backgroundColor="#bacac6" activeColor="#eedeb0" animationMode="line2" :tabs="tabs_1" minWidth="187.5" @change="change($event, '1')"/>
		</view>
		<!-- 1 -->
		<view class="title">tabs中控制背景颜色与主题颜色</view>
		<view class="null"></view>
		<view class="box">
			<QSTabs :current="current_1" animationMode="line2" :tabs="tabs_2" minWidth="187.5" @change="change($event, '1')"/>
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
				tip: `	*由backgroundColor控制背景颜色\n
						&nbsp;&nbsp;也可以由tabs每一项中的backgroundColor控制过渡背景颜色\n
						&nbsp;&nbsp;默认rgba(255,255,255,0)\n
						*由activeColor控制主题颜色\n
						由defaultColor控制未选中项的主题颜色\n*`,
						
				// 1
				tabs_1: ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6', 'tab-7', 'tab-8'],
				tabs_2: [
					{ name: 'tab-1', backgroundColor: '#000', activeColor: '#fff'}, 
					{ name: 'tab-2', backgroundColor: '#fff', activeColor: '#eaff56'}, 
					{ name: 'tab-3', backgroundColor: '#ff461f', activeColor: '#70f3ff'}, 
					{ name: 'tab-4', backgroundColor: '#ca6924', activeColor: '#7fecad'}, 
					{ name: 'tab-5', backgroundColor: '#3d3b4f', activeColor: '#ca6924'}, 
					{ name: 'tab-6', backgroundColor: '#f3f9f1', activeColor: '#ffc64b'}, 
					{ name: 'tab-7', backgroundColor: '#ed5736', activeColor: '#1685a9'}, 
					{ name: 'tab-8', backgroundColor: '#d6ecf0', activeColor: '#ff8c31'}, 
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
