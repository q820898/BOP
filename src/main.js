import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import Vuex from './Vuex'
import Vant from 'vant';
//import API from '@/assets/api.js';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios'
import API from '@/assets/port/api.js'
Vue.prototype.$http = axios

Vue.config.productionTip = false;

Vue.prototype.Date2Str = function(date){
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();  
    var minute = date.getMinutes();  
    minute = minute < 10 ? ('0' + minute) : minute; 
    var second= date.getSeconds();  
    second = minute < 10 ? ('0' + second) : second;  
    return y + '-' + m + '-' + d //+' '+h+':'+minute+':'+ second;  
}; 



//测试用语句 需要删除
localStorage.setItem("token","test")

router.beforeEach((to, from, next) => {
  if(to.meta.needToken){
    if(localStorage.getItem("token")){
      next();
    } else {
      router.push({name: 'login'});
    }
  } else {
    next();
  }
})


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
