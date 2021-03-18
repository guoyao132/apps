import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index'
import HomeChild from '../views/HomeChild'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'child',
        name: 'child',
        component: HomeChild,
      }
    ]
  },
  {
    path: '/home1',
    name: 'home1',
    component: Home,
    children: [
      {
        path: 'child1',
        name: 'child1',
        component: HomeChild,
      }
    ]
  },
]

export default routes
