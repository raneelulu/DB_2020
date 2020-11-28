import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/components/IndexPage'
import EvalMain from '@/views/EvalMain'
import EvalTodoTask from '@/views/EvalTodoTask'
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
      path: '/evaluator/:userID',
      name: 'EvaluatorMainPage',
      component: EvalMain
    },
    {
      path: '/evaluator/:userID/:taskID',
      name: 'EvaluateTask',
      component: EvalTodoTask
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