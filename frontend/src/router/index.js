import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/components/IndexPage'
import Helloworld from '@/components/Helloworld'
import LoginPage from '@/components/main/Home'
import Submitter from '@/components/user/Submitter'
import GetTask from '@/components/user/GetTask'
import SubmitData from '@/components/user/SubmitData'
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
    },
    {
      path: '/submitter',
      name: 'Submitter',
      component: Submitter
    },
    {
      path: '/submitter/gettask',
      name: 'GetTask',
      component: GetTask
    },
    {
      path: '/submitter/submitdata',
      name: 'SubmitData',
      component: SubmitData
    }
  ]
})
export default router;