import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ClassCourse',
    component: () => import('@/view/ClassCourse')
  },
  {
    path: '/',
    name: 'TeacherCourse',
    component: () => import('@/view/TeacherCourse')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
