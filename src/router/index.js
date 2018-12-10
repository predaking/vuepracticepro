import Vue from 'vue'
import Router from 'vue-router'
import Mainframe from '@/components/Mainframe'
import Basicinfo from '@/components/Basicinfo'
import Mitama from '@/components/Mitama'
import Biography from '@/components/Biography'
Vue.use(Router)
export default new Router({

  routes: [
    {
      path: '/',
      name: 'Mainframe',
      component: Mainframe
    },
    {
      path:'/Basicinfo',
      name:'Basicinfo',
      component: Basicinfo
    },
    {
      path:'/Mitama',
      name:'Mitama',
      component:Mitama
    },
    {
      path:'/Biography',
      name:'Biography',
      component:Biography
    }
  ]
})
