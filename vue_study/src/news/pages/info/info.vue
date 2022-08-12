<template>
	<view>
		<view class="container">
			<view class="title">{{title}}</view>
			<view class="art_container">
				<rich-text :nodes="string"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				string: ''
			}
		},
		methods: {
			
		},
		onLoad(e) {
			console.log(e);
			uni.showLoading({
				title: '加载中...',
				mask: false
			});
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.newsId,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.title = res.data.title
					this.string = res.data.content
					uni.hideLoading()
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style lang="less">
	.container {
		padding: 10upx 2%;
		width: 96%;
		flex-wrap: wrap;
		.title {
			line-height: 2em;
			font-weight: 700;
			font-size: 38upx;
		}
		.art_container {
			line-height: 2em;
		}
		
	}
</style>
