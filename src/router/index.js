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
  {path: '/login', name: 'login', component: login}
]

export const asyncRouterMap = []
