import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Standard from './views/Standard.vue'
import { baseUrl } from '../vue.config.js'

Vue.use(Router)

export default new Router({
  base: baseUrl,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/standard/:id',
      name: 'standard',
      component: () => import(/* webpackChunkName: "about" */ './views/Standard.vue'),
    }
  ]
})
