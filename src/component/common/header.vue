<template>
	<div class="header_back" @click='go_back'>《<span>返回</span></div>
</template>
<script>
export default{
	data (){
		return {
			
		}
	},
	methods: {
		go_back(){
			if(this.$store.state.reg == 1){
				this.$router.go(-1);
			}else{
				this.$router.push("/mycount");
			}
	   	}
		
	}
}
</script>
<style type="text/css" src='../../assets/css/common_style.scss'></style>
