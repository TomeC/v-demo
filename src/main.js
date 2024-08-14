// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
axios.defaults.headers.common['Authorization'] = ''

require('./mock')

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import qs from 'qs';
Vue.prototype.$qs = qs;

import store from './store/index';
Vue.prototype.$store = store;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

axios.interceptors.request.use(
  config => {
    console.log(config);
    if (config.url != '/api/login') {
      if (sessionStorage.getItem('Authorization')) {
        config.headers.Authorization = sessionStorage.getItem('Authorization')
      } else {
        console.log('to login')
        this.$router.push("/");
      }
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)
