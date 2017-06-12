<template>
	<div style='overflow-y:scroll'>
		<div v-if='dateShow' class="demo-infinite-container" ref="list" v-bind:style='{height: outerHeight +"px"}'>
		  	<mu-list>
			   <template v-for="item in list">
			      <mu-list-item :title="item.title" :describeLine ="2">
			      	<mu-avatar :src="item.imgsrc" slot="leftAvatar"/>
				      <span slot="describe">
				      	{{ item.list_p }}
				      </span>
				      <span>作者：{{ item.author }}</span>
				      <span>阅读量：{{ item.amount }}</span>
				      <span style='float: right;margin-right:5px'>{{ item.tag[0] }} {{ item.tag[1] }} {{ item.tag[2] }}</span>
			      </mu-list-item>
			      <mu-divider/>
			    </template>
		  	</mu-list>
	  		<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
		</div>
		<div v-else>
		   <p>服务器挂啦~！！请稍后重试~~！！么么哒~</p>
		</div>
	    <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
	      direction="lt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
	      style="right:20px;">
	      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)">1</div>
	      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)">2</div>
	      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)">3</div>
	    </mt-palette-button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data (){
			const list = [{
			"imgsrc" : "src/assets/img/list1.jpg",
			"title" : "支付宝一夜大变样，都是社交情结闹得！",
			"list_p": "“圈子”是支付宝和合作伙伴一起在社群上启动的一次尝试。主要分为公开型和封闭型两大类：前者在在支付宝里搜索就能进入，后者是必须要收到邀请的才可以。目前上线的圈子主要有健身，游戏，理财，母婴，宠物，数码等类型，未来还会逐渐扩大品类。之所以要启动类似“圈子”的尝试，是因为我们发现在中国一直没有一个特别适合社群运营的产品形态，并且社群圈子也一直缺少一个让人和人之间建立信任的介质。我们认为支付宝的实名和信用体系有着天然的优势，并且基于对4.5亿用户的画像能够更加精准的聚拢有相同爱好，共同需求的人。此外，依托于淘宝、口碑等成熟的商业生态，社群的运营者能够方便找到更合适的商业模式。未来“圈子”会是一个开放平台，支付宝也会开放更多的基础能力给到合作伙伴，让更多的社群运营者一起来尝试和探索，打造基于实名信用的同类人互动共享社群，给用户更有归属感的体验。在支付宝“圈子”内，对于发布含有色情，人身攻击，明显广告信息等违规言论的行为，圈子管理员有权删除其动态，对账号做禁言，甚至拉黑账号处理。目前圈子会根据类型控制加入门槛，甚至分享和评论权限。我们的合作伙伴的管理团队，也会针对一些不合规范的照片进行严格处理。",
			"author":"周小孩儿",
			"amount":"99+",
			"tag":["娱乐","偶像","音乐"]
		},
		{
			"imgsrc" : "src/assets/img/list2.jpg",
			"title" : "你的微信群叫什么名字？",
			"list_p" : "写这篇文章的初衷是因为我们今天要建一个群。主页君想了半天，不知道叫什么名字好。和漫天飘的表情包一样，微信群名已经成为了我们互相撩打的第二战线。怎样取名才能表现出我们的气质独特、洒脱不羁，又能在联系表里脱颖而出呢？经纬内部有非常多的群，这也是为什么主页君再也想不出一个好名字的原因，因为实在太——多——了。就拿主页君来说，我们永远都会有一个叫做“吃完饭立即解散”的群，然而这样的群现在已经有一百多个了……倒是来个人解散一下啊！",
			"author":"常橙橙",
			"amount":"999+",
			"tag":["视频","项目","管理"]
		},
		{
			"imgsrc" : "src/assets/img/list3.jpg",
			"title" : "登月背后：这个程序媛把人类送上月球",
			"list_p" : "她的代码指引着他们准确飞向月球，又引导着他们平安返回地面——她就是玛格丽特·汉密尔顿（Margaret Hamilton），刚被授予美国的总统自由勋章。我们的女神一开始并不写代码，但为了供丈夫去读哈佛法学院，她就找到了一份临时的编码工作，地点是麻省理工学院的人工智能实验室。当黑客们正尝试让 TX-0 输出巴赫的旋律时，玛格丽特就在 PDP-1 上帮助气象学研究对大气进行建模；当黑客们在 PDP-1 上沉迷于《太空大战》游戏时，女神开始为美国空军的 SAGE 系统编写防空软件。当黑客们的「午夜计算机改装组织」为 PDP-6 改装不兼容分时系统时，女神已经开始为阿波罗飞船编写导航软件，女神的女儿还要跟着她在实验室的地板上睡觉、玩耍。",
			"author":"程小晨",
			"amount":"99+",
			"tag":["范儿","娱乐","逗逼"]
		},
		{
			"imgsrc" : "src/assets/img/list4.jpg",
			"title" : "周笔畅“游”出万张作品",
			"list_p" : "在昨天的开幕式上不仅有周笔畅音乐上的知音梁翘柏助阵，还有摄影专业人士到场，面对“挑剔”的专家周笔畅丝毫没有怯场，大方介绍自己的作品。“为这次摄影展我准备了近三年的时间，工作外的大部分时间都带着相机远行拍摄作品。”不管是西班牙、法国、芬兰等旅游胜地，还是北极、冰岛、留尼汪等高难度自由行的地区，都留下过周笔畅的足迹，“两台相机再加三脚架，超过十几斤重，有时候为了取一个景我会扛着它们徒步十公里。”周笔畅不无自豪地称她曾在狂风肆虐的冰岛徒步一个小时等待飞机残骸的最佳美景，还曾胆战心惊在滑翔伞上拍摄，“我喜欢摄影很久了，用摄影的视角来传达对世界的认知是一件非常有趣的事。三年累积了近万张作品，终于才有了这次摄影展。”据悉，这次影展将一直持续到本周日。",
			"author":"周笔畅",
			"amount":"850",
			"tag":["爱豆","活祖宗","音乐"]
		},{
			"imgsrc" : "src/assets/img/list1.jpg",
			"title" : "支付宝一夜大变样，都是社交情结闹得！",
			"list_p": "“圈子”是支付宝和合作伙伴一起在社群上启动的一次尝试。主要分为公开型和封闭型两大类：前者在在支付宝里搜索就能进入，后者是必须要收到邀请的才可以。目前上线的圈子主要有健身，游戏，理财，母婴，宠物，数码等类型，未来还会逐渐扩大品类。之所以要启动类似“圈子”的尝试，是因为我们发现在中国一直没有一个特别适合社群运营的产品形态，并且社群圈子也一直缺少一个让人和人之间建立信任的介质。我们认为支付宝的实名和信用体系有着天然的优势，并且基于对4.5亿用户的画像能够更加精准的聚拢有相同爱好，共同需求的人。此外，依托于淘宝、口碑等成熟的商业生态，社群的运营者能够方便找到更合适的商业模式。未来“圈子”会是一个开放平台，支付宝也会开放更多的基础能力给到合作伙伴，让更多的社群运营者一起来尝试和探索，打造基于实名信用的同类人互动共享社群，给用户更有归属感的体验。在支付宝“圈子”内，对于发布含有色情，人身攻击，明显广告信息等违规言论的行为，圈子管理员有权删除其动态，对账号做禁言，甚至拉黑账号处理。目前圈子会根据类型控制加入门槛，甚至分享和评论权限。我们的合作伙伴的管理团队，也会针对一些不合规范的照片进行严格处理。",
			"author":"周小孩儿",
			"amount":"726",
			"tag":["娱乐","偶像","音乐"]
		},
		{
			"imgsrc" : "src/assets/img/list2.jpg",
			"title" : "你的微信群叫什么名字？",
			"list_p" : "写这篇文章的初衷是因为我们今天要建一个群。主页君想了半天，不知道叫什么名字好。和漫天飘的表情包一样，微信群名已经成为了我们互相撩打的第二战线。怎样取名才能表现出我们的气质独特、洒脱不羁，又能在联系表里脱颖而出呢？经纬内部有非常多的群，这也是为什么主页君再也想不出一个好名字的原因，因为实在太——多——了。就拿主页君来说，我们永远都会有一个叫做“吃完饭立即解散”的群，然而这样的群现在已经有一百多个了……倒是来个人解散一下啊！",
			"author":"常橙橙",
			"amount":"324",
			"tag":["视频","项目","管理"]
		},
		{
			"imgsrc" : "src/assets/img/list3.jpg",
			"title" : "登月背后：这个程序媛把人类送上月球",
			"list_p" : "她的代码指引着他们准确飞向月球，又引导着他们平安返回地面——她就是玛格丽特·汉密尔顿（Margaret Hamilton），刚被授予美国的总统自由勋章。我们的女神一开始并不写代码，但为了供丈夫去读哈佛法学院，她就找到了一份临时的编码工作，地点是麻省理工学院的人工智能实验室。当黑客们正尝试让 TX-0 输出巴赫的旋律时，玛格丽特就在 PDP-1 上帮助气象学研究对大气进行建模；当黑客们在 PDP-1 上沉迷于《太空大战》游戏时，女神开始为美国空军的 SAGE 系统编写防空软件。当黑客们的「午夜计算机改装组织」为 PDP-6 改装不兼容分时系统时，女神已经开始为阿波罗飞船编写导航软件，女神的女儿还要跟着她在实验室的地板上睡觉、玩耍。",
			"author":"程小晨",
			"amount":"653",
			"tag":["范儿","娱乐","逗逼"]
		},
		{
			"imgsrc" : "src/assets/img/list4.jpg",
			"title" : "周笔畅“游”出万张作品",
			"list_p" : "在昨天的开幕式上不仅有周笔畅音乐上的知音梁翘柏助阵，还有摄影专业人士到场，面对“挑剔”的专家周笔畅丝毫没有怯场，大方介绍自己的作品。“为这次摄影展我准备了近三年的时间，工作外的大部分时间都带着相机远行拍摄作品。”不管是西班牙、法国、芬兰等旅游胜地，还是北极、冰岛、留尼汪等高难度自由行的地区，都留下过周笔畅的足迹，“两台相机再加三脚架，超过十几斤重，有时候为了取一个景我会扛着它们徒步十公里。”周笔畅不无自豪地称她曾在狂风肆虐的冰岛徒步一个小时等待飞机残骸的最佳美景，还曾胆战心惊在滑翔伞上拍摄，“我喜欢摄影很久了，用摄影的视角来传达对世界的认知是一件非常有趣的事。三年累积了近万张作品，终于才有了这次摄影展。”据悉，这次影展将一直持续到本周日。",
			"author":"周笔畅",
			"amount":"953",
			"tag":["爱豆","活祖宗","音乐"]
		}]
			return {
				order : 'order',
				list,
		        num: 10,
		        loading: false,
		        scroller: null,
		        outerHeight:0,
		        dateShow:true
			}
		},
		methods :{
			main_log(val) {
		        console.log('main_log', val);
		    },
		    sub_log(val) {
		        console.log('sub_log', val);
		        this.$refs.target_1.collapse();
		    },
		    loadMore () {
		      this.loading = true,
		      setTimeout(() => {
		         /*for (let i = this.num; i < this.num + 10; i++) {
		          this.list.push('item' + (i + 1));
		         }*/
		        this.$http.get('./src/assets/data/list.json').then((response)=> {
		      		let data=response.data.data;
		      		let length=data.length;

		      		for(let i= 0;i< length-1; i++){
		      			this.list.push(data[i]);
			      	}
			      		console.info(data[0]);
			      		console.info(length);
			      		console.info(this.list[0])
			      },(response)=>{
			      		console.info(response);
			      })
		        this.loading = false
		      }, 2000);
			}
		},
		mounted : function(){
			this.scroller = this.$refs.list;
			this.outerHeight =this.$el.offsetHeight;
			console.info(this.$el.offsetHeight);
			console.info(this.list);	
		}
	}
