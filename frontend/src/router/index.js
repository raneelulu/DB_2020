import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/components/IndexPage'
import Helloworld from '@/components/Helloworld'
import LoginPage from '@/components/main/Home'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Helloworld
    }
  ]
})
export default router;