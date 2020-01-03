<template>
	<view>
		<view class="QS-tabs-box">
			<QSTabs 
			ref="tabs" 
			:tabs="tabs" 
			animationMode="line3" 
			:current="current" 
			@change="change"
			activeColor="#adadad"
			lineColor="#f1505c"
			swiperWidth="750">
			</QSTabs>
		</view>
		<swiper 
		:style="{'height': '1200rpx'}" 
		:current="swiperCurrent" 
		@transition="transition"
		@animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" >
					<view class="scroll-items">
						<view class="scroll-item" v-for="(ite, ind) in 30" :key="ind">
							<view class="scroll-item-image-box">
								<image src="/static/img.jpg" mode="aspectFill" class="scroll-item-image"></image>
							</view>
							<view class="scroll-item-text-box">
								<view>
									小调皮
								</view>
								<view>
									真可爱
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import QSTabs from '../../../components/QS-tabs/QS-tabs.vue';
	const Sys = uni.getSystemInfoSync();
	const wH = Sys.windowHeight;
	let n = 1;
	const tabs = Array(10).fill('').map(()=> 'tab' + Array(n).fill('s').join('') + n++);
	export default {
		components: {
			QSTabs
		},
		data() {
			return {
				tabs:[...tabs],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0
			}
		},
		methods: {
			change(index) {
				this.swiperCurrent = index;
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({detail: { current }}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	}
</script>

<style scoped>
	.QS-tabs-box{
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: white;
	}
	.swiper-item{
		background-color: #fff;
	}
	.scroll-items{
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 40rpx;
	}
	.scroll-item{
		margin-top: 15rpx;
		padding: 25rpx;
		background-color: white;
		border-radius: 8rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		border: 1px solid #f8f8f8;
	}
	.scroll-item-image-box{
		flex-grow: 0;
	}
	.scroll-item-text-box{
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: bold;
		margin-left: 15rpx;
	}
	.scroll-item-image{
		border-radius: 4rpx;
		width: 180rpx;
		height: 150rpx;
	}
</style>
