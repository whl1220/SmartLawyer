import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Tabbar,TabbarItem,Button,NavBar,Sticky} from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Button).use(NavBar).use(Sticky);

import 'vant/lib/index.css';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
