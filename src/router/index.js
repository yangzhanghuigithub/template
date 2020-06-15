import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import index from '../components/index'
import render from '../components/render'
import preview from '../components/preview'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: login
  }, {
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/render',
    name: 'render',
    component: render
  }, {
    path: '/preview',
    name: 'preview',
    component: preview
  }]
})

export const constantRouterMap = [
  {path: '/login', component: () => login, hidden: true},
  {path: '/404', component: () => import('../views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('../views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]}
]

export const asyncRouterMap = []
