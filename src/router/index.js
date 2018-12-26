import Vue from 'vue'
import Router from 'vue-router'
import Mainframe from '@/components/Mainframe'
import Basicinfo from '@/components/Basicinfo'
import Mitama from '@/components/Mitama'
import Biography from '@/components/Biography'
import Videoplay from '@/components/Videoplay'
import Swiper from '@/components/Swiper'
import Navigation from '@/components/Navigation'
import VideoList from '@/components/VideoList'
import star from '@/components/star'
import test from '@/components/test'
import Mainpage from '@/components/Mainpage'
import Guide from '@/components/Guide'
import AboutUs from '@/components/AboutUs'
import Cartton from '@/components/Cartton'
import Bird from '@/components/Bird'
import Dolphin from '@/components/Dolphin'
import Elephant from '@/components/Elephant'
import Sheep from '@/components/Sheep'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Mainframe',
      name: 'Mainframe',
      component: Mainframe
    },
    {
      path:'/Swiper',
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
    },
    {
      path:'/VideoList',
      name:'VideoList',
      component:VideoList
    },
    {
      path:'/star',
      name:'star',
      component:star
    },
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path:'/Mainpage',
      name:'Mainpage',
      component:Mainpage
    },
    {
      path:'/',
      name:'Guide',
      component:Guide
    },
    {
      path:'/AboutUs',
      name:'AboutUs',
      component:AboutUs
    },
    {
      path:'/Cartton',
      name:'Cartton',
      component:Cartton
    },
    {
      path:'/Bird',
      name:'Bird',
      component:Bird
    },
    {
      path:'/Dolphin',
      name:'Dolphin',
      component:Dolphin
    },
    {
      path:'/Elephant',
      name:'Elephant',
      component:Elephant
    },
    {
      path:'/Sheep',
      name:'Sheep',
      component:Sheep
    } 
  ]
})
