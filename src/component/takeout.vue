<template>
	<div class="takeout_index">
		<mt-swipe :auto="4000">
	      <mt-swipe-item class="slide1"><img src="../assets/img/banner1.jpg"></mt-swipe-item>
	      <mt-swipe-item class="slide2"><img src="../assets/img/banner2.jpg"></mt-swipe-item>
	      <mt-swipe-item class="slide3"><img src="../assets/img/banner3.jpg"></mt-swipe-item>
	    </mt-swipe>
	    <ul class="menu_list">
		    	<li><img src="../assets/img/cate.png">美食</li>
		    	<li><img src="../assets/img/drink.png">甜品饮品</li>
		    	<li><img src="../assets/img/sweetmeats.png">鲜花蛋糕</li>
		    	<li><img src="../assets/img/raw_vegetables.png">蔬果生鲜</li>
		    	<li><img src="../assets/img/hamburger.png">汉堡薯条</li>
		    	<li><img src="../assets/img/new_shop.png">新店特惠</li>
		    	<li><img src="../assets/img/zhl.png">准时达</li>
		    	<li><img src="../assets/img/high_tea.png">下午茶</li>
		    	<li><img src="../assets/img/late_snack.png">夜宵</li>
		    	<li><img src="../assets/img/shop.png">商超便利</li>
	   </ul>
	</div>
</template>
<script type="text/babel">
  export default {
    data () {
	    	return {
			aaa:"1"	
    		}
	},
    methods: {
 		
    },
    mounted :function() {
    		console.info(this.aaa);
    		console.info(this.$store.state.count);
    }
  }
</script>
<style type="text/css" src='../assets/css/takeout_style.scss'></style>