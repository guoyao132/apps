import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainHome1 from '../views/MainHome1.vue'
import MainHomeChild from '../views/MainHomeChild.vue'

Vue.use(VueRouter)

const router = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mainhome',
    name: 'mainhome',
    component: MainHome1,
    children: [
      {
        path: 'mainhomechild',
        name: 'mainhomechild',
        component: MainHomeChild,
      }
    ]
  },
]

export default router
