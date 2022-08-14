<template>
	<view>
		<view class="">
			<text>文本不可选中</text>
		</view>
		<br>
		<view class="">
			<text selectable="true">文本可以选中</text>
		</view>
		<br>
		<view class="box" hover-class="box_active" :hover-start-time="2000" :hover-stay-time="5000">
			这是一个view组件,设置了hover-class按下去的样式类,按住后多久出现点击态hover-start-time="2000",手指松开后点击态保留时间hover-stay-time="5000"
		</view>
		<view class="input_text">
			<input type="text" v-model="msg" />
		</view>
		<view class="">
			<button type="warn" :loading="false">loading按钮</button>
		</view>
		<view class="">
			<button type="warn" plain size="mini">mini镂空按钮</button>
			<button type="warn" size="mini">mini按钮</button>
			<button type="warn" size="mini">mini按钮</button>
		</view>
		<view class="">
			<image
				src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huaban.com%2F31d4ecf35a14b1269b987e1326d1369534b6f6cc4f757-oAIvsv_fw658&refer=http%3A%2F%2Fhbimg.huaban.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663076682&t=97621e70d9fb7fb1902c258bf6ee50c6">
			</image>
			<image
				src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huaban.com%2F31d4ecf35a14b1269b987e1326d1369534b6f6cc4f757-oAIvsv_fw658&refer=http%3A%2F%2Fhbimg.huaban.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663076682&t=97621e70d9fb7fb1902c258bf6ee50c6"
				mode="aspectFit"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '123'
			};
		}
	}
</script>

<style lang="less">
	.box {
		background-color: #bfa;
	}

	.box_active {
		background-color: red;
	}

	.input_text {
		background-color: #bfa;
	}
</style>
