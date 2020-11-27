import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/main/Home'
Vue.use(Router)

export default new Router({
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
    }
  ]
})
