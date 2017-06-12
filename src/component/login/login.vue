<template>
	<div class="login_body">
		<!--<router-link to='/mycount'><div class="header_back">《<span>返回</span></div></router-link>-->
		<header-page></header-page>
		<form method="post">
			<div>
				用户名：<mu-text-field hintText="请输入用户名" v-if='name' type="text" @blur="make_sure" v-model="username" name='user'/>
				<mu-text-field hintText="请输入用户名" errorText="请输入正确的用户名" v-else='name' type="text" @blur="make_sure" name='user' v-model="username"/>
				<router-link to='/register' class='register_to'>立即注册</router-link>
			</div>
		  	<div>
		  	 密&nbsp;&nbsp;&nbsp;&nbsp;码：<mu-text-field v-if='pd' name='pwd' v-model="userpd" hintText="请输入密码" type="password" @blur="make_sure"/>
		  	 <mu-text-field v-else v-model="userpd" name='pwd' hintText="请输入密码" errorText="请输入正确的密码" type="password" @blur="make_sure"/>
		  	</div>
	  		<mu-raised-button label="登录" class="demo-raised-button btn" @click="goto_mycount" primary/>
		</form>
		
	</div>
</template>

<script>
export default {
  data () {
    return {
      dataSource: [],
      warn_p:'用户名',
      dialog:false,
      pd:true,
      name:true,
      username:null,
      userpd:null
    }
  },
  methods: {
    make_sure(dom){
    		var ck_name = new RegExp('^[A-Za-z]{6,12}$');
    		var ck_pwd = new RegExp('^[A-Za-z0-9]{6,12}$');
    		if(dom.target.name == 'user'){
    			if(this.username == null|| !ck_name.test(this.username)){
    				this.name = false
    			}
    		}else if(dom.target.name == 'pwd'){
    			if(this.userpd == null || !ck_pwd.test(this.userpd)){
    				this.pd =false
    			}
    		}
    },
    goto_mycount(){
    		this.$http.get('../../src/assets/data/login.json').then((data)=>{
    			var data_every=data.body.data;
    			var pwd=null;
    			for(var every of data_every){
    				if(this.username == every.name){
    					pwd = every.password;
    					break;
    				}else{
    					this.name = false;
    				}
    			}
    			console.info(pwd+"outer");
  			if(this.userpd != pwd||pwd ==null){
  				this.pd =false;
  			}else{
				localStorage.setItem("username",this.username);
				localStorage.setItem("userId",this.userpd );
				this.$store.commit("already_login");
				this.$router.go(-1);
  			}
    	});
    }
  },
  
}
</script>
<style type="text/css" src='../../assets/css/login_style.scss'></style>