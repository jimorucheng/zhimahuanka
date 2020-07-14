<template>
	<div class="news-page page-content consultingService" data-v-419267d0="">
		<div class="banner b2" style="background-image:url(http://img.xindaikuangren.com/vlODfD88uag7p.png);background-color:transparent;" data-v-185e86cc="">
			<div class="content" data-v-185e86cc="">
				<div class="title" data-v-185e86cc="">全面、最贴心的金融资讯服务</div>
				<div class="ibaner-line" data-v-185e86cc=""></div>
			</div>
		</div>
		<div class="news-list">
			<div class="content">
				<div class="list-tab">
					<el-tabs v-model="activeName1" type="card" @tab-click="handleClick">
						<el-tab-pane label="公积金栏目" name="first">
							<router-link tag='a' :to="'/massageDetail/2/'+item.id+'/3'" class="news-item" v-for="item in (gjjMassageLists.slice((currpage - 1) * pageSize, currpage * pageSize))" v-if="gjjMassageLists.length!='' " v-loading="gjjMassageLists.length==''" :key="item.id">
								<div class="news-pic"><img :src="item.aimage.icon[0]"  :title="item.atitle"></div>
								<div class="news-con">
									<div class="news-title">{{ item.atitle }}</div>
									<div class="news-from">焦点巴巴金融 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.rnum }}人阅读</div>
									<div class="news-desc"> {{ item.acontent }}</div>
								</div>
							</router-link>
							<el-pagination
							  background
							  layout="prev, pager, next"
							  :total="gjjMassageLists.length" :page-size='pageSize'
							  @current-change="handleCurrentChange">
							</el-pagination>
						</el-tab-pane>
						<el-tab-pane label="社保栏目" name="second">
							<router-link tag='a' :to="'/massageDetail/2/'+item.id+'/2'" class="news-item" v-for="item in (sbMassageLists.slice((currpage1 - 1) * pageSize, currpage1 * pageSize))"  v-if="sbMassageLists.length!=''"  v-loading="sbMassageLists.length==''" :key="item.id">
								<div class="news-pic"><img :src="item.aimage.icon[0]"  :title="item.atitle"></div>
								<div class="news-con">
									<div class="news-title">{{ item.atitle }}</div>
									<div class="news-from">焦点巴巴金融 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.rnum }}人阅读</div>
									<div class="news-desc"> {{ item.acontent }}</div>
								</div>
							</router-link>
							<el-pagination
							  background
							  layout="prev, pager, next"
							  :total="sbMassageLists.length" :page-size='pageSize'
							  @current-change="handleCurrentChange1">
							</el-pagination>
						</el-tab-pane>
						<el-tab-pane label="房产栏目" name="third">
							<router-link tag='a' :to="'/massageDetail/2/'+item.id+'/6'" class="news-item" v-for="item in (fcMassageLists.slice((currpage2 - 1) * pageSize, currpage2 * pageSize))"  v-if="fcMassageLists.length!=''"  v-loading="fcMassageLists.length==''" :key="item.id">
								<div class="news-pic"><img :src="item.aimage.icon[0]"  :title="item.atitle"></div>
								<div class="news-con">
									<div class="news-title">{{ item.atitle }}</div>
									<div class="news-from">焦点巴巴金融 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.rnum }}人阅读</div>
									<div class="news-desc"> {{ item.acontent }}</div>
								</div>
							</router-link>
							<el-pagination
							  background
							  layout="prev, pager, next"
							  :total="fcMassageLists.length" :page-size='pageSize'
							  @current-change="handleCurrentChange2">
							</el-pagination>
						</el-tab-pane>				
					</el-tabs>
				</div>				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'consultingService',
		created(){
			this.getGjjMassageLists();
			this.getSbMassageLists();
			this.getFcMassageLists();
		},
		data() {
			return {				
				activeName1: 'first',
				currpage:1,
				currpage1:1,
				currpage2:1,
				gjjMassageLists:[],
				sbMassageLists:[],
				fcMassageLists:[],
				pageSize:6
			}
		},
		methods: {
			handleClick(tab, event) {
			},
			handleCurrentChange(currentPage){
				this.currpage = currentPage;
			},
			handleCurrentChange1(currentPage){
				this.currpage1 = currentPage;
			},
			handleCurrentChange2(currentPage){
				this.currpage2 = currentPage;
			},
			getGjjMassageLists(){
				var _this = this;
				$.ajax({
					type:"post",
					url:"http://ex.xindaikuangren.com/index/article/shouList",
					async:true,
					data:{atype:'3'},
					success:function(res){
						if(res.code == 200){
							_this.gjjMassageLists = res.data;
						}
					}
				});				
			},
			getSbMassageLists(){
				var _this = this;
				$.ajax({
					type:"post",
					url:"http://ex.xindaikuangren.com/index/article/shouList",
					async:true,
					data:{atype:'2'},
					success:function(res){
						if(res.code == 200){
							_this.sbMassageLists = res.data;
						}
					}
				});				
			},
			getFcMassageLists(){
				var _this = this;
				$.ajax({
					type:"post",
					url:"http://ex.xindaikuangren.com/index/article/shouList",
					async:true,
					data:{atype:'6'},
					success:function(res){
						if(res.code == 200){
							_this.fcMassageLists = res.data;
						}
					}
				});				
			},
		},
		
	}
</script>
<style type="text/css">
	.el-tabs--card>.el-tabs__header {
		border: none!important;
	}
	
	.el-tabs--card>.el-tabs__header .el-tabs__nav {
		border: none!important;
	}
	
	.el-tabs__item {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		display: inline-block;
		margin-right: 20px;
		list-style: none;
		position: relative;
		color: #666;
		font-size: 18px;
		border: 1px solid transparent;
		height: 40px;
		line-height: 38px;
		padding: 0 12px;
		margin: 0 15px;
		border-radius: 20px;
		min-width: 112px;
		text-align: center;
		cursor: pointer;
		border: none!important;
	}
	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
	    border: 1px solid #efefef!important;
	}
	.el-pagination{padding: 20px 280px !important;}
</style>
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
	
	.banner[data-v-185e86cc] {
		background-repeat: no-repeat;
		background-position: 50%;
	}
	
	.content {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.news-page .news-list .content {
		padding-bottom: 120px;
		background: #fff;
	}
	
	.news-page .news-list {
		width: 100%;
		margin: 0 auto;
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
	
	@media screen and (min-width: 769px) {
		.banner[data-v-185e86cc] {
			height: 320px;
			position: relative;
			color: #fff;
			padding-top: 110px;
			background-repeat: no-repeat;
			background-position: 50%;
			background-size: auto 100%;
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
		.list-tab {
			padding-top: 96px;
			width: 80%;
			margin: 0 auto;
		}
		.list-tab ul {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
		}
		.list-tab li.cur {
			border: 1px solid #efefef;
		}
		.list-tab li {
			color: #666;
			font-size: 18px;
			border: 1px solid transparent;
			height: 40px;
			line-height: 38px;
			padding: 0 12px;
			margin: 0 15px;
			border-radius: 20px;
			min-width: 112px;
			text-align: center;
			cursor: pointer;
		}
		/*.news-list .news-item {
			width: 80%;
		}*/
	}
</style>