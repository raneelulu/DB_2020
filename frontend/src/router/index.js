import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import EvalMain from '@/views/EvalMain'
import EvalTodoTask from '@/views/EvalTodoTask'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
