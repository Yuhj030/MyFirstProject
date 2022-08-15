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
		},
		onError:function(err){
			// 把onShow生命周期函数中的console-->consol可以触发
			console.log('出现错误啦', err);
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	@import url('./static/fonts/iconfont.css');
</style>
