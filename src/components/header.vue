<template>
	<div class="headBox" style="width: 100%;position: fixed;top: 0;left: 0;z-index: 100;">
		<div class="content">
			<el-row>
				<el-col :span="6">
					<div class="logo">
						<router-link to='/' class="nuxt-link-active">
							<img src="http://img.xindaikuangren.com/login0702.png">
						</router-link>
					</div>
				</el-col>
				<el-col :span="12">
					<!--<ul>
						<li :class="{ 'isActiveA': isA, 'isActiveB': ''}" @click="changeColor(1)">首页</li>
						<li :class="{ 'isActiveA': isA2, 'isActiveB': ''}" @click="changeColor(2)">产品</li>
						<li :class="{ 'isActiveA': isA3, 'isActiveB': ''}" class="aboutBox" style="height: 80px;">
							关于我们
							<ul class="box1">
								<li @click="changeColor(3)">公司简介</li>
								<li @click="changeColor(6)">媒体报道</li>
								<li @click="changeColor(7)">联系我们</li>
							</ul>
						</li>
						<li :class="{ 'isActiveA': isA4, 'isActiveB': ''}" @click="changeColor(4)">加入我们</li>
						<li :class="{ 'isActiveA': isA5, 'isActiveB': ''}" @click="changeColor(5)">咨询服务</li>
					</ul>-->
					<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" text-color="black" active-text-color="red" @select="handleSelect" router>
						<el-menu-item index="/">首页</el-menu-item>
						<el-menu-item index="/product">产品</el-menu-item>						
						<el-submenu index="/aboutUs">
							<template slot="title">关于我们</template>
							<el-menu-item index="/companyProfile">公司简介</el-menu-item>
							<el-menu-item index="/mediaReport">信用卡咨讯</el-menu-item>
							<el-menu-item index="/contactUs">联系我们</el-menu-item>					
						</el-submenu>
						<el-menu-item index="/joinUs">加入我们</el-menu-item>
						<el-menu-item index="/consultingService">咨讯服务</el-menu-item>						
					</el-menu>
				</el-col>
				<el-col :span="6">
					<ul data-v-45f35e6e="" class="tool">
						<li data-v-45f35e6e="">
							<a data-v-45f35e6e="" class="nav">微信</a>
							<div data-v-45f35e6e="" class="sub">
								<div data-v-45f35e6e="" class="code">
									<h4 data-v-45f35e6e="">扫码关注金融服务号</h4><img data-v-45f35e6e="" src="http://img.xindaikuangren.com/zmhkewm0702.jpg" alt=""></div>
							</div>
						</li>
						<!--<li data-v-45f35e6e="">
							<a data-v-45f35e6e="" class="nav">下载APP</a>
							<div data-v-45f35e6e="" class="sub">
								<div data-v-45f35e6e="" class="code">
									<h4 data-v-45f35e6e="">扫码下载还卡APP</h4>
									<div data-v-8fe6e6f4="" data-v-45f35e6e="" class="qr">
										<div data-v-8fe6e6f4=""><img id="416f55f8-aad5-45ff-bcbf-576df29672ca" src="http://img.xindaikuangren.com/loadingAPP0702.png"></div>
									</div>
								</div>
							</div>
						</li>-->
					</ul>
				</el-col>
			</el-row>

		</div>

	</div>
</template>
<script>
	export default {
		name: 'headBox',
		data() {
			return {
				isA: true,
				isA2: false,
				isA3: false,
				isA4: false,
				isA5: false,
				activeIndex: '1',
			}
		},
		methods: {
			changeColor(sum) {
				if(sum == 1) {
					this.isA = true;
					this.isA2 = false;
					this.isA3 = false;
					this.isA4 = false;
					this.isA5 = false;
					this.$router.push({
						path: '/'
					});
				}
				if(sum == 2) {
					this.isA = false;
					this.isA2 = true;
					this.isA3 = false;
					this.isA4 = false;
					this.isA5 = false;
					this.$router.push({
						path: '/product'
					});
				}
				if(sum == 3) {
					this.isA = false;
					this.isA2 = false;
					this.isA3 = true;
					this.isA4 = false;
					this.isA5 = false;
					this.$router.push({
						path: '/companyProfile'
					});
				}
				if(sum == 4) {
					this.isA = false;
					this.isA2 = false;
					this.isA3 = false;
					this.isA4 = true;
					this.isA5 = false;
					this.$router.push({
						path: '/joinUs'
					});
				}
				if(sum == 5) {
					this.isA = false;
					this.isA2 = false;
					this.isA3 = false;
					this.isA4 = false;
					this.isA5 = true;
					this.$router.push({
						path: '/consultingService'
					});
				}
				if(sum == 6) {
					this.isA = false;
					this.isA2 = false;
					this.isA3 = true;
					this.isA4 = false;
					this.isA5 = false;
					this.$router.push({
						path: '/mediaReport'
					});
				}
				if(sum == 7) {
					this.isA = false;
					this.isA2 = false;
					this.isA3 = true;
					this.isA4 = false;
					this.isA5 = false;
					this.$router.push({
						path: '/contactUs'
					});
				}
			},
			handleSelect(key, keyPath) {
		       // console.log(key, keyPath);
		    }
		},
		watch: {
			$route(to, from) {
				//console.log(to);
				//console.log(from);
			}
		}
	}
