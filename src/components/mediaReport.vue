<template>
	<div data-v-419267d0="" class="news-page page-content mediaReport">
		<div class="space-4"></div>
		<div class="content">
			<div data-v-185e86cc="" class="banner" style="background-image: url(&quot;http://img.xindaikuangren.com/zhimahuahuaka_xinyongka.jpg&quot;); background-color: rgb(255, 255, 255);">
				<div data-v-185e86cc="" class="content">
					<div data-v-185e86cc="" class="title">信用卡咨询</div>
					<div data-v-185e86cc="" class="ibaner-line"></div>
				</div>
			</div>
		</div>
		<div class="news-list">
			<div class="content list-wrap">   
				<router-link :to="'/massageDetail/1/'+item.id+'/4'" target="_blank"  v-if="mediaReportList.length!=''"  v-loading="mediaReportList.length==''"  v-for = 'item in (mediaReportList.slice(0, currpage * pageSize))'  :key="item.id"  >
					<div class="news-item">
						<div class="news-pic"><img :src="item.aimage.icon[0]"></div>
						<div class="news-con">
							<div class="news-title">{{item.atitle}}</div>
							<div class="news-from"><span>焦点巴巴金融</span>&nbsp;|&nbsp;<span>{{item.atime}}</span></div>
							<div class="news-desc">{{item.acontent}}</div>
						</div>
					</div>
				</router-link>
				
				<div class="show-more" @click="getMore()"><span>{{showTips}}</span></div>				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'mediaReport',
		created(){
			this.getMediaReport();
		},
		data() {
			return {
				currpage:1,
				pageSize:10,
                mediaReportList:[],
                showTips:'加载更多'
			}
		},
		methods: {
             getMediaReport(){
             	var _this = this;
             	$.ajax({
             		type:"post",
             		url:"http://ex.xindaikuangren.com/index/article/shouList",
             		data:{atype:'4'},
             		async:true,
             		success:function(res){
             			if(res.code == 200){
             				_this.mediaReportList = res.data;
             			}             			
             		},
             		error:function(err){
             			console.log(err)
             		}
             	});
             },
             getMore(){
             	var totail = this.currpage * this.pageSize;
             	if(totail >= this.mediaReportList.length){
             		this.showTips = '没有更多';
             		return false;
             	}else{
             		this.currpage ++ ;
             	}
             }           
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
	
	.news-page,
	.news-page .space-4 {
		width: 100%;
		margin: 0 auto;
	}
	
	.content {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.banner[data-v-185e86cc] {
		background-repeat: no-repeat;
		background-position: 50%;
	}
	
	.news-page .news-list {
		width: 100%;
		margin: 0 auto;
	}
	
	.news-page .news-list .content {
		padding-bottom: 120px;
		background: #fff;
	}
	
	.news-page .news-list .content .news-item {
		cursor: pointer;
		height: 276px;
		margin: 0 auto;
		border-bottom: 1px solid #eee;
		background: #fff;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 0;
	}
	
	.news-page .news-list .content .news-item .news-pic {
		width: 25.37%;
		height: 180px;
	}
	
	.news-page .news-list .content .news-item .news-pic img {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.news-page .news-list .content .news-item .news-con {
		text-align: left;
		width: 70.37%;
		height: 278px;
		padding: 50px 0 0;
	}
	
	.news-page .news-list .content .news-item .news-con .news-title {
		width: 100%;
		margin: 0 auto;
		max-height: 64px;
		line-height: 32px;
		font-size: 26px;
		color: #000;
		display: block;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.news-page .news-list .content .news-item .news-con .news-from {
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-size: 16px;
		color: #999;
		margin: 0 auto;
	}
	
	.news-page .news-list .content .news-item .news-con .news-desc {
		width: 100%;
		height: 72px;
		font-size: 16px;
		color: #666;
		line-height: 24px;
		display: block;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.news-page .news-list .content .show-more {
		width: 90%;
		height: 60px;
		text-align: center;
		line-height: 60px;
		font-size: 18px;
		color: #999;
		background: #f9fafb;
		margin: 0 auto;
		display: block;
		cursor: pointer;
	}
	
	@media screen and (min-width: 769px) {
		.news-page,
		.news-page .space-4 {
			width: 100%;
			margin: 0 auto;
		}
		.banner[data-v-185e86cc] {
			height: 320px;
			position: relative;
			color: #fff;
			padding-top: 110px;
			background-repeat: no-repeat;
			background-position: 50%;
			background-size: 100% 100%;
		}
		.title[data-v-185e86cc] {
			font-size: 44px;
			line-height: 48px;
			padding: 20px 0;
			text-align: center;
			color: #fff;
		}
		.ibaner-line[data-v-185e86cc] {
			width: 54px;
			height: 4px;
			background: #fff;
			margin: 0 auto;
		}
		.news-list {
			width: 100%;
			margin: 0 auto;
		}
		.news-list .list-wrap,
		.news-list .list-wrap .news-item {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-direction: normal;
			background: #fff;
		}
		.news-list .list-wrap {
			-webkit-box-orient: vertical;
			-ms-flex-direction: column;
			flex-direction: column;
			padding: 0 120px 120px;
		}
		.news-list .list-wrap .news-item {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			width: 100%;
			height: 276px;
			margin: 0 auto;
			border-bottom: 1px solid #eee;
			-webkit-box-orient: horizontal;
			-ms-flex-direction: row;
			flex-direction: row;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			padding: 0;
			cursor: pointer;
		}
		.news-list .list-wrap .news-item {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-direction: normal;
			background: #fff;
		}
		.news-list .news-item {
			width: 80%;
		}
		.news-list .list-wrap .news-item .news-pic {
			width: 25.37%;
			height: 180px;
		}
		.news-list .list-wrap .news-item .news-pic img {
			display: block;
			width: 100%;
			height: 100%;
		}
		.news-list .list-wrap .news-item .news-con {
			text-align: left;
			width: 70.37%;
			height: 278px;
			padding: 50px 0 0;
		}
		.news-list .list-wrap .news-item .news-con .news-title {
			width: 100%;
			margin: 0 auto;
			max-height: 64px;
			line-height: 32px;
			font-size: 26px;
			color: #000;
			display: block;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.news-list .list-wrap .news-item .news-con .news-from {
			width: 100%;
			height: 40px;
			line-height: 40px;
			font-size: 16px;
			color: #999;
			margin: 0 auto;
		}
		.news-list .list-wrap .news-item .news-con .news-desc {
			width: 100%;
			height: 72px;
			font-size: 16px;
			color: #666;
			line-height: 24px;
			display: block;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.news-list .list-wrap .show-more {
			width: 90%;
			height: 60px;
			text-align: center;
			line-height: 60px;
			font-size: 18px;
			color: #999;
			background: #f9fafb;
			margin: 0 auto;
			display: block;
			cursor: pointer;
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
	}
</style>