import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/components/IndexPage'
// import EvalMain from '@/views/EvalMain'
// import EvalTodoTask from '@/views/EvalTodoTask'
import EvalTodoView from '@/views/TodoListView'
import EvalEvaluatedView from '@/views/EvaluatedListView'
import EvalTaskEvalView from '@/views/EvalTaskEvalView'
import Helloworld from '@/components/Helloworld'
import LoginPage from '@/components/main/Home'
import AdminPage from '@/components/AdminPage'

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
      redirect: '/evaluator/:userID/todo'
      // name: 'EvaluatorMainPage',
      // component: EvalTodoView
    },
    {
      path: '/evaluator/:userID/todo',
      name: 'EvaluatorTodoListPage',
      component: EvalTodoView
    },
    {
      path: '/evaluator/:userID/todo/:fileID',
      name: 'EvaluateTaskPage',
      component: EvalTaskEvalView
    },
    {
      path: '/evaluator/:userID/evaluated',
      name: 'EvaluatorEvaluatedPage',
      component: EvalEvaluatedView
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
      path: '/admin',
      name: 'admin',
      component: AdminPage
    }
  ]
})
export default router;