import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Note from '@/components/Note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    }
  ]
})