</script>
<style type="text/css">
	.el-menu--horizontal>.el-menu-item{
    	height: 80px!important;
    	line-height: 80px!important;
    	border: none!important;
    }
    .el-submenu__title {
    	height: 80px !important;
    	line-height: 80px !important;
    	font-size: 16px !important;
    }
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
		border-bottom: none !important;
		color: #303133;
		border-bottom-color: transparent!important;
	}
	.el-submenu__title i {
		color:black;
	}
	.el-menu--horizontal .el-menu .el-menu-item.is-active,
	.el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
		color: red;
		border: none;
		border-bottom-color: transparent;
	}
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
	.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
		outline: none;
		color: #303133;
		border-bottom-color: transparent;
	}
	.el-menu--horizontal>.el-menu-item.is-active {
		border-bottom: none;
		color:red;
		border-bottom-color: transparent;
	}
    .el-submenu .is-active div{
    	border-bottom-color: transparent;
    }
</style>
<style scoped='scoped'>
	.headBox {
		height: 80px;
		background: #fff;
		box-shadow: 0 0 4px 1px #e4e4e4;
	}
	.content {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.el-row {
		height: 80px;
		color: #fff;
	}
	
	.logo {
		padding: 18px 0;
		max-width: 20%;
		width: 20%;
		height: 80px;
		min-width: 244px;
	}
	
	.logo a {
		display: block;
		height: 100%;
	}
	
	.logo img {
		max-height: 100%;
	}
	
	ul li {
		display: inline-block;
		height: 80px;
		font-size: 16px;
		color: black;
	}
	
	ul li {
		padding: 0 24px 0 24px;
		line-height: 80px;
		cursor: pointer;
	}
	
	ul li:hover,
	.router-link-exact-active {
		color: red;
	}
	
	.isActiveA {
		color: red;
	}
	
	.isActiveB {}
	
	.aboutBox {}
	
	.box1 {
		position: absolute;
		height: 150px;
		background: #fff;
		width: 100px;
		z-index: 10;
		box-shadow: 0 0 4px 1px #e4e4e4;
		text-align: center;
		top: 78px;
		left: 482px;
		display: none;
	}
	
	.box1 li {
		display: block;
		height: 50px;
		line-height: 50px;
		padding: 0;
	}
	
	.aboutBox:hover .box1 {
		display: block;
	}
	
	.box1:hover {
		display: block;
	}
	
	.tool a[data-v-45f35e6e] {
		display: block;
		cursor: pointer;
		color: #000
	}
	
	.tool[data-v-45f35e6e] {
		font-size: 0;
		line-height: 0;
		height: 80px
	}
	
	.tool>li[data-v-45f35e6e] {
		display: inline-block;
		vertical-align: top;
		height: 100%;
		position: relative;
		font-size: 15px;
		color: #000
	}
	
	.tool .nav[data-v-45f35e6e] {
		position: relative;
		z-index: 100;
		background: #fff;
		padding: 0 6px;
		line-height: 80px;
		color: #000
	}
	
	.tool .sub[data-v-45f35e6e] {
		position: absolute;
		z-index: 99;
		top: 80px;
		left: 50%;
		padding-top: 10px;
		display: none;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%)
	}
	
	.tool .sub .code[data-v-45f35e6e] {
		padding: 18px;
		background: #fff;
		position: relative;
		width: 172px;
		-webkit-box-shadow: 0 0 20px 1px hsla(0, 0%, 76%, .24);
		box-shadow: 0 0 20px 1px hsla(0, 0%, 76%, .24)
	}
	
	.tool .sub .code[data-v-45f35e6e]:before {
		content: "";
		position: absolute;
		top: -4px;
		left: 50%;
		margin-left: -6px;
		width: 0;
		height: 0;
		border-left: 6px solid hsla(0, 0%, 100%, 0);
		border-right: 6px solid hsla(0, 0%, 100%, 0);
		border-bottom: 4px solid #fff
	}
	
	.tool .sub .code h4[data-v-45f35e6e] {
		font-size: 14px;
		color: #000;
		padding-bottom: 12px;
		line-height: 16px;
		text-align: center
	}
	
	.tool .sub .code[data-v-45f35e6e] img {
		width: 100%;
		width: 136px
	}
	
	.tool li:hover .nav[data-v-45f35e6e] {
		color: red;
	}
	
	.tool li:hover>.sub[data-v-45f35e6e] {
		display: block
	}
	
	.tool .tel[data-v-45f35e6e] {
		padding-left: 38px;
		position: relative;
		line-height: 80px
	}
	
	.tool .tel[data-v-45f35e6e]:before {
		width: 1px;
		height: 15px;
		position: absolute;
		top: 50%;
		margin-top: -7px;
		left: 19px;
		content: " ";
		display: block;
		background: #000
	}
</style>