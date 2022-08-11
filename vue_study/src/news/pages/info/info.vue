<template>
	<view>
		info
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(e) {
			console.log(e);
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.newsId,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>

</style>
