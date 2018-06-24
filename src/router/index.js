import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home from '@/pages/home'
import admin from '@/pages/admin'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component:login
    },
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/admin',
      name: 'admin',
      component:admin
    }
  ]
})
