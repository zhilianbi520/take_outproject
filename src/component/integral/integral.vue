<template>
	<div class="integral_body">
		<router-link to='/mycount'><div class="integral_top">
			<div class="back_arrow"></div>
			<div class="integral_title">我的积分</div>
			<div></div>
		</div></router-link>
		<div v-if='adsum'>
			<p>暂无积分记录</p>
		</div>
		<div v-else>
			<ul class="list_body">
				<li class="it_list" v-for="item in list_data">
					<span class="itlist_left">
						<span class="list_day">{{ item.list_day }}</span>
						<span class="list_time">{{ item.list_time }}</span>
					</span>
					<i class='iconfont icon-jifen'><span class='list_name'>{{ item.list_name }}</span></i>
					<span class="itlist_count">{{ item.itlist_count }}</span>
				</li>
			</ul>
		</div>
		<div>
		  <mu-dialog :open="dialog" title="">
		    对不起,我挂了，请稍后再来~！
		  </mu-dialog>
		</div>
	</div>
</template>

<script>
export default{
	data (){
		return {
			integral:"积分页面",
			adsum:true,
			have_login:false,
			dialog:false,
			list_data:[]
		}
	},
	mounted:function(){
		if(this.$store.state.count == 1){
			this.have_login = true;
		}
		if(this.have_login){
			this.adsum = false;
			let arr =this.list_data;
			this.$http.get('../../src/assets/data/integral.json').then((data)=>{
				const data_code=data.data.code;
				const data_body=data.data.data;
				if(data_code== 200){
					console.info(data_body);
					data_body.filter(function(main,index){
						arr.push(main);
					});
					for(let i=0;i<arr.length;i++){
					 for(let j=i;j<arr.length;j++){
					    if(arr[i].it_order > arr[j].it_order){
					    		let flag;
					    		flag = arr[i];
					    		arr[i]= arr[j];
					    		arr[j]= flag;
					   }
					 }
					}
				}else{
					this.open();
					setTimeout(()=>{
						this.dialog =false;
					},3000);
				}
			});
			console.info(this.list_data);
		}
	},
	methods:{
		open () {
	      this.dialog = true
	 	},
	 	return_back (){
	 		
	 	}
	}
}
</script>
<style type="text/css" src='../../assets/css/integral.scss'></style>