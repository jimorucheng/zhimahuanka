<template>
  <div id="app">
      <Head></Head>
      <div class="main" style="margin-top: 80px;">
           <router-view></router-view>
      </div>
      <Foot></Foot>
  </div>
</template>

<script>
	import Head from '@/components/header';
	import Foot from '@/components/footer';
export default {
  name: 'App',
  data(){
  	return{
  		
  	}
  },
  components:{
  	 'Head':Head,
  	 'Foot':Foot
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
</style>
