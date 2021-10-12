import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/article/:name',
    name: 'Article',
    component: () => import('../views/article/Article.vue')
  },
  {
    path: '/symbol/:name',
    name: 'Symbol',
    component: () => import('../views/symbol/Symbol.vue')
  },
  {
    path: '/graph/:name/:upperLevel/:lowerLevel',
    name: 'Graph',
    component: () => import('../views/Graph.vue')
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
