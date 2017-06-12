<template>
  <div id="app">
    <div class="router_view" ref='fview' v-bind:style="viewHeight">
      <transition name='changelist' mode='out-in'><router-view v-bind:style="viewHeight"></router-view></transition>
    </div>
    <mt-tabbar v-model="selected" fixed ref='abc'>
      <mt-tab-item id="外卖">
        <router-link to='/takeout'><i class="icon iconfont">&#xe611;</i>外卖</router-link>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <router-link to='/order'><i class="icon iconfont">&#xe600;</i>订单</router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <router-link to='/found'><i class="icon iconfont">&#xe643;</i>发现</router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <router-link to='/mycount'><i class="icon iconfont">&#xe66a;</i>个人中心</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import takeout from './component/takeout.vue'
import order from './component/order.vue'
import found from './component/found.vue'
import mycount from './component/mycount.vue'
import remsolve from './assets/script/flexible.js'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected : '外卖',
      viewHeight:{
        height:''
      }
    }
  },
  components : {
    takeout,order,found,mycount
  },
  mounted :function(){
    const viewHeight = this.$el.offsetHeight-this.$refs.abc.$el.offsetHeight;
    this.$data.viewHeight.height =viewHeight+'px';
  }
}
</script>
<style type="text/css" src='./assets/css/app.scss'></style>
<style type="text/css" src='./assets/css/reset.css'></style>
<style>
*{margin:0;padding:0;}
html,body{
  width:100%;
  height:100%;
}
::-webkit-scrollbar{
  width:0;
  height:0;
}
#app{
  height:100%;
}
/* 组件进入动画-------------------- */
.changelist-enter-active {
  transition: all .3s ease;
}

.changelist-enter{
  margin-left:100%;
  opacity: 0;
}
.mint-tab-item-label a{
  color:#03a9f4;
}
</style>
