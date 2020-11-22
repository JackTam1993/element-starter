import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import route from '../src/router/router';

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: route,
  render: h => h(App)
})
