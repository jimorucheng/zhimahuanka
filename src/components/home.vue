<template>
	<div class="home">
		<div data-v-1b011d9c="" data-v-419267d0="" class="index-page page-content">
			<div style="width: 100%;height: 560px;">
				<a href="#" style="width: 100%;"> <img src="http://img.xindaikuangren.com/banner0702.png" style="height: 100%;width: 100%;" /></a>
			</div>
			<div data-v-1b011d9c="" class="moudle">
				<div data-v-1b011d9c="" class="content">
					<div data-v-10054e8f="" data-v-1b011d9c="" class="title">
						<h3 data-v-10054e8f="">芝麻还卡</h3>
						<p data-v-10054e8f="">行业领先的信用卡管理APP，金融综合服务平台</p>
					</div>
					<div data-v-ee081b54="" data-v-1b011d9c="" class="features">
						<div data-v-ee081b54="" class="features-show"><img data-v-ee081b54="" src="http://img.xindaikuangren.com/zmhkList.png" alt="芝麻还卡" class="img-0 img0" style="transition-delay: 0ms;display: none;"><img data-v-ee081b54="" src="http://img.xindaikuangren.com/zmhkMessage.png" alt="芝麻还卡" class="img-1 img1" style="transition-delay: 300ms;display: none; "><img data-v-ee081b54="" src="http://img.xindaikuangren.com/zmhkHome.png" alt="芝麻还卡" class="img-2 img2" style="transition-delay: 500ms; display: none;"></div>
						<div data-v-ee081b54="" class="features-detail">
							<ul data-v-ee081b54="" class="group.features">
								<li data-v-ee081b54=""><img data-v-ee081b54="" src="http://img.xindaikuangren.com/search0701.png" alt="">
									<h4 data-v-ee081b54="">信用卡查询</h4>
									<p data-v-ee081b54="">全国信用卡一键查询</p>
								</li>
								<li data-v-ee081b54=""><img data-v-ee081b54="" src="http://img.xindaikuangren.com/ban0701.png" alt="">
									<h4 data-v-ee081b54="">办卡申请</h4>
									<p data-v-ee081b54="">足不出户纯在线办卡</p>
								</li>
								<li data-v-ee081b54=""><img />
									<h4 data-v-ee081b54=""></h4>
									<p data-v-ee081b54=""></p>
								</li>
								<li data-v-ee081b54=""><img />
									<h4 data-v-ee081b54=""></h4>
									<p data-v-ee081b54=""></p>
								</li>
							</ul>
							<div data-v-ee081b54="" class="max-show">
								<div data-v-ee081b54="" class="detail-quick">
									<router-link data-v-ee081b54="" class="button-detail" to="/product" style="border:2px solid rgba(255,73,61,1);color:rgba(255,73,61,1);">查看详情</router-link>									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div data-v-1b011d9c="" class="moudle">
				<div data-v-1b011d9c="" class="content news">
					<div data-v-1b011d9c="" class="title">
						<h4 data-v-1b011d9c="">信用卡咨询</h4>
						<p data-v-1b011d9c="">
							<router-link to='/mediaReport' data-v-1b011d9c="" class='lookMore'>查看更多》</router-link>
						</p>
					</div>
					<div data-v-1b011d9c="" class="news-content">
						<div data-v-1b011d9c="" class="news-swiper swiper-container swiper-container-horizontal">
							<div data-v-1b011d9c="" class="swiper-wrapper  mediaReport" style="transform: translate3d(-1200px, 0px, 0px);">
								<div data-v-1b011d9c="" class="swiper-slide news-slide swiper-slide-active" :data-swiper-slide-index="index" style="width: 400px;"  v-for="(item,index) in listArr">
									<router-link data-v-1b011d9c="" :to="'/massageDetail/1/'+item.id+'/4'" target="_blank">
										<div data-v-1b011d9c="" class="box">
											<div data-v-1b011d9c="" class="img"><img data-v-1b011d9c="" :src="item.aimage.icon[0]"></div>
											<div data-v-1b011d9c="" class="info">
												<h4 data-v-1b011d9c="">{{item.atitle}}</h4>
												<p data-v-1b011d9c="">{{item.rnum}}人阅读   &nbsp;&nbsp;丨 &nbsp;&nbsp;{{item.atime}}</p>
											</div>
										</div>
									</router-link>
								</div>								
							<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
							</div>
						</div>	
						<div data-v-1b011d9c="" class="next" @click="nextStep1()"><span data-v-1b011d9c="">NEXT</span></div>
						<div data-v-1b011d9c="" class="prev" @click="prevStep1()"><span data-v-1b011d9c="">BACK</span></div>
					</div>
				</div>
			</div>
			<div data-v-1b011d9c="" class="moudle">
				<div data-v-1b011d9c="" class="content news">
					<div data-v-1b011d9c="" class="title">
						<h4 data-v-1b011d9c="">最新资讯</h4>
						<p data-v-1b011d9c="">
							<router-link to='/consultingService' data-v-1b011d9c="" class='lookMore'>查看更多》</router-link>
						</p>
					</div>
					<div data-v-1b011d9c="" class="news-content">
						<div data-v-1b011d9c="" class="news-swiper swiper-container swiper-container-horizontal">
							<div data-v-1b011d9c="" class="swiper-wrapper newsReport" style="transform: translate3d(-1200px, 0px, 0px);">
                                <div data-v-1b011d9c="" class="swiper-slide news-slide swiper-slide-active" :data-swiper-slide-index="index" style="width: 400px;" v-for="(item,index) in daikuanArr">
									<router-link data-v-1b011d9c="" :to="'/massageDetail/2/'+item.id+'/1'" target="_blank">
										<div data-v-1b011d9c="" class="box">
											<div data-v-1b011d9c="" class="img"><img data-v-1b011d9c="" :src="item.aimage.icon[0]"></div>
											<div data-v-1b011d9c="" class="info">
												<h4 data-v-1b011d9c="">{{item.atitle}}</h4>
												<p data-v-1b011d9c="">{{item.rnum}}人阅读   &nbsp;&nbsp; 丨&nbsp;&nbsp;{{item.atime}}</p>
											</div>
										</div>
									</router-link>
								</div>							
							<!--</div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>-->
							</div>
						</div>	
						<div data-v-1b011d9c="" class="next next1" @click="nextStep2()"><span data-v-1b011d9c="">NEXT</span></div>
						<div data-v-1b011d9c="" class="prev prev1" @click="prevStep2()"><span data-v-1b011d9c="">BACK</span></div>
					</div>
				</div>
			</div>
			<div data-v-1b011d9c="" class="moudle">
				<div data-v-26d14ffe="" data-v-1b011d9c="" class="partner">
					<div data-v-26d14ffe="" class="content">
						<div data-v-26d14ffe="" class="title">
							<h4 data-v-26d14ffe="">合作伙伴</h4>
							<p data-v-26d14ffe="">构筑开放平台，赋能金融生态</p>
						</div>
						<div data-v-26d14ffe="" class="partner-logo"><img data-v-26d14ffe="" src="http://img.xindaikuangren.com/zhimahuahuaka_hezuojigou.png" class="max-show"></div>
					</div>
				</div>
				<div data-v-3af19f46="" data-v-1b011d9c="" class="down-tool type-2">
					<div data-v-3af19f46="" class="close"><span data-v-3af19f46=""></span></div><img data-v-3af19f46="" src="../assets/img/gjj.c5b27eb.png" class="logo">
					<div data-v-3af19f46="" class="center">
						<h4 data-v-3af19f46="">51公积金管家</h4>
						<p data-v-3af19f46="">全国公积金一键查询</p>
					</div>
					<a data-v-3af19f46="" class="button">立即下载</a>
				</div>
				<div data-v-1b011d9c="" class="gotTop" @click="gotoTop()"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'home',
		created(){
			this.getHomeListDate();
			this.getHomeDaikuanDate();
		},
		data() {
			return {
				slideIndex: 3,
				slideIndex1: 3,
				listArr:[],
				daikuanArr:[],
				animateLength:0,
				animateLength1:0
			}
		},
		methods: {			
			gotoTop() {
				event.preventDefault();
				jQuery('html,body').animate({
					scrollTop: '0px'
				}, 1200);
			},
			nextStep1() {
				this.slideIndex++;
				if(this.slideIndex < ( this.listArr.length - 2)) {
					this.animateLength = this.slideIndex * (-400);
					$(".mediaReport").css({
						"transition-duration": "300ms",
						"transform": "translate3d(" + this.animateLength + "px, 0px, 0px)"					
					})
				}else{
					this.animateLength = '-1200';
					this.slideIndex = 3;
					$(".mediaReport").css({
						"transform": "translate3d(" + this.animateLength + "px, 0px, 0px)",
						"transition-duration": "0ms",						
					})
				}				
			},
			prevStep1() {
				this.slideIndex--;				
				if(this.slideIndex < 0) {
					this.animateLength = (this.listArr.length - 3) * (-400);
					this.slideIndex = (this.listArr.length - 3);
					$(".mediaReport").css({
						"transition-duration": "0ms"
					})
				} else {
					this.animateLength = this.slideIndex * (-400);
					$(".mediaReport").css({
						"transition-duration": "300ms"
					})
				}
				$(".mediaReport").css({
					"transform": "translate3d(" + this.animateLength + "px, 0px, 0px)",
				})
			},
			nextStep2() {
				this.slideIndex1++;
				if(this.slideIndex1 < (this.daikuanArr.length - 2)) {
					this.animateLength1 = this.slideIndex1 * (-400);
					$(".newsReport").css({
						"transition-duration": "300ms",
						"transform": "translate3d(" + this.animateLength1 + "px, 0px, 0px)"					
					})
				} else {
					this.animateLength1 = '0';
					this.slideIndex1 = 0;
					$(".newsReport").css({
						"transform": "translate3d(" + this.animateLength1 + "px, 0px, 0px)",
						"transition-duration": "0ms",						
					})
				}
			},
			prevStep2() {
				this.slideIndex1--;
				if(this.slideIndex1 < 0) {
					this.animateLength1 = (this.daikuanArr.length - 3) * (-400);
					this.slideIndex1 = (this.daikuanArr.length - 3);
					$(".newsReport").css({
						"transition-duration": "0ms"
					})
				} else {
					this.animateLength1 = this.slideIndex1 * (-400);
					$(".newsReport").css({
						"transition-duration": "300ms"
					})
				}
				$(".newsReport").css({
					"transform": "translate3d(" + this.animateLength1 + "px, 0px, 0px)",
				})
			},
			getHomeListDate(){	
			  var _this = this;
			  $.ajax({
			   	type:"post",
			   	url:"http://ex.xindaikuangren.com/index/article/shouList",
			   	data:{atype:'4'},
			   	success:function(res){
			   		if(res.code == 200){
			   			_this.listArr = res.data;
			   		}
			   	},
			   	error:function(err){
			   		console.log(err)
			   	}
			   });
			},
			/*getHomeListDate(){	
				 this.axios.post('http://ex.xindaikuangren.com/index/article/shouList', {atype:'4'})
				  .then(res => {
				    //console.log(res)
				    if(res.data.code == 200){
				    	this.listArr = res.data.data;
				    }
				  }, res => {
				    console.log(res)
				  })
			},*/
			getHomeDaikuanDate(){	
			  var _this = this;
			  $.ajax({
			   	type:"post",
			   	url:"http://ex.xindaikuangren.com/index/article/shouList",
			   	data:{atype:'1'},
			   	success:function(res){
			   		if(res.code == 200){
			   			_this.daikuanArr = res.data;
			   		}
			   	},
			   	error:function(err){
			   		console.log(err)
			   	}
			   });
			}
		}
	}
