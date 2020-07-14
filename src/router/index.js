import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Product from '@/components/product'
import CompanyProfile from '@/components/companyProfile'
import MediaReport from '@/components/mediaReport'
import ContactUs from '@/components/contactUs'
import JoinUs from '@/components/joinUs'
import ConsultingService from '@/components/consultingService'
import MassageDetail from '@/components/massageDetail'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
    mode:'hash',
	routes: [
	    {
	    	path:'/',
	    	name:'home',
	    	component:Home
	    },{
	    	path:'/product',
	    	name:'product',
	    	component:Product
	    },{
	    	path:'/companyProfile',
	    	name:'companyProfile',
	    	component:CompanyProfile
	    },{
	    	path:'/mediaReport',
	    	name:'mediaReport',
	    	component:MediaReport
	    },{
	    	path:'/contactUs',
	    	name:'contactUs',
	    	component:ContactUs
	    },{
	    	path:'/joinUs',
	    	name:'joinUs',
	    	component:JoinUs
	    },{
	    	path:'/consultingService',
	    	name:'consultingService',
	    	component:ConsultingService
	    },{
	    	path:'/massageDetail/:num/:id/:atype',
	    	name:'massageDetail',
	    	component:MassageDetail
	    },{
	    	path:'*',
	    	name:'error',
	    	component:Error
	    }
	],
	scrollBehavior (to, from, savedPosition) {
	    // return 期望滚动到哪个的位置
	    return { x: 0, y: 0 }
	}
})
