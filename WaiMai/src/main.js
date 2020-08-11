// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import qs from 'qs';
import axios from "axios"
import Global from '../static/config/global'
import $ from 'jquery'
import 'bootstrap';
import './assets/iconfont/iconfont.js';
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'




//使用jquery
$(function(){
  //console.log("asd");
})

// axios挂载到原型上方便使用
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype.Global = Global; 

Vue.use(VueResource);
Vue.use(VueSession);
Vue.use(VueCookies);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
