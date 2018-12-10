// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式
import BreadCrumb from '@/commoncomponents/BreadCrumb'
import LeftSider from '@/commoncomponents/LeftSider'
import TopSider from '@/commoncomponents/TopSider'
Vue.config.productionTip = false
Vue.use(iView, {transfer: true, size: 'large'})
Vue.component('BreadCrumb', BreadCrumb)
Vue.component('LeftSider',LeftSider)
Vue.component('TopSider',TopSider)
/* eslint-disable  */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
