<template>
	<div>
		<header-page></header-page>
		<div class="basic_inforbody">
			<div class="userId">用户ID：{{ userId }}</div>
			<div class="username">用户名称：{{ username }}</div>
			<mu-raised-button label="注销登陆" class="demo-raised-button btn" @click="clear_count" primary/>
		</div>
	</div>
</template>

<script>
export default{
	data (){
		return {
			userId:null,
			username:null
		}
	},
	mounted :function(){
		this.userId = localStorage.getItem('userId');
	    this.username = localStorage.getItem('username');
	},
	methods: {
	    clear_count(){
	    		localStorage.removeItem("userId");
	    		localStorage.removeItem("username");
	    		this.$store.state.count = 0;
	    		this.$router.go(-1);
	    }
	}
}
</script>
<style lang="sass" scoped="">
	@import "../../assets/css/basic_information.scss"
</style>
