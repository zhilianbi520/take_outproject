import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUi)
Vue.use(MuseUi)
Vue.use(Vuex)
/*路由配置------------------------------------------------*/
import takeout from './component/takeout.vue'
import order from './component/order.vue'
import found from './component/found.vue'
import mycount from './component/mycount.vue'
import login from './component/login/login.vue'
import setting from './component/setting/setting.vue'
import integral from './component/integral/integral.vue'
import register from './component/register/register.vue'
import coupon from './component/coupon/coupon.vue'
import basic_information from './component/basic_information/basic_information.vue'

//全局注册组件
import header from './component/common/header.vue'
Vue.component('header-page',header);
const router =new VueRouter({
	mode: 'history',
  	base: __dirname,
  	routes: [
    {
      	path: '/takeout',
      	component:takeout
    },
    {
     	path: '/order',
      	component: order
    },
    {
    		path: '/found',
      	component: found
    },
    {
    		path: '/mycount',
      	component: mycount
    },
    {
    		path: '/login',
      	component: login
    },
    {
    		path: '/setting',
      	component: setting
    },
    {
    		path: '/integral',
      	component: integral
    },
    {
    		path: '/register',
      	component: register
    },
    {
    		path: '/basic_information',
      	component: basic_information
    },
    {
    		path: '/coupon',
    		component: coupon
    },
    {
    		path: '*',
      	component: takeout
    }
  ]
})
const store = new Vuex.Store({
	state: {
		count :0,
		usename:null,
		pwd:null,
		reg:1,
		regname:null
	},
	mutations:{
		already_login(state){
			state.count = 1;
		}
	},
	actions:{
		increment(context){
			context.commit("already_login")
		}
	}
})
const app= new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')