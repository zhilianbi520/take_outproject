<template>
	<div>
		<header-page></header-page>
		<form method="post">
			<div>
				<component :is="currentView"></component><span @click="switch_way">{{ cut_way }}</span>
			</div>
			<div>
				<div>密&nbsp;&nbsp;&nbsp;&nbsp;码：<mu-text-field v-model="userId" hintText="请输入密码" type="password"/></div>
			</div>
			<div>
				<mu-raised-button label="注册" class="demo-raised-button btn" @click="goto_mycount" primary/>
			</div>
		</form>
	</div>
</template>
	
<script>
var phone_reg= {
	template :'<div>手机号：<mu-text-field hintText="请输入手机号码" type="text" @blur="get_user" name="user"/></div>',
	methods:{
		get_user: function(){
			this.$store.state.regname = this.$children[0].$refs.input.value;
		}
	}
}
var username_reg ={
	template :'<div>用户名：<mu-text-field hintText="请输入用户名" type="text" @blur="get_user" name="user"/></div>',
	methods:{
		get_user: function(){
			this.$store.state.regname = this.$children[0].$refs.input.value;	
		}
	}	
}
export default {
  data () {
    return {
      currentView:"phonereg",
      cut_way:"用户名注册",
      username:null,
      users:null,
      userId:null
    }
  },
  methods: {
    switch_way :function(){
    		if(this.currentView == "phonereg"){
    			this.currentView = "username";
    			this.cut_way ="手机号注册";
    		}else{
    			this.currentView = "phonereg";
    			this.cut_way ="用户名注册";
    		}
    },
    goto_mycount:function(){
    		console.info(this.$store.state.regname);
  		localStorage.setItem("username",this.$store.state.regname);
  		localStorage.setItem("userId",this.userId);
    		this.$store.commit("already_login");
    		this.$router.push("/mycount");
    }
  },
  components:{
	"phonereg" : phone_reg,
	"username" : username_reg
  }
}
</script>

<style lang="sass">
	@import "../../assets/css/register.scss"
</style>