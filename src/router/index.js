import Vue from 'vue'
import Router from 'vue-router'
import Mainframe from '@/components/Mainframe'
import Basicinfo from '@/components/Basicinfo'
import Mitama from '@/components/Mitama'
import Biography from '@/components/Biography'
import Videoplay from '@/components/Videoplay'
import Swiper from '@/components/Swiper'
import Navigation from '@/components/Navigation'
Vue.use(Router)
export default new Router({

  routes: [
    {
      path: '/Mainframe',
      name: 'Mainframe',
      component: Mainframe
    },
    {
      path:'/',
      name:'Swiper',
      component:Swiper
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
    },
    {
      path:'/Videoplay',
      name:'Videoplay',
      component:Videoplay
    },
    {
      path:'/Navigation',
      name:'Navigation',
      component:Navigation
    }
  ]
})
