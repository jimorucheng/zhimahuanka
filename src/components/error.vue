<template>
	<div class="error-page page-content error" data-v-f418cc52="" data-v-f774ee1a="">
		<div class="box" data-v-f418cc52="">
			<div class="icon" data-v-f418cc52=""></div>
			<div class="msg" data-v-f418cc52="">
				<h4 data-v-f418cc52="">Sorry</h4>
				<p data-v-f418cc52="">对不起，您访问的页面不存在！<br data-v-f418cc52=""> 你可以
					<router-link to="/" tag='a' class="error-link nuxt-link-active" data-v-f418cc52="">返回首页</router-link>
				</p>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'error',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>
<style scoped='scoped'>
	.error-page[data-v-f418cc52] {
		background-color: #fff;
		-webkit-box-shadow: 0 0 40px 2px #ece9e9 inset;
		box-shadow: inset 0 0 40px 2px #ece9e9;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		height: 100%;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.page-content[data-v-f774ee1a] {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: 100%;
		width: 100%;
		background: #f9fafb;
	}
	
	.error-page .icon[data-v-f418cc52] {
		background-image: url(http://img.xindaikuangren.com/404.0135103.png);
		background-size: 100%;
		background-position: 50%;
		background-repeat: no-repeat;
	}
	
	.error-page .msg[data-v-f418cc52] {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
	}
	
	.error-page .msg h4[data-v-f418cc52] {
		line-height: 40px;
		color: #000;
		font-size: 24px;
	}
	
	h4 {
		font-style: normal;
		font-weight: 400;
	}
	
	.error-page .msg p[data-v-f418cc52] {
		color: #9f9f9f;
		font-size: 12px;
		line-height: 36px;
	}
	
	.error-page .msg p a[data-v-f418cc52] {
		width: 92px;
		line-height: 24px;
		height: 24px;
		border-radius: 4px;
		background: #ed5a50;
		font-size: 12px;
		color: #fff;
		padding: 0 18px;
		margin-left: 6px;
		display: inline-block;
		vertical-align: middle;
	}
	
	@media screen and (min-width: 769px) {
		.error-page .box[data-v-f418cc52] {
			height: 264px;
			width: 600px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			background-image: url(http://img.xindaikuangren.com/404_bg.7f070c6.png);
			background-position: 100%;
			background-repeat: no-repeat;
			background-size: 260px 260px;
		}
		.error-page .icon[data-v-f418cc52] {
			width: 264px;
			height: 264px;
		}
		.error-page .msg[data-v-f418cc52] {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			text-align: center;
		}
		.error-page .msg h4[data-v-f418cc52] {
			line-height: 40px;
			color: #000;
			font-size: 24px;
		}
		.error-page .msg p[data-v-f418cc52] {
			color: #9f9f9f;
			font-size: 12px;
			line-height: 36px;
		}
		.error-page .msg p a[data-v-f418cc52] {
			width: 92px;
			line-height: 24px;
			height: 24px;
			border-radius: 4px;
			background: #ed5a50;
			font-size: 12px;
			color: #fff;
			padding: 0 18px;
			margin-left: 6px;
			display: inline-block;
			vertical-align: middle;
		}
	}
</style>