<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	::-webkit-scrollbar {
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}
	/*每个页面公共css */
	view, text{
		box-sizing: border-box;
	}
	.width100 {
		width: 100%;
	}
	.title{
		color: #999;
		font-size: 30rpx;
		font-weight: bold;padding: 15rpx;
		padding: 40rpx;
	}
	.tip{
		color: #adadad;
		font-size: 28rpx;
		padding: 30rpx;
	}
	.null{
		height: 30rpx;
		width: 100%;
	}
	page{
		background: #FCFCFC;
	}
	.defaultFontSize{
		font-size: 3vw;
	}
	.itemStyle{
		margin: 2vw 3vw;
		padding: 2vw 3vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #FFF;
		border-radius: 4px;
		color: #666;
		font-size: 4vw;
	}
	.active:active {
		background-color: #F2F2F2;
	}
	.box{
		border-top: 1px solid #f8f8f8;
		border-bottom: 1px solid #f8f8f8;
		width: 100%;
	}
</style>
