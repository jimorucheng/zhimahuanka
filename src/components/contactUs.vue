<template>
	<div data-v-419267d0="" class="contact-page page-content contactUs">
		<div class="mapbox">
			<div class="content">
				<a href="https://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D福建省厦门片区象屿路97号厦门国际航运中心D栋" target="_blank">
					<div id="dituContent"></div>
				</a>
			</div>
		</div>
		<div class="content msg-show">
			<p class="title-one">联系我们</p>
			<p class="title-two">联系电话：13366545203</p>
			<p class="title-three">地址：福建省厦门片区象屿路97号厦门国际航运中心D栋</p>
			<div class="space-34"></div>
			<p class="title-two">客户热线：176-0011-3919</p>
			<p class="title-three">邮箱：lcz@yiqiwork.com</p>
			<p class="title-three">微信服务号：焦点巴巴金融</p>
			<!--<div class="space-34"></div>
			<p class="title-two">媒体公关</p>
			<p class="title-three">官方微信公众号：60秒借来借去</p>-->
		</div>
	</div>
</template>
<script>
	export default {
		name: 'contactUs',
		data() {
			return {

			}
		},
		methods: {
            
		}
	}
</script>
<style scoped='scoped'>
	.page-content[data-v-419267d0] {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: 100%;
		width: 100%;
		background: #f9fafb;
		overflow-x: hidden;
	}
	
	.content {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	@media screen and (min-width: 769px) {
		.contact-page {
			width: 100%;
			padding-top: 60px;
		}
		.contact-page .mapbox {
			width: 100%;
			height: 320px;
			margin: 0 auto;
			position: relative;
		}
		.contact-page .mapbox #dituContent {
			width: 100%;
			height: 320px;
			background-image: url('http://img.xindaikuangren.com/15619724640701.jpg');
			background-repeat: no-repeat;
			background-position: 50%;
			background-size: auto 100%;
		}
		.contact-page .msg-show {
			background: #fff;
			padding-bottom: 104px;
		}
		.contact-page .title-one {
			padding: 94px 98px 34px;
			font-size: 42px;
			line-height: 54px;
			color: #000;
		}
		.contact-page .title-two {
			padding: 0 98px 14px;
			font-size: 26px;
			line-height: 42px;
			color: #3f3f3f;
		}
		.contact-page .title-three {
			padding: 0 98px;
			font-size: 16px;
			line-height: 24px;
		}
		.contact-page .space-34 {
			width: 100%;
			height: 34px;
		}
	}
</style>