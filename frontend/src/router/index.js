import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import SignUpPage from '@/components/SignUpPage'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/sign_up',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/ccc',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
