import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/admin/Login'
import Admin from '@/components/admin/Admin'
import Home from '@/components/home/Home'
import Index from '@/components/home/index/Index'
import Classify from '@/components/home/index/Classify'
import Shop from '@/components/home/index/Shop'
import Mine from '@/components/home/index/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/classify',
      name:'Classify',
      component:Classify
    },
    {
      path:'/shop',
      name:'Shop',
      component:Shop
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }

  ]
})