</script>
<style type="text/css">
	.mint-palette-button{
		position:fixed!important;
		right:20px;
		bottom:2rem;
		font-size: 24px;
	}
	.mint-palette-button .my-icon-button{
		line-height:40px;
		width:40px;
		height:40px;
	}
	.mint-sub-button-container>div{
		background:green;
		border-radius: 50%;
	}
	.mint-main-button{
		top:4px!important;
	}
	.demo-infinite-container{
	  width:100%;
	  height:400px;
	  overflow: auto;
	  -webkit-overflow-scrolling: touch;
	}
	.mu-item{
		min-height:3rem!important;
		padding:0!important;
	}
	/* 列表页样式----------------------------------- */

	.demo-infinite-container .mu-list{
		padding:0;
	}
	.mu-item .mu-item-left {
		position: relative;
		width:40%;
		left:0;
		max-height:4rem;
		top:8px;
	}
	.mu-item-left .mu-avatar{
		height:2.4rem;
		width:2.4rem;
		border-radius:0;
		margin-left:8px;
		margin-right:8px;
	}
	.mu-item-left .mu-avatar img{
		border-radius: 0;
	}
	.mu-item .mu-item-content{
		align-self:flex-start;
	}
	.mu-item-content .mu-item-title-row{
		line-height: 1.2;
		height:1.2rem;
		padding-top:8px;
		align-items:flex-start;
	}
</style>