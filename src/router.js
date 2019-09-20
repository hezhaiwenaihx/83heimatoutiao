import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import Home from './views/home/'
import Main from './views/home/main'
Vue.use(Router)

export default new Router({
  routes: [ {
    path: '/',

    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    // name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Main
    }]
  },
  {
    path: '/login',
    component: login
  }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
