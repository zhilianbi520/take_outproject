<template>
	<div class="mycount">
		<!--<router-link to='/login'>-->
			<div class="mycount_top" @click='go_page'>
				<span class="login_head"></span>
				<div class="login_link">
					<h2>{{ login_text }}</h2>
					<p>{{ loginp }}</p>
				</div>
				<i class='go_login iconfont'>&#xf0136;</i>
			</div>
		<!--</router-link>-->
		<div class="mycount_body">
			<div class="borderRight"><router-link to='/integral'><i class="iconfont">&#xe648;</i>积分</router-link></div>
			<div><router-link to='/integral'><i class="iconfont">&#xe6e6;</i>优惠</router-link></div>
		</div>
		<div class="mycount_bottom">
			<router-link to='/setting'><div class="mycount_bt"><i class="iconfont">&#xe658;</i>设置</div></router-link>
			<div><i class="iconfont">&#xe9aa;</i>关于我们</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data (){
			return {
				login_text:"登录/注册",
				loginp:"登录后享受更多特权"
			}
		},
		mounted:function(){
			console.info(this.$store.state.count);
			if(this.$store.state.count == 1){
				this.login_text =localStorage.getItem("username");
				this.loginp = "您已成功登陆，请去首页下单～";
			}
		},
		methods:{
			go_page(){
				if(this.$store.state.count == 0){
					this.$router.push("/login")
				}else if(this.$store.state.count == 1){
					this.$router.push("/basic_information")
				}
			}
		}
	}
</script>
<style type="text/css" src='../assets/css/mycount.scss'></style>