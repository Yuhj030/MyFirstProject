<template>
	<view class="content">
		<!-- ulistMedia代码片段 -->
		<view class="uni-list">
			<view
			 class="uni-list-cell"
			 hover-class="uni-list-cell-hover"
			 v-for="(item,index) in news" 
			 :key="index" @tap="openInfo" 
			 :data-newsId="item.post_id"
			  >
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: []
			}
		},
		onLoad() {
			// ureq代码块
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.news = res.data
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openInfo(e) {
				// unav代码块
				uni.navigateTo({
					// url携带参数?key=value，多个用&隔开
					url: `../info/info?newsId=${e.currentTarget.dataset.newsid}`
				});
			}
		}
	}
</script>

<style>
	.uni-media-list-body {
		height: auto;
	}
	.uni-media-list-text-top {
		line-height: 1.6em;
	}
</style>