</script>
<style scoped='scoped'>
	@import '../assets/css/animate.css';
	@import '../assets/css/product.css';
	#__layout,
	#__nuxt {
		min-height: 100%;
		width: 100%
	}
	
	.content {
		max-width: 1200px;
		margin: 0 auto
	}
	
	@media screen and (min-width:769px) {
		.max-show {
			display: block!important
		}
		.min-show {
			display: none!important
		}
	}
	
	@media only screen and (max-width:768px) {
		.min-show {
			display: block!important
		}
		.max-show {
			display: none!important
		}
	}
	
	@media only screen and (min-width:768px) and (max-width:1200px) {
		.content {
			padding: 0 24px
		}
	}
	
	.nuxt-progress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		width: 0;
		-webkit-transition: width .2s, opacity .4s;
		transition: width .2s, opacity .4s;
		opacity: 1;
		background-color: #efc14e;
		z-index: 999999
	}
	
	.page-view[ data-v-f774ee1a] {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		min-height: 100%
	}
	
	.page-content[data-v-f774ee1a] {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: 100%;
		width: 100%;
		background: #f9fafb
	}
	
	.news-detail[data-v-1d3b09fb] {
		background: #fff
	}
	
	.info[data-v-1d3b09fb] img {
		max-width: 100%
	}
	
	@media screen and (min-width:769px) {
		.crumbs[data-v-1d3b09fb] {
			font-size: 14px;
			color: #999;
			padding-top: 48px;
			padding-bottom: 24px
		}
		.crumbs em[data-v-1d3b09fb] {
			font-style: normal;
			color: #444
		}
		.main[data-v-1d3b09fb] {
			position: relative;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex
		}
		.code[data-v-1d3b09fb] {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			text-align: center;
			max-width: 390px
		}
		.code ul[data-v-1d3b09fb] {
			margin: 0 auto;
			display: inline-block;
			vertical-align: top
		}
		.code li[data-v-1d3b09fb] {
			margin-bottom: 56px
		}
		.code li h4[data-v-1d3b09fb] {
			color: #666;
			font-size: 14px;
			line-height: 20px;
			padding-bottom: 12px
		}
		.code li[data-v-1d3b09fb] img {
			width: 120px;
			margin: 0 auto
		}
		.article[data-v-1d3b09fb] {
			max-width: 810px;
			padding-bottom: 20px
		}
		.title[data-v-1d3b09fb] {
			font-size: 36px;
			color: #404040;
			line-height: 48px;
			padding-bottom: 54px
		}
		.bar[data-v-1d3b09fb] {
			height: 44px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			margin-bottom: 20px
		}
		.bar .thumb[data-v-1d3b09fb] {
			width: 40px;
			height: 40px
		}
		.bar .author[data-v-1d3b09fb] {
			padding-left: 10px;
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1
		}
		.bar .author h5[data-v-1d3b09fb],
		.bar .author p[data-v-1d3b09fb] {
			font-size: 14px;
			color: #666
		}
		.bar .share[data-v-1d3b09fb] {
			height: 44px
		}
		.bar .share .icon[data-v-1d3b09fb],
		.bar .share .text[data-v-1d3b09fb] {
			position: relative;
			display: inline-block;
			vertical-align: top;
			height: 44px;
			margin: 0 10px;
			line-height: 44px
		}
		.bar .share .text[data-v-1d3b09fb] {
			margin: 0;
			padding-right: 8px;
			color: #666;
			font-size: 14px
		}
		.bar .share .icon[data-v-1d3b09fb] {
			cursor: pointer
		}
		.bar .share .sub[data-v-1d3b09fb] {
			position: absolute;
			z-index: 99;
			top: 0;
			right: 60px;
			display: none
		}
		.bar .share .sub .code[data-v-1d3b09fb] {
			padding: 18px;
			width: 156px;
			background: #fff;
			position: relative;
			-webkit-box-shadow: 0 0 20px 1px hsla(0, 0%, 76%, .24);
			box-shadow: 0 0 20px 1px hsla(0, 0%, 76%, .24)
		}
		.bar .share .sub .code[data-v-1d3b09fb]:before {
			content: "";
			position: absolute;
			top: 16px;
			right: -4px;
			width: 0;
			height: 0;
			border-top: 6px solid hsla(0, 0%, 100%, 0);
			border-bottom: 6px solid hsla(0, 0%, 100%, 0);
			border-left: 5px solid #fff
		}
		.bar .share .sub .code h4[data-v-1d3b09fb] {
			font-size: 14px;
			color: #000;
			padding-bottom: 12px;
			line-height: 16px;
			white-space: nowrap
		}
		.bar .share .sub .code img[data-v-1d3b09fb] {
			width: 100%
		}
		.bar .share .icon:hover .sub[data-v-1d3b09fb] {
			display: block
		}
		.info[data-v-1d3b09fb] {
			padding: 8px;
			color: #444;
			font-size: 18px;
			line-height: 32px
		}
		.bottom[data-v-1d3b09fb] {
			padding-bottom: 30px;
			padding-top: 24px;
			padding-left: 36px;
			color: #444;
			position: relative;
			max-width: 810px
		}
		.bottom[data-v-1d3b09fb]:before {
			height: 44px;
			width: 4px;
			position: absolute;
			top: 24px;
			left: 16px;
			background: #f66;
			display: block;
			content: ""
		}
		.bottom h5[data-v-1d3b09fb] {
			font-size: 18px;
			height: 24px;
			line-height: 24px
		}
		.bottom p[data-v-1d3b09fb] {
			font-size: 18px;
			line-height: 32px;
			height: 32px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap
		}
	}
	
	@media screen and (max-width:768px) {
		.news-detail[data-v-1d3b09fb] {
			padding-bottom: 56px
		}
		.main[data-v-1d3b09fb] {
			padding: 0 10px
		}
		.article[data-v-1d3b09fb] {
			border-bottom: 1px solid #dcdcdc;
			padding-bottom: 16px;
			margin-bottom: 32px
		}
		.title[data-v-1d3b09fb] {
			font-size: 18px;
			color: #333;
			line-height: 28px;
			padding-top: 18px;
			padding-bottom: 14px;
			font-weight: 700
		}
		.bar[data-v-1d3b09fb] {
			height: 32px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex
		}
		.bar .thumb[data-v-1d3b09fb] {
			width: 32px;
			height: 32px
		}
		.bar .author[data-v-1d3b09fb] {
			padding-left: 8px
		}
		.bar .author h5[data-v-1d3b09fb] {
			font-size: 13px;
			color: #666
		}
		.bar .author p[data-v-1d3b09fb] {
			font-size: 12px;
			color: #868686
		}
		.info[data-v-1d3b09fb] {
			margin-top: 18px;
			color: #9e9e9e;
			font-size: 15px;
			line-height: 22px
		}
		.bottom[data-v-1d3b09fb] {
			padding: 0 10px;
			padding-bottom: 28px
		}
		.bottom h5[data-v-1d3b09fb] {
			color: #444;
			font-size: 15px;
			height: 16px;
			line-height: 16px;
			position: relative;
			padding-left: 12px
		}
		.bottom h5[data-v-1d3b09fb]:before {
			height: 100%;
			width: 2px;
			position: absolute;
			top: 0;
			left: 0;
			background: #5281e7;
			display: block;
			content: ""
		}
		.bottom p[data-v-1d3b09fb] {
			color: #333;
			font-size: 18px;
			padding-top: 10px;
			line-height: 28px;
			height: 38px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap
		}
	}
	
	.down-tool[data-v-3af19f46] {
		display: none
	}
	
	@media only screen and (max-width:768px) {
		.down-tool[data-v-3af19f46] {
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			z-index: 999;
			background: #f3f3f3;
			height: 56px;
			padding: 9px 0;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center
		}
		.down-tool .close[data-v-3af19f46] {
			width: 36px;
			text-align: center;
			line-height: 38px
		}
		.down-tool .close span[data-v-3af19f46] {
			width: 12px;
			height: 12px;
			background-size: 11px;
			display: inline-block;
			background-image: url(https://r.51gjj.com/webpublic/img/close.375bf44.png)
		}
		.down-tool .logo[data-v-3af19f46] {
			width: 38px;
			height: 38px
		}
		.down-tool .center[data-v-3af19f46] {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			padding: 0 6px
		}
		.down-tool .center h4[data-v-3af19f46] {
			font-size: 16px;
			color: #263038;
			line-height: 18px
		}
		.down-tool .center p[data-v-3af19f46] {
			font-size: 12px;
			color: #444;
			line-height: 14px;
			padding-top: 4px
		}
		.down-tool .button[data-v-3af19f46] {
			color: #fff;
			font-size: 14px;
			height: 32px;
			line-height: 32px;
			text-align: center;
			width: 80px;
			background: #4678e7;
			border-radius: 2px;
			margin-right: 16px
		}
		.down-tool.type-2[data-v-3af19f46] {
			background-color: rgba(0, 0, 0, .6)
		}
		.down-tool.type-2 .center h4[data-v-3af19f46],
		.down-tool.type-2 .center p[data-v-3af19f46] {
			color: #fff
		}
	}
	
	.qr[data-v-8fe6e6f4] img {
		width: 100%
	}
	
	.swiper-container {
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		list-style: none;
		padding: 0;
		z-index: 1
	}
	
	.swiper-container-no-flexbox .swiper-slide {
		float: left
	}
	
	.swiper-container-vertical>.swiper-wrapper {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column
	}
	
	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-transition-property: -webkit-transform;
		transition-property: -webkit-transform;
		-o-transition-property: transform;
		transition-property: transform;
		transition-property: transform, -webkit-transform;
		-webkit-box-sizing: content-box;
		box-sizing: content-box
	}
	
	.swiper-container-android .swiper-slide,
	.swiper-wrapper {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
	
	.swiper-container-multirow>.swiper-wrapper {
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap
	}
	
	.swiper-container-free-mode>.swiper-wrapper {
		-webkit-transition-timing-function: ease-out;
		-o-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
		margin: 0 auto
	}
	
	.swiper-slide {
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		position: relative;
		-webkit-transition-property: -webkit-transform;
		transition-property: -webkit-transform;
		-o-transition-property: transform;
		transition-property: transform;
		transition-property: transform, -webkit-transform
	}
	
	.swiper-invisible-blank-slide {
		visibility: hidden
	}
	
	.swiper-container-autoheight,
	.swiper-container-autoheight .swiper-slide {
		height: auto
	}
	
	.swiper-container-autoheight .swiper-wrapper {
		-webkit-box-align: start;
		-webkit-align-items: flex-start;
		-ms-flex-align: start;
		align-items: flex-start;
		-webkit-transition-property: height, -webkit-transform;
		transition-property: height, -webkit-transform;
		-o-transition-property: transform, height;
		transition-property: transform, height;
		transition-property: transform, height, -webkit-transform
	}
	
	.swiper-container-3d {
		-webkit-perspective: 1200px;
		perspective: 1200px
	}
	
	.swiper-container-3d .swiper-cube-shadow,
	.swiper-container-3d .swiper-slide,
	.swiper-container-3d .swiper-slide-shadow-bottom,
	.swiper-container-3d .swiper-slide-shadow-left,
	.swiper-container-3d .swiper-slide-shadow-right,
	.swiper-container-3d .swiper-slide-shadow-top,
	.swiper-container-3d .swiper-wrapper {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d
	}
	
	.swiper-container-3d .swiper-slide-shadow-bottom,
	.swiper-container-3d .swiper-slide-shadow-left,
	.swiper-container-3d .swiper-slide-shadow-right,
	.swiper-container-3d .swiper-slide-shadow-top {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 10
	}
	
	.swiper-container-3d .swiper-slide-shadow-left {
		background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .5)), to(transparent));
		background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
		background-image: -o-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
		background-image: linear-gradient(270deg, rgba(0, 0, 0, .5), transparent)
	}
	
	.swiper-container-3d .swiper-slide-shadow-right {
		background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(transparent));
		background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
		background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
		background-image: linear-gradient(90deg, rgba(0, 0, 0, .5), transparent)
	}
	
	.swiper-container-3d .swiper-slide-shadow-top {
		background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .5)), to(transparent));
		background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
		background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
		background-image: linear-gradient(0deg, rgba(0, 0, 0, .5), transparent)
	}
	
	.swiper-container-3d .swiper-slide-shadow-bottom {
		background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(transparent));
		background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
		background-image: -o-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
		background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), transparent)
	}
	
	.swiper-container-wp8-horizontal,
	.swiper-container-wp8-horizontal>.swiper-wrapper {
		-ms-touch-action: pan-y;
		touch-action: pan-y
	}
	
	.swiper-container-wp8-vertical,
	.swiper-container-wp8-vertical>.swiper-wrapper {
		-ms-touch-action: pan-x;
		touch-action: pan-x
	}
	
	.swiper-button-next,
	.swiper-button-prev {
		position: absolute;
		top: 50%;
		width: 27px;
		height: 44px;
		margin-top: -22px;
		z-index: 10;
		cursor: pointer;
		background-size: 27px 44px;
		background-position: 50%;
		background-repeat: no-repeat
	}
	
	.swiper-button-next.swiper-button-disabled,
	.swiper-button-prev.swiper-button-disabled {
		opacity: .35;
		cursor: auto;
		pointer-events: none
	}
	
	.swiper-button-prev,
	.swiper-container-rtl .swiper-button-next {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E");
		left: 10px;
		right: auto
	}
	
	.swiper-button-next,
	.swiper-container-rtl .swiper-button-prev {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E");
		right: 10px;
		left: auto
	}
	
	.swiper-button-prev.swiper-button-white,
	.swiper-container-rtl .swiper-button-next.swiper-button-white {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E")
	}
	
	.swiper-button-next.swiper-button-white,
	.swiper-container-rtl .swiper-button-prev.swiper-button-white {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E")
	}
	
	.swiper-button-prev.swiper-button-black,
	.swiper-container-rtl .swiper-button-next.swiper-button-black {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E")
	}
	
	.swiper-button-next.swiper-button-black,
	.swiper-container-rtl .swiper-button-prev.swiper-button-black {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E")
	}
	
	.swiper-button-lock {
		display: none
	}
	
	.swiper-pagination {
		position: absolute;
		text-align: center;
		-webkit-transition: opacity .3s;
		-o-transition: .3s opacity;
		transition: opacity .3s;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		z-index: 10
	}
	
	.swiper-pagination.swiper-pagination-hidden {
		opacity: 0
	}
	
	.swiper-container-horizontal>.swiper-pagination-bullets,
	.swiper-pagination-custom,
	.swiper-pagination-fraction {
		bottom: 10px;
		left: 0;
		width: 100%
	}
	
	.swiper-pagination-bullets-dynamic {
		overflow: hidden;
		font-size: 0
	}
	
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
		-webkit-transform: scale(.33);
		-ms-transform: scale(.33);
		transform: scale(.33);
		position: relative
	}
	
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1)
	}
	
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
		-webkit-transform: scale(.66);
		-ms-transform: scale(.66);
		transform: scale(.66)
	}
	
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
		-webkit-transform: scale(.33);
		-ms-transform: scale(.33);
		transform: scale(.33)
	}
	
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
		-webkit-transform: scale(.66);
		-ms-transform: scale(.66);
		transform: scale(.66)
	}
	
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
		-webkit-transform: scale(.33);
		-ms-transform: scale(.33);
		transform: scale(.33)
	}
	
	.swiper-pagination-bullet {
		width: 8px;
		height: 8px;
		display: inline-block;
		border-radius: 100%;
		background: #000;
		opacity: .2
	}
	
	button.swiper-pagination-bullet {
		border: none;
		margin: 0;
		padding: 0;
		-webkit-box-shadow: none;
		box-shadow: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none
	}
	
	.swiper-pagination-clickable .swiper-pagination-bullet {
		cursor: pointer
	}
	
	.swiper-pagination-bullet-active {
		opacity: 1;
		background: #007aff
	}
	
	.swiper-container-vertical>.swiper-pagination-bullets {
		right: 10px;
		top: 50%;
		-webkit-transform: translate3d(0, -50%, 0);
		transform: translate3d(0, -50%, 0)
	}
	
	.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
		margin: 6px 0;
		display: block
	}
	
	.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		width: 8px
	}
	
	.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
		display: inline-block;
		-webkit-transition: top .2s, -webkit-transform .2s;
		transition: top .2s, -webkit-transform .2s;
		-o-transition: .2s transform, .2s top;
		transition: transform .2s, top .2s;
		transition: transform .2s, top .2s, -webkit-transform .2s
	}
	
	.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
		margin: 0 4px
	}
	
	.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
		left: 50%;
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
		white-space: nowrap
	}
	
	.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
		-webkit-transition: left .2s, -webkit-transform .2s;
		transition: left .2s, -webkit-transform .2s;
		-o-transition: .2s transform, .2s left;
		transition: transform .2s, left .2s;
		transition: transform .2s, left .2s, -webkit-transform .2s
	}
	
	.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
		-webkit-transition: right .2s, -webkit-transform .2s;
		transition: right .2s, -webkit-transform .2s;
		-o-transition: .2s transform, .2s right;
		transition: transform .2s, right .2s;
		transition: transform .2s, right .2s, -webkit-transform .2s
	}
	
	.swiper-pagination-progressbar {
		background: rgba(0, 0, 0, .25);
		position: absolute
	}
	
	.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
		background: #007aff;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		-webkit-transform: scale(0);
		-ms-transform: scale(0);
		transform: scale(0);
		-webkit-transform-origin: left top;
		-ms-transform-origin: left top;
		transform-origin: left top
	}
	
	.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
		-webkit-transform-origin: right top;
		-ms-transform-origin: right top;
		transform-origin: right top
	}
	
	.swiper-container-horizontal>.swiper-pagination-progressbar,
	.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
		width: 100%;
		height: 4px;
		left: 0;
		top: 0
	}
	
	.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
	.swiper-container-vertical>.swiper-pagination-progressbar {
		width: 4px;
		height: 100%;
		left: 0;
		top: 0
	}
	
	.swiper-pagination-white .swiper-pagination-bullet-active {
		background: #fff
	}
	
	.swiper-pagination-progressbar.swiper-pagination-white {
		background: hsla(0, 0%, 100%, .25)
	}
	
	.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {
		background: #fff
	}
	
	.swiper-pagination-black .swiper-pagination-bullet-active {
		background: #000
	}
	
	.swiper-pagination-progressbar.swiper-pagination-black {
		background: rgba(0, 0, 0, .25)
	}
	
	.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {
		background: #000
	}
	
	.swiper-pagination-lock {
		display: none
	}
	
	.swiper-scrollbar {
		border-radius: 10px;
		position: relative;
		-ms-touch-action: none;
		background: rgba(0, 0, 0, .1)
	}
	
	.swiper-container-horizontal>.swiper-scrollbar {
		position: absolute;
		left: 1%;
		bottom: 3px;
		z-index: 50;
		height: 5px;
		width: 98%
	}
	
	.swiper-container-vertical>.swiper-scrollbar {
		position: absolute;
		right: 3px;
		top: 1%;
		z-index: 50;
		width: 5px;
		height: 98%
	}
	
	.swiper-scrollbar-drag {
		height: 100%;
		width: 100%;
		position: relative;
		background: rgba(0, 0, 0, .5);
		border-radius: 10px;
		left: 0;
		top: 0
	}
	
	.swiper-scrollbar-cursor-drag {
		cursor: move
	}
	
	.swiper-scrollbar-lock {
		display: none
	}
	
	.swiper-zoom-container {
		width: 100%;
		height: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		text-align: center
	}
	
	.swiper-zoom-container>canvas,
	.swiper-zoom-container>img,
	.swiper-zoom-container>svg {
		max-width: 100%;
		max-height: 100%;
		-o-object-fit: contain;
		object-fit: contain
	}
	
	.swiper-slide-zoomed {
		cursor: move
	}
	
	.swiper-lazy-preloader {
		width: 42px;
		height: 42px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -21px;
		margin-top: -21px;
		z-index: 10;
		-webkit-transform-origin: 50%;
		-ms-transform-origin: 50%;
		transform-origin: 50%;
		-webkit-animation: swiper-preloader-spin 1s steps(12) infinite;
		animation: swiper-preloader-spin 1s steps(12) infinite
	}
	
	.swiper-lazy-preloader:after {
		display: block;
		content: "";
		width: 100%;
		height: 100%;
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E");
		background-position: 50%;
		background-size: 100%;
		background-repeat: no-repeat
	}
	
	.swiper-lazy-preloader-white:after {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E")
	}
	
	@-webkit-keyframes swiper-preloader-spin {
		to {
			-webkit-transform: rotate(1turn);
			transform: rotate(1turn)
		}
	}
	
	@keyframes swiper-preloader-spin {
		to {
			-webkit-transform: rotate(1turn);
			transform: rotate(1turn)
		}
	}
	
	.swiper-container .swiper-notification {
		position: absolute;
		left: 0;
		top: 0;
		pointer-events: none;
		opacity: 0;
		z-index: -1000
	}
	
	.swiper-container-fade.swiper-container-free-mode .swiper-slide {
		-webkit-transition-timing-function: ease-out;
		-o-transition-timing-function: ease-out;
		transition-timing-function: ease-out
	}
	
	.swiper-container-fade .swiper-slide {
		pointer-events: none;
		-webkit-transition-property: opacity;
		-o-transition-property: opacity;
		transition-property: opacity
	}
	
	.swiper-container-fade .swiper-slide .swiper-slide {
		pointer-events: none
	}
	
	.swiper-container-fade .swiper-slide-active,
	.swiper-container-fade .swiper-slide-active .swiper-slide-active {
		pointer-events: auto
	}
	
	.swiper-container-cube {
		overflow: visible
	}
	
	.swiper-container-cube .swiper-slide {
		pointer-events: none;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		z-index: 1;
		visibility: hidden;
		-webkit-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		transform-origin: 0 0;
		width: 100%;
		height: 100%
	}
	
	.swiper-container-cube .swiper-slide .swiper-slide {
		pointer-events: none
	}
	
	.swiper-container-cube.swiper-container-rtl .swiper-slide {
		-webkit-transform-origin: 100% 0;
		-ms-transform-origin: 100% 0;
		transform-origin: 100% 0
	}
	
	.swiper-container-cube .swiper-slide-active,
	.swiper-container-cube .swiper-slide-active .swiper-slide-active {
		pointer-events: auto
	}
	
	.swiper-container-cube .swiper-slide-active,
	.swiper-container-cube .swiper-slide-next,
	.swiper-container-cube .swiper-slide-next+.swiper-slide,
	.swiper-container-cube .swiper-slide-prev {
		pointer-events: auto;
		visibility: visible
	}
	
	.swiper-container-cube .swiper-slide-shadow-bottom,
	.swiper-container-cube .swiper-slide-shadow-left,
	.swiper-container-cube .swiper-slide-shadow-right,
	.swiper-container-cube .swiper-slide-shadow-top {
		z-index: 0;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden
	}
	
	.swiper-container-cube .swiper-cube-shadow {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: .6;
		-webkit-filter: blur(50px);
		filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="50" /></filter></svg>#filter');
		filter: blur(50px);
		z-index: 0
	}
	
	.swiper-container-flip {
		overflow: visible
	}
	
	.swiper-container-flip .swiper-slide {
		pointer-events: none;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		z-index: 1
	}
	
	.swiper-container-flip .swiper-slide .swiper-slide {
		pointer-events: none
	}
	
	.swiper-container-flip .swiper-slide-active,
	.swiper-container-flip .swiper-slide-active .swiper-slide-active {
		pointer-events: auto
	}
	
	.swiper-container-flip .swiper-slide-shadow-bottom,
	.swiper-container-flip .swiper-slide-shadow-left,
	.swiper-container-flip .swiper-slide-shadow-right,
	.swiper-container-flip .swiper-slide-shadow-top {
		z-index: 0;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden
	}
	
	.swiper-container-coverflow .swiper-wrapper {
		-ms-perspective: 1200px
	}
	
	.page-enter-active[data-v-419267d0],
	.page-leave-active[data-v-419267d0] {
		-webkit-transition: opacity .3s;
		transition: opacity .3s
	}
	
	.page-enter[data-v-419267d0],
	.page-leave-active[data-v-419267d0] {
		opacity: 0
	}
	
	.page-view[data-v-419267d0] {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		min-height: 100%
	}
	
	.page-header[data-v-419267d0] {
		width: 100%
	}
	
	.page-content[data-v-419267d0] {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: 100%;
		width: 100%;
		background: #f9fafb;
		overflow-x: hidden
	}
	
	.index-page[data-v-1b011d9c] {
		position: relative
	}
	
	.gotTop[data-v-1b011d9c] {
		background-image: url(http://img.xindaikuangren.com/hcqoDQirrzpd6.png);
		background-repeat: no-repeat;
		background-size: 100%;
		width: 77px;
		height: 77px;
		position: absolute;
		bottom: 80px;
		left: 50%;
		margin-left: 680px;
		cursor: pointer;
		z-index: 98
	}
	
	@media screen and (max-width:1500px) {
		.gotTop[data-v-1b011d9c] {
			right: 30px;
			margin-left: 0;
			left: inherit
		}
	}
	
	@media screen and (max-width:768px) {
		.gotTop[data-v-1b011d9c] {
			right: 12px;
			bottom: 12px;
			margin-left: 0;
			left: inherit;
			width: 38px;
			height: 38px
		}
	}
	
	.banner-swiper[data-v-1b011d9c] {
		height: 560px;
		width: 100%;
		overflow: hidden;
		position: relative
	}
	
	.banner-swiper .swiper-wrapper[data-v-1b011d9c] {
		height: 100%
	}
	
	.banner-swiper .swiper-slide[data-v-1b011d9c] {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		overflow: hidden
	}
	
	.banner-swiper .swiper-slide[data-v-1b011d9c],
	.banner-swiper .swiper-slide a[data-v-1b011d9c] {
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		height: 100%
	}
	
	.banner-swiper .swiper-slide a[data-v-1b011d9c] {
		display: block;
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex
	}
	
	.banner-swiper .swiper-slide img[data-v-1b011d9c] {
		height: 100%
	}
	
	.banner-swiper[data-v-1b011d9c] .swiper-pagination {
		left: 50%;
		-webkit-transform: translate3d(-50%, 0, 0);
		transform: translate3d(-50%, 0, 0)
	}
	
	.banner-swiper[data-v-1b011d9c] .swiper-pagination .swiper-pagination-bullet {
		width: 10px;
		height: 10px
	}
	
	.banner-swiper[data-v-1b011d9c] .swiper-pagination .swiper-pagination-bullet-active {
		background-color: #fff
	}
	
	.news .news-content[data-v-1b011d9c] {
		position: relative
	}
	
	.news-swiper[data-v-1b011d9c] {
		overflow: hidden;
		position: relative
	}
	
	.news-swiper .swiper-wrapper[data-v-1b011d9c] {
		height: 100%
	}
	
	@media screen and (min-width:769px) {
		.title[data-v-1b011d9c] {
			color: #000;
			text-align: center;
			padding-top: 100px;
			height: 260px
		}
		.title h3[data-v-1b011d9c] {
			font-size: 44px;
			line-height: 56px;
			padding-bottom: 16px
		}
		.title h4[data-v-1b011d9c] {
			font-size: 42px;
			line-height: 60px;
			padding-bottom: 12px
		}
		.title p[data-v-1b011d9c] {
			font-size: 15px;
			line-height: 24px
		}
		.product[data-v-1b011d9c] {
			padding-top: 12px;
			padding-bottom: 124px
		}
		.product h3[data-v-1b011d9c] {
			font-size: 24px;
			color: #000;
			text-align: center;
			height: 36px;
			line-height: 36px;
			padding-bottom: 88px
		}
		.product ul[data-v-1b011d9c] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between
		}
		.product ul li[data-v-1b011d9c] {
			width: 260px;
			height: 360px;
			border: 1px solid #f1f1f1;
			padding-top: 16px;
			max-width: 260px;
			cursor: pointer;
			position: relative
		}
		.product ul li .code-msk[data-v-1b011d9c] {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: transparent;
			z-index: 4
		}
		.product ul li .code[data-v-1b011d9c] {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, .4);
			z-index: 3;
			text-align: center;
			-webkit-transition: all .5s;
			transition: all .5s
		}
		.product ul li .code[data-v-1b011d9c]:before {
			content: "";
			width: 0;
			height: 100%;
			display: inline-block;
			vertical-align: middle
		}
		.product ul li .code .box[data-v-1b011d9c] {
			display: inline-block;
			background: #fff;
			padding: 12px;
			width: 62%;
			z-index: 4;
			vertical-align: middle;
			padding-bottom: 18px
		}
		.product ul li .code .box p[data-v-1b011d9c] {
			text-align: center;
			color: #000;
			font-size: 12px;
			padding-bottom: 8px
		}
		.product ul li .code .box[data-v-1b011d9c] img {
			max-width: 100%;
			margin: 0 auto
		}
		.product ul li h2[data-v-1b011d9c] {
			height: 48px;
			line-height: 24px;
			padding-bottom: 24px;
			position: relative;
			padding-left: 44px;
			color: #000;
			font-size: 17px
		}
		.product ul li h2 .logo[data-v-1b011d9c] {
			position: absolute;
			top: 2px;
			left: 18px;
			height: 20px;
			width: 20px
		}
		.product ul li .img[data-v-1b011d9c] {
			height: 108px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center
		}
		.product ul li .img img[data-v-1b011d9c] {
			max-width: 80%;
			max-height: 80%
		}
		.product ul li .info[data-v-1b011d9c] {
			height: 100px
		}
		.product ul li .info.t1[data-v-1b011d9c] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			margin: 0 24px
		}
		.product ul li .info.t1 .c[data-v-1b011d9c] {
			padding-top: 20px;
			width: 50%;
			text-align: center
		}
		.product ul li .info.t1 .c h5[data-v-1b011d9c] {
			font-size: 26px;
			color: #ff7800;
			height: 36px;
			line-height: 36px
		}
		.product ul li .info.t1 .c h5 span[data-v-1b011d9c] {
			font-size: 18px
		}
		.product ul li .info.t1 .c p[data-v-1b011d9c] {
			height: 20px;
			line-height: 20px;
			font-size: 13px;
			color: #999
		}
		.product ul li .info.t2[data-v-1b011d9c] {
			margin: 0 24px;
			text-align: center;
			padding-top: 20px
		}
		.product ul li .info.t2 h5[data-v-1b011d9c] {
			font-size: 16px;
			color: #555;
			height: 32px;
			line-height: 32px
		}
		.product ul li .info.t2 h5 span[data-v-1b011d9c] {
			font-size: 18px
		}
		.product ul li .info.t2 p[data-v-1b011d9c] {
			height: 20px;
			line-height: 20px;
			font-size: 14px;
			color: #999
		}
		.product ul li h4[data-v-1b011d9c] {
			height: 24px;
			line-height: 24px;
			text-align: center;
			color: #010101;
			font-size: 15px
		}
		.product ul li .btn[data-v-1b011d9c] {
			width: 112px;
			height: 34px;
			line-height: 32px;
			text-align: center;
			color: #737373;
			border: 1px solid #dfe0e1;
			margin: 0 auto
		}
		.product ul li .btn[data-v-1b011d9c]:hover {
			background: #5281e7;
			color: #fff;
			border: 1px solid #5281e7
		}
		.news-slide[data-v-1b011d9c] {
			height: 350px;
			width: 356px
		}
		.news-slide .img[data-v-1b011d9c] {
			height: 208px;
			overflow: hidden
		}
		.news-slide .box[data-v-1b011d9c] {
			background: #fff;
			height: 100%;
			margin: 0 12px
		}
		.news-slide .info[data-v-1b011d9c] {
			padding: 0 24px
		}
		.news-slide .info h4[data-v-1b011d9c] {
			color: #000;
			font-size: 18px;
			line-height: 24px;
			padding-top: 20px;
			height: 68px;
			margin-bottom: 8px;
			display: block;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis
		}
		.news-slide .info p[data-v-1b011d9c] {
			color: #999;
			font-size: 16px;
			line-height: 24px;
			padding-top: 12px;
			height: 60px
		}
		.news-slide img[data-v-1b011d9c] {
			max-width: 100%;
			width: 100%
		}
		.news[data-v-1b011d9c] {
			padding-bottom: 100px
		}
		.news .next[data-v-1b011d9c],
		.news .prev[data-v-1b011d9c] {
			position: absolute;
			top: 50%;
			height: 36px;
			width: 32px;
			margin-top: -12px;
			color: #444;
			font-size: 20px;
			line-height: 36px;
			cursor: pointer;
			overflow: hidden;
			width: 100px
		}
		.news .next span[data-v-1b011d9c],
		.news .prev span[data-v-1b011d9c] {
			display: block;
			height: 36px;
			width: 40px;
			background-size: 24px 36px;
			background-repeat: no-repeat;
			width: 100px;
			-webkit-transition: -webkit-transform .3s;
			transition: -webkit-transform .3s;
			transition: transform .3s;
			transition: transform .3s, -webkit-transform .3s
		}
		.news .next:hover span[data-v-1b011d9c],
		.news .prev:hover span[data-v-1b011d9c] {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
		.news .prev[data-v-1b011d9c] {
			left: -112px
		}
		.news .prev span[data-v-1b011d9c] {
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAYAAACTz/ouAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOxJREFUeNrE1rENwjAQBVCD2ICKDSgZgArR0bCFZ/IWNFQgGkRPyQZUESOYD0oay0nuzt8Q6SuRIv0nxfElkxij89479hFC+J6nrvLBAubIFTnVAD7lZ2TdXlOBrnyFPJAdE0jLN8iTBYjKrYC43AKoyrWAulwDmMqlgLlcAhSVjwHF5UMApbwPoJXnAGp5Djgwy//ywdkjd2SJXJAFG2iQLRPJPSIq0rcGNGRokSnI2FtUjEhe0yJEug/MiGajmRDtTlYjllGhQqyzSIyUDDsRUjpNU+RYY1x3yA15pTdnpLHftL/vv//gvAUYAMP+XwTeUUJ7AAAAAElFTkSuQmCC);
			background-position: 0;
			padding-left: 32px;
			-webkit-transform: translateX(68px);
			transform: translateX(68px)
		}
		.news .next[data-v-1b011d9c] {
			right: -112px
		}
		.news .next span[data-v-1b011d9c] {
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAYAAACTz/ouAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAO9JREFUeNq0170NwjAQBeCAKFggLJGSloaUWcQzeZJ0oaFEdDAEE9CZC3JhWU5yP88nPaE07xNJfIhdCKFxzjXo8d7/P/dN5cmBO+VBOdUCjpQzZaK0NYCB8qJ0lBsCyYEPpUcipYcMRZbeIhiy9ppCkK1zYEY4B82EcE+yGpGsChUi3UViRLPsRIh2m7IRy7pmIdbfgxwZ0cA8Af2Q02njrenitxiQQF7ex1sGAVjlWoBdrgFE5VJAXC4BVOVcQF3OAUzlW4C5fA2AlC8BsPISkJa/reUlYEzKr9byEvClPFHl8xyy60vtPyDw+QkwAEoSXyqT6QWfAAAAAElFTkSuQmCC);
			background-position: 100%;
			padding-right: 32px;
			-webkit-transform: translateX(-68px);
			transform: translateX(-68px)
		}
	}
	
	@media only screen and (max-width:768px) {
		.banner-swiper[data-v-1b011d9c] {
			height: 200px;
			height: 120px
		}
		.banner-swiper[data-v-1b011d9c] .swiper-pagination .swiper-pagination-bullet {
			width: 8px;
			height: 8px
		}
		.title[data-v-1b011d9c] {
			color: #333;
			text-align: center;
			padding-top: 40px;
			height: 92px
		}
		.title h3[data-v-1b011d9c] {
			font-size: 16px;
			line-height: 24px;
			padding-bottom: 4px
		}
		.title h4[data-v-1b011d9c] {
			font-size: 15px;
			line-height: 24px;
			padding-bottom: 4px
		}
		.title p[data-v-1b011d9c] {
			font-size: 9px;
			line-height: 12px;
			color: #444
		}
		.product[data-v-1b011d9c] {
			padding-top: 6px;
			padding-bottom: 10px
		}
		.product h3[data-v-1b011d9c] {
			font-size: 12px;
			color: #000;
			text-align: center;
			height: 18px;
			line-height: 18px;
			padding-bottom: 24px
		}
		.product ul[data-v-1b011d9c] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			overflow-y: hidden;
			padding: 0 6px;
			padding-top: 20px;
			padding-bottom: 20px
		}
		.product ul li[data-v-1b011d9c] {
			width: 130px;
			height: 160px;
			border: 1px solid #f1f1f1;
			padding-top: 16px;
			max-width: 130px;
			cursor: pointer;
			position: relative;
			min-width: 130px;
			margin: 0 6px;
			-webkit-box-shadow: 0 8px 14px 2px rgba(178, 187, 203, .2);
			box-shadow: 0 8px 14px 2px rgba(178, 187, 203, .2)
		}
		.product ul li .code[data-v-1b011d9c] {
			display: none
		}
		.product ul li h2[data-v-1b011d9c] {
			height: 24px;
			line-height: 12px;
			padding-bottom: 12px;
			position: relative;
			padding-left: 22px;
			color: #000;
			font-size: 9px
		}
		.product ul li h2 .logo[data-v-1b011d9c] {
			position: absolute;
			top: 1px;
			left: 9px;
			height: 10px;
			width: 10px
		}
		.product ul li .img[data-v-1b011d9c] {
			height: 54px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center
		}
		.product ul li .img img[data-v-1b011d9c] {
			max-width: 80%;
			max-height: 80%
		}
		.product ul li .info[data-v-1b011d9c] {
			height: 50px
		}
		.product ul li .info.t1[data-v-1b011d9c] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			margin: 0 12px
		}
		.product ul li .info.t1 .c[data-v-1b011d9c] {
			padding-top: 10px;
			width: 50%;
			text-align: center
		}
		.product ul li .info.t1 .c h5[data-v-1b011d9c] {
			font-size: 13px;
			color: #ff7800;
			height: 18px;
			line-height: 18px
		}
		.product ul li .info.t1 .c h5 span[data-v-1b011d9c] {
			font-size: 9px
		}
		.product ul li .info.t1 .c p[data-v-1b011d9c] {
			height: 10px;
			line-height: 10px;
			font-size: 8px;
			color: #999
		}
		.product ul li .info.t2[data-v-1b011d9c] {
			margin: 0 12px;
			text-align: center;
			padding-top: 10px
		}
		.product ul li .info.t2 h5[data-v-1b011d9c] {
			font-size: 8px;
			color: #555;
			height: 16px;
			line-height: 16px
		}
		.product ul li .info.t2 h5 span[data-v-1b011d9c] {
			font-size: 10px
		}
		.product ul li .info.t2 p[data-v-1b011d9c] {
			height: 10px;
			line-height: 10px;
			font-size: 8px;
			color: #999
		}
		.product ul li h4[data-v-1b011d9c] {
			height: 12px;
			line-height: 12px;
			text-align: center;
			color: #010101;
			font-size: 8px
		}
		.product ul li .btn[data-v-1b011d9c] {
			display: none
		}
		.news[data-v-1b011d9c] {
			padding-bottom: 36px;
			overflow: hidden
		}
		.news .next[data-v-1b011d9c],
		.news .prev[data-v-1b011d9c] {
			display: none
		}
		.news-content[data-v-1b011d9c] {
			margin: 0 12px
		}
		.news-swiper[data-v-1b011d9c] {
			overflow: inherit
		}
		.news-slide[data-v-1b011d9c] {
			height: 154px;
			width: 156px
		}
		.news-slide .img[data-v-1b011d9c] {
			height: 90px;
			overflow: hidden
		}
		.news-slide .box[data-v-1b011d9c] {
			background: #fff;
			height: 100%
		}
		.news-slide .info[data-v-1b011d9c] {
			padding: 0 12px;
			height: 64px
		}
		.news-slide .info h4[data-v-1b011d9c] {
			color: #000;
			font-size: 9px;
			line-height: 12px;
			padding-top: 12px;
			height: 36px;
			word-break: break-all;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden
		}
		.news-slide .info p[data-v-1b011d9c] {
			color: #999;
			font-size: 8px;
			line-height: 12px;
			padding-top: 3px;
			height: 25px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap
		}
		.news-slide img[data-v-1b011d9c] {
			max-width: 100%;
			width: 100%
		}
	}
	
	.partner-logo img[data-v-26d14ffe] {
		/*width: 90%;*/
		margin: 0 auto
	}
	
	@media screen and (min-width:769px) {
		.title[data-v-26d14ffe] {
			color: #000;
			text-align: center;
			padding-top: 100px;
			height: 260px
		}
		.title h4[data-v-26d14ffe] {
			font-size: 42px;
			line-height: 60px;
			padding-bottom: 12px
		}
		.title p[data-v-26d14ffe] {
			font-size: 15px;
			line-height: 24px
		}
		.partner-logo[data-v-26d14ffe] {
			padding-bottom: 100px
		}
	}
	
	@media only screen and (max-width:768px) {
		.title[data-v-26d14ffe] {
			color: #333;
			text-align: center;
			padding-top: 40px;
			height: 92px
		}
		.title h3[data-v-26d14ffe] {
			font-size: 16px;
			line-height: 24px;
			padding-bottom: 4px
		}
		.title h4[data-v-26d14ffe] {
			font-size: 15px;
			line-height: 24px;
			padding-bottom: 4px
		}
		.title p[data-v-26d14ffe] {
			font-size: 9px;
			line-height: 12px;
			color: #444
		}
		.partner-logo[data-v-26d14ffe] {
			padding-bottom: 24px
		}
	}
	
	@media screen and (min-width:769px) {
		.floor-content[data-v-4744d2c4] {
			padding-top: 30px;
			padding-bottom: 86px
		}
		.floor[data-v-4744d2c4] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			height: 345px;
			margin-bottom: 40px;
			-webkit-box-shadow: 0 10px 40px 0 rgba(0, 0, 0, .1);
			box-shadow: 0 10px 40px 0 rgba(0, 0, 0, .1)
		}
		.floor .floor-brand[data-v-4744d2c4] {
			height: 100%;
			width: 240px;
			position: relative
		}
		.floor .floor-brand h4[data-v-4744d2c4] {
			font-size: 42px;
			color: #fff;
			padding: 24px 24px 0;
			line-height: 64px
		}
		.floor .floor-brand p[data-v-4744d2c4] {
			font-size: 16px;
			color: #fff;
			padding: 0 24px;
			line-height: 28px
		}
		.floor .floor-brand .btn[data-v-4744d2c4] {
			position: absolute;
			bottom: 20px;
			right: 16px;
			left: 16px;
			cursor: pointer;
			height: 40px
		}
		.floor .floor-brand .btn .info[data-v-4744d2c4] {
			position: relative;
			height: 100%;
			width: 100%;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex
		}
		.floor .floor-brand .btn .sub[data-v-4744d2c4] {
			position: absolute;
			z-index: 99;
			bottom: 40px;
			right: 6px;
			display: none;
			padding-bottom: 12px
		}
		.floor .floor-brand .btn .sub .code[data-v-4744d2c4] {
			padding: 12px;
			background: #fff;
			position: relative
		}
		.floor .floor-brand .btn .sub .code[data-v-4744d2c4]:before {
			content: "";
			position: absolute;
			bottom: -5px;
			right: 10px;
			margin-left: -6px;
			width: 0;
			height: 0;
			border-left: 6px solid hsla(0, 0%, 100%, 0);
			border-right: 6px solid hsla(0, 0%, 100%, 0);
			border-top: 5px solid #fff
		}
		.floor .floor-brand .btn .sub .code h4[data-v-4744d2c4] {
			padding: 0;
			padding-bottom: 6px;
			font-size: 12px;
			color: #000;
			white-space: nowrap;
			line-height: 14px;
			text-align: center
		}
		.floor .floor-brand .btn .sub .code[data-v-4744d2c4] img {
			width: 100%
		}
		.floor .floor-brand .btn:hover .sub[data-v-4744d2c4] {
			display: block
		}
		.floor .floor-brand .btn em[data-v-4744d2c4],
		.floor .floor-brand .btn span[data-v-4744d2c4] {
			display: block;
			height: 40px
		}
		.floor .floor-brand .btn span[data-v-4744d2c4] {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			font-size: 16px;
			color: #fff;
			text-align: center;
			line-height: 40px
		}
		.floor .floor-brand .btn em[data-v-4744d2c4] {
			width: 42px;
			margin-left: 2px;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT5JREFUeNpi/P//PwM1ABOU/o8DbwHiaCB2hLJxqWNgQTJ0EhAfQeLnQWk+IP4AZR+BqoMBG5g6JiTBk0gGbQDiR1h88AgqBzP0JLrXYMAIiFcBMRee4OCCqjHCFkYwsAuIhYD4Ex6DPkHV7EIWRA6jZCC2R+KbAfFNNENAYjOQ+CroBu2B0kpIih4A8QUkPojNjqbmH0wvIzQdBQAxKxZv3AVic2ggg9h3gFgDiK8AsQ6UNgBZwkRCmgNFMzcQV0L5MLoF2WvZODSDovcpKSnbBcq+h4QVoM4mCiDH2lwgXobEXwrE/KTmNRjwhuYdYgxoh9I16C4CgXNAHAbE34gwqAaajl4AsQ+yQaBo/g1lg5KDHBB/xGOQFhDrwvIkC1r05qEp3grNEiAXvoEmwFdQuSfQ5PAMOUFSDAACDAAKv1Gy54fPBQAAAABJRU5ErkJggg==);
			background-position: 50%;
			background-size: 18px 18px;
			background-repeat: no-repeat
		}
		.floor .floor-detail[data-v-4744d2c4] {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			height: 100%;
			white-space: nowrap
		}
		.floor .floor-detail .box-2[data-v-4744d2c4],
		.floor .floor-detail .more[data-v-4744d2c4] {
			display: none
		}
		.loan-floor .floor-brand[data-v-4744d2c4] {
			background: #5b89ff;
			background: -webkit-gradient(linear, left top, left bottom, from(#5b89ff), to(#90affc));
			background: linear-gradient(180deg, #5b89ff 0, #90affc)
		}
		.loan-floor .floor-brand .btn em[data-v-4744d2c4],
		.loan-floor .floor-brand .btn span[data-v-4744d2c4] {
			background-color: #6f97fe
		}
		.loan-floor .floor-detail[data-v-4744d2c4] {
			padding: 0 18px
		}
		.loan-floor .floor-detail li[data-v-4744d2c4] {
			height: 115px;
			border-top: 1px solid #eee;
			text-align: center;
			padding-top: 26px
		}
		.loan-floor .floor-detail li .box-1[data-v-4744d2c4] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex
		}
		.loan-floor .floor-detail li .hd[data-v-4744d2c4] {
			width: 230px;
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1
		}
		.loan-floor .floor-detail li .hd h4[data-v-4744d2c4] {
			color: #444;
			font-size: 18px;
			line-height: 36px;
			padding-left: 44px;
			position: relative;
			text-align: left;
			overflow-x: hidden
		}
		.loan-floor .floor-detail li .hd h4 img[data-v-4744d2c4] {
			position: absolute;
			left: 8px;
			top: 6px;
			width: 24px;
			height: 24px
		}
		.loan-floor .floor-detail li .hd span[data-v-4744d2c4] {
			color: #ff7800;
			font-size: 16px;
			border-radius: 12px;
			border: 1px solid #ff7800;
			height: 24px;
			padding: 0 14px;
			margin-top: 4px;
			display: inline-block
		}
		.loan-floor .floor-detail li .tr[data-v-4744d2c4] {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1
		}
		.loan-floor .floor-detail li .tr h4[data-v-4744d2c4] {
			color: #444;
			font-size: 24px;
			line-height: 36px
		}
		.loan-floor .floor-detail li .tr p[data-v-4744d2c4] {
			font-size: 14px;
			color: #969ea5;
			line-height: 28px
		}
		.loan-floor .floor-detail li .tr .yellow[data-v-4744d2c4] {
			color: #fc8c28
		}
		.loan-floor .floor-detail li[data-v-4744d2c4]:first-child {
			border-top: none
		}
		.stage-floor[data-v-4744d2c4] {
			height: 465px
		}
		.stage-floor .floor-brand[data-v-4744d2c4] {
			background: #ff542d;
			background: -webkit-gradient(linear, left top, left bottom, from(#ff542d), to(#ff925e));
			background: linear-gradient(180deg, #ff542d 0, #ff925e)
		}
		.stage-floor .floor-brand .btn em[data-v-4744d2c4],
		.stage-floor .floor-brand .btn span[data-v-4744d2c4] {
			background-color: #ff6b3f
		}
		.stage-floor .floor-detail[data-v-4744d2c4] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex
		}
		.stage-floor .floor-detail li[data-v-4744d2c4] {
			border-left: 1px solid #eee;
			height: 100%;
			width: 33%
		}
		.stage-floor .floor-detail li .img[data-v-4744d2c4] {
			height: 350px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center
		}
		.stage-floor .floor-detail li .img img[data-v-4744d2c4] {
			max-width: 80%;
			max-height: 80%
		}
		.stage-floor .floor-detail li h4[data-v-4744d2c4] {
			font-size: 28px;
			line-height: 48px;
			padding: 0 24px;
			color: #263038;
			overflow: hidden;
			height: 48px
		}
		.stage-floor .floor-detail li .price[data-v-4744d2c4] {
			line-height: 40px;
			color: #999;
			font-size: 18px;
			height: 40px;
			padding: 0 24px
		}
		.stage-floor .floor-detail li .price span[data-v-4744d2c4] {
			font-size: 26px;
			color: #f66
		}
		.stage-floor .floor-detail li .price span em[data-v-4744d2c4] {
			font-size: 20px;
			font-style: normal
		}
		.stage-floor .floor-detail li[data-v-4744d2c4]:first-child {
			border-left: none
		}
		.cards-floor[data-v-4744d2c4] {
			height: 385px
		}
		.cards-floor .floor-brand[data-v-4744d2c4] {
			background: #23cb48;
			background: -webkit-gradient(linear, left top, left bottom, from(#23cb48), to(#4eeb70));
			background: linear-gradient(180deg, #23cb48 0, #4eeb70)
		}
		.cards-floor .floor-brand .btn em[data-v-4744d2c4],
		.cards-floor .floor-brand .btn span[data-v-4744d2c4] {
			background-color: #33d757
		}
		.cards-floor .floor-detail[data-v-4744d2c4] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex
		}
		.cards-floor .floor-detail li[data-v-4744d2c4] {
			border-left: 1px solid #eee;
			padding-top: 24px;
			height: 100%;
			width: 33%;
			text-align: center
		}
		.cards-floor .floor-detail li .img[data-v-4744d2c4] {
			height: 220px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center
		}
		.cards-floor .floor-detail li .img img[data-v-4744d2c4] {
			max-width: 80%;
			max-height: 80%
		}
		.cards-floor .floor-detail li .info[data-v-4744d2c4] {
			display: inline-block;
			text-align: left;
			min-width: 220px
		}
		.cards-floor .floor-detail li .info h4[data-v-4744d2c4] {
			font-size: 24px;
			line-height: 40px;
			color: #666
		}
		.cards-floor .floor-detail li .info p[data-v-4744d2c4] {
			font-size: 16px;
			color: #555
		}
		.cards-floor .floor-detail li[data-v-4744d2c4]:first-child {
			border-left: none
		}
		.invest-floor .floor-brand[data-v-4744d2c4] {
			background: #9263de;
			background: -webkit-gradient(linear, left top, left bottom, from(#9263de), to(#ae83f4));
			background: linear-gradient(180deg, #9263de 0, #ae83f4)
		}
		.invest-floor .floor-brand .btn em[data-v-4744d2c4],
		.invest-floor .floor-brand .btn span[data-v-4744d2c4] {
			background-color: #9c6fe6
		}
		.invest-floor .floor-detail[data-v-4744d2c4] {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex
		}
		.invest-floor .floor-detail li[data-v-4744d2c4] {
			border-left: 1px solid #eee;
			height: 100%;
			width: 50%;
			text-align: center
		}
		.invest-floor .floor-detail li h2[data-v-4744d2c4] {
			font-size: 28px;
			color: #555;
			padding-top: 38px;
			padding-bottom: 18px;
			line-height: 64px
		}
		.invest-floor .floor-detail li .rate[data-v-4744d2c4] {
			font-size: 60px;
			color: #ff7800;
			line-height: 72px
		}
		.invest-floor .floor-detail li .rate-tips[data-v-4744d2c4] {
			font-size: 18px;
			color: #3a4052;
			line-height: 28px
		}
		.invest-floor .floor-detail li p[data-v-4744d2c4] {
			font-size: 24px;
			color: #999;
			line-height: 40px;
			padding-top: 30px
		}
		.invest-floor .floor-detail li p span[data-v-4744d2c4] {
			color: #3a4052
		}
		.invest-floor .floor-detail li[data-v-4744d2c4]:first-child {
			border-left: none
		}
	}
	
	@media only screen and (max-width:768px) {
		.floor-content[data-v-4744d2c4] {
			padding-bottom: 28px
		}
		.floor .floor-brand[data-v-4744d2c4] {
			height: 24px;
			margin: 0 12px;
			line-height: 24px;
			margin-bottom: 6px
		}
		.floor .floor-brand h4[data-v-4744d2c4] {
			color: #333;
			font-size: 12px;
			font-weight: 700;
			position: relative;
			padding-left: 16px
		}
		.floor .floor-brand h4[data-v-4744d2c4]:before {
			display: block;
			content: "";
			position: absolute;
			width: 12px;
			height: 12px;
			top: 6px;
			left: 0;
			background-size: 100%;
			background-position: 50%;
			background-repeat: no-repeat;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcpJREFUeNpijD85l4HagAmJrQrEa4H4IxD/JxF/hOoFmcHAAjVQHYhPALEAmY7jA+IgIHYCYguYS9soMBAZgMxogxnqQsUgdWNBcj5WYCOiymAhrMSgwy8N5l/99Izh1Nv7DAdf38SlhYcFlwwbEzNDnqoL3LCH394y/Pn3l0GbTwqMrUSUGfpv7Wb48fc33thHAcXq7nADQaD9+jaG5mtb4Hx1XgmGcg1PgkkKDkDeBWlCBrwsHAyczGwoYorcIgzOYprEGeoiroUh9h8IWYFBgg4cxNQxxLCGqSQHP4bYz79/GL79/QVO6YxI4sLsPMS5lJGREUPMT9qA4e//fww555aCUwBcLbFh+vLHJwwxV2CQlAIj7+ufnwzdN3aALQCB97++EWfo3pfXscaqNjA1TDOOYagAxjozI0QrtvSK1dAjb24zPPj6BqvBXMAUoMEnCWY/+/6BYeeLq8Sn006gF299fokzL94HWgpKu9gAzhz1HRjTbde3gsPSTFiRQYwdkpNf//zMcObdA4YdL67gtBBm6Cdc+X/3y2tgTAL4AvP+HiqWUrtghlYD8QcqGAgyoxpm6A1QlgfidUD8mQzDPkP1gsy4ARBgANAmj39ibNTkAAAAAElFTkSuQmCC)
		}
		.floor .floor-brand .btn[data-v-4744d2c4],
		.floor .floor-brand p[data-v-4744d2c4] {
			display: none
		}
		.floor .floor-detail[data-v-4744d2c4] {
			height: 176px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			padding: 0 6px;
			overflow-x: scroll;
			padding-bottom: 20px
		}
		.floor .floor-detail li[data-v-4744d2c4] {
			height: 100%;
			width: 130px;
			text-align: center;
			background: #fff;
			margin: 0 6px;
			min-width: 130px;
			-webkit-box-shadow: 0 8px 14px 2px rgba(178, 187, 203, .2);
			box-shadow: 0 8px 14px 2px rgba(178, 187, 203, .2)
		}
		.floor .floor-detail a[data-v-4744d2c4] {
			display: block
		}
		.floor .floor-detail .more[data-v-4744d2c4] {
			text-align: center;
			margin-right: 12px;
			padding-top: 56px
		}
		.floor .floor-detail .more .icon[data-v-4744d2c4] {
			background-image: url(https://r.51gjj.com/webpublic/img/more.8a7ffc6.png);
			width: 22px;
			height: 22px;
			background-size: 100%;
			margin: 0 auto
		}
		.floor .floor-detail .more p[data-v-4744d2c4] {
			font-size: 11px;
			color: #5281e7;
			padding: 0;
			line-height: 28px
		}
		.loan-floor .box-1[data-v-4744d2c4],
		.stage-floor .box-1[data-v-4744d2c4] {
			display: none
		}
		.loan-floor .box-2[data-v-4744d2c4],
		.stage-floor .box-2[data-v-4744d2c4] {
			padding-top: 18px
		}
		.loan-floor .box-2 .img[data-v-4744d2c4],
		.stage-floor .box-2 .img[data-v-4744d2c4] {
			height: 62px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center
		}
		.loan-floor .box-2 .img img[data-v-4744d2c4],
		.stage-floor .box-2 .img img[data-v-4744d2c4] {
			max-width: 80%;
			max-height: 80%
		}
		.loan-floor .box-2 h4[data-v-4744d2c4],
		.stage-floor .box-2 h4[data-v-4744d2c4] {
			height: 24px;
			line-height: 16px;
			text-align: center;
			color: #010101;
			font-size: 10px;
			padding-bottom: 8px
		}
		.loan-floor .box-2 .info[data-v-4744d2c4],
		.stage-floor .box-2 .info[data-v-4744d2c4] {
			height: 30px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			margin: 0 12px
		}
		.loan-floor .box-2 .info .c[data-v-4744d2c4],
		.stage-floor .box-2 .info .c[data-v-4744d2c4] {
			width: 50%;
			text-align: center
		}
		.loan-floor .box-2 .info .c h5[data-v-4744d2c4],
		.stage-floor .box-2 .info .c h5[data-v-4744d2c4] {
			font-size: 13px;
			color: #ff7800;
			height: 18px;
			line-height: 18px
		}
		.loan-floor .box-2 .info .c h5 span[data-v-4744d2c4],
		.stage-floor .box-2 .info .c h5 span[data-v-4744d2c4] {
			font-size: 9px
		}
		.loan-floor .box-2 .info .c p[data-v-4744d2c4],
		.stage-floor .box-2 .info .c p[data-v-4744d2c4] {
			height: 12px;
			line-height: 12px;
			font-size: 8px;
			color: #999
		}
		.stage-floor .floor-brand h4[data-v-4744d2c4]:before {
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcpJREFUeNpijD85l4HagAmJrQrEa4H4IxD/JxF/hOoFmcHAAjVQHYhPALEAmY7jA+IgIHYCYguYS9soMBAZgMxogxnqQsUgdWNBcj5WYCOiymAhrMSgwy8N5l/99Izh1Nv7DAdf38SlhYcFlwwbEzNDnqoL3LCH394y/Pn3l0GbTwqMrUSUGfpv7Wb48fc33thHAcXq7nADQaD9+jaG5mtb4Hx1XgmGcg1PgkkKDkDeBWlCBrwsHAyczGwoYorcIgzOYprEGeoiroUh9h8IWYFBgg4cxNQxxLCGqSQHP4bYz79/GL79/QVO6YxI4sLsPMS5lJGREUPMT9qA4e//fww555aCUwBcLbFh+vLHJwwxV2CQlAIj7+ufnwzdN3aALQCB97++EWfo3pfXscaqNjA1TDOOYagAxjozI0QrtvSK1dAjb24zPPj6BqvBXMAUoMEnCWY/+/6BYeeLq8Sn006gF299fokzL94HWgpKu9gAzhz1HRjTbde3gsPSTFiRQYwdkpNf//zMcObdA4YdL67gtBBm6Cdc+X/3y2tgTAL4AvP+HiqWUrtghlYD8QcqGAgyoxpm6A1QlgfidUD8mQzDPkP1gsy4ARBgANAmj39ibNTkAAAAAElFTkSuQmCC)
		}
		.cards-floor .floor-brand h4[data-v-4744d2c4]:before {
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcpJREFUeNpijD85l4HagAmJrQrEa4H4IxD/JxF/hOoFmcHAAjVQHYhPALEAmY7jA+IgIHYCYguYS9soMBAZgMxogxnqQsUgdWNBcj5WYCOiymAhrMSgwy8N5l/99Izh1Nv7DAdf38SlhYcFlwwbEzNDnqoL3LCH394y/Pn3l0GbTwqMrUSUGfpv7Wb48fc33thHAcXq7nADQaD9+jaG5mtb4Hx1XgmGcg1PgkkKDkDeBWlCBrwsHAyczGwoYorcIgzOYprEGeoiroUh9h8IWYFBgg4cxNQxxLCGqSQHP4bYz79/GL79/QVO6YxI4sLsPMS5lJGREUPMT9qA4e//fww555aCUwBcLbFh+vLHJwwxV2CQlAIj7+ufnwzdN3aALQCB97++EWfo3pfXscaqNjA1TDOOYagAxjozI0QrtvSK1dAjb24zPPj6BqvBXMAUoMEnCWY/+/6BYeeLq8Sn006gF299fokzL94HWgpKu9gAzhz1HRjTbde3gsPSTFiRQYwdkpNf//zMcObdA4YdL67gtBBm6Cdc+X/3y2tgTAL4AvP+HiqWUrtghlYD8QcqGAgyoxpm6A1QlgfidUD8mQzDPkP1gsy4ARBgANAmj39ibNTkAAAAAElFTkSuQmCC)
		}
		.cards-floor .floor-detail li .img[data-v-4744d2c4] {
			height: 85px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center
		}
		.cards-floor .floor-detail li .img img[data-v-4744d2c4] {
			max-width: 80%;
			max-height: 80%
		}
		.cards-floor .floor-detail li .info[data-v-4744d2c4] {
			text-align: center
		}
		.cards-floor .floor-detail li .info h4[data-v-4744d2c4] {
			font-size: 12px;
			line-height: 24px;
			color: #666;
			padding-bottom: 4px;
			height: 28px
		}
		.cards-floor .floor-detail li .info .p1[data-v-4744d2c4],
		.cards-floor .floor-detail li .info .p2[data-v-4744d2c4],
		.cards-floor .floor-detail li .info h4[data-v-4744d2c4] {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap
		}
		.cards-floor .floor-detail li .info .p1[data-v-4744d2c4] {
			font-size: 8px;
			color: #555;
			line-height: 14px
		}
		.cards-floor .floor-detail li .info .p2[data-v-4744d2c4] {
			font-size: 8px;
			color: #999;
			line-height: 14px
		}
		.invest-floor .floor-brand h4[data-v-4744d2c4]:before {
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcpJREFUeNpijD85l4HagAmJrQrEa4H4IxD/JxF/hOoFmcHAAjVQHYhPALEAmY7jA+IgIHYCYguYS9soMBAZgMxogxnqQsUgdWNBcj5WYCOiymAhrMSgwy8N5l/99Izh1Nv7DAdf38SlhYcFlwwbEzNDnqoL3LCH394y/Pn3l0GbTwqMrUSUGfpv7Wb48fc33thHAcXq7nADQaD9+jaG5mtb4Hx1XgmGcg1PgkkKDkDeBWlCBrwsHAyczGwoYorcIgzOYprEGeoiroUh9h8IWYFBgg4cxNQxxLCGqSQHP4bYz79/GL79/QVO6YxI4sLsPMS5lJGREUPMT9qA4e//fww555aCUwBcLbFh+vLHJwwxV2CQlAIj7+ufnwzdN3aALQCB97++EWfo3pfXscaqNjA1TDOOYagAxjozI0QrtvSK1dAjb24zPPj6BqvBXMAUoMEnCWY/+/6BYeeLq8Sn006gF299fokzL94HWgpKu9gAzhz1HRjTbde3gsPSTFiRQYwdkpNf//zMcObdA4YdL67gtBBm6Cdc+X/3y2tgTAL4AvP+HiqWUrtghlYD8QcqGAgyoxpm6A1QlgfidUD8mQzDPkP1gsy4ARBgANAmj39ibNTkAAAAAElFTkSuQmCC)
		}
		.invest-floor .floor-detail li h2[data-v-4744d2c4] {
			font-size: 12px;
			color: #555;
			padding-top: 20px;
			line-height: 30px
		}
		.invest-floor .floor-detail li .rate[data-v-4744d2c4] {
			font-size: 18px;
			color: #ff7800;
			line-height: 36px
		}
		.invest-floor .floor-detail li .rate-tips[data-v-4744d2c4] {
			font-size: 8px;
			color: #3a4052;
			line-height: 12px
		}
		.invest-floor .floor-detail li p[data-v-4744d2c4] {
			font-size: 10px;
			color: #999;
			line-height: 16px;
			padding-top: 14px
		}
		.invest-floor .floor-detail li p span[data-v-4744d2c4] {
			color: #3a4052
		}
		.invest-floor .floor-detail li[data-v-4744d2c4]:first-child {
			border-left: none
		}
	}
	
	.banner[data-v-1f7a0a05] {
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: auto 100%
	}
	
	@media screen and (min-width:769px) {
		.banner[data-v-1f7a0a05] {
			height: 320px;
			color: #fff
		}
		.content[data-v-1f7a0a05] {
			position: relative;
			padding-top: 118px
		}
		.title[data-v-1f7a0a05] {
			font-size: 44px;
			line-height: 56px
		}
		.title[data-v-1f7a0a05]:before {
			content: "";
			display: block;
			width: 40px;
			height: 4px;
			background: #fff;
			position: relative;
			top: -12px
		}
		.tips[data-v-1f7a0a05] {
			font-size: 24px;
			line-height: 32px
		}
		.code[data-v-1f7a0a05] {
			position: absolute;
			top: 86px;
			right: 48px
		}
		.code h4[data-v-1f7a0a05] {
			font-size: 14px;
			color: #fafafa;
			white-space: nowrap;
			line-height: 36px;
			text-align: center
		}
		.code .img[data-v-1f7a0a05] {
			padding: 14px;
			width: 142px;
			height: 142px;
			background: #fff;
			margin: 0 auto
		}
		.code[data-v-1f7a0a05] img {
			width: 100%
		}
	}
	
	@media only screen and (max-width:768px) {
		.banner[data-v-1f7a0a05] {
			height: 120px;
			color: #fff;
			text-align: center;
			padding-top: 40px
		}
		.title[data-v-1f7a0a05] {
			font-size: 16px;
			line-height: 24px
		}
		.tips[data-v-1f7a0a05] {
			font-size: 9px;
			line-height: 18px
		}
	}
	
	@media only screen and (max-width:768px) {
		.down[data-v-40d8a0bb] {
			padding: 44px 0;
			background: #fff
		}
		.down .logo[data-v-40d8a0bb] {
			width: 64px;
			height: 64px;
			margin: 0 auto
		}
		.down h3[data-v-40d8a0bb] {
			padding-top: 12px;
			padding-bottom: 10px;
			color: #444;
			font-size: 14px;
			text-align: center
		}
		.down .button[data-v-40d8a0bb] {
			cursor: pointer;
			width: 140px;
			height: 32px;
			line-height: 32px;
			text-align: center;
			margin: 0 auto;
			color: #fff;
			font-size: 12px;
			background-color: #5281e7
		}
	}
	
	.newsReport {
		transform: translate3d(-1200px, 0px, 0px);
		transition-duration: 0ms;
	}
	
	.lookMore:hover {
		color: red;
	}
</style>