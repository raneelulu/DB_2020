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
import AdminMain from '@/components/Admin/AdminMain'
import TaskCreate from '@/components/Admin/Task/TaskCreate'
import ShowTaskInfo from '@/components/Admin/Task/ShowInfo'
import ShowTaskDetail from '@/components/Admin/Task/TaskView'
import AdminMember from '@/components/Admin/Member/AdminMember'
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
      path: '/administrator',
      name: 'AdministratorMain',
      component: AdminMain
    },
    {
      path: '/administrator/task/create',
      name: 'TaskCreate',
      component: TaskCreate
    },
    {
      path: '/administrator/task/showall',
      name: 'ShowTaskInfo',
      component: ShowTaskInfo
    },
    {
      path: '/administrator/task/showall/:taskID',
      name: 'ShowTaskDetail',
      component: ShowTaskDetail
    },
    {
      path: '/administrator/member',
      name: 'AdministratorMemb',
      component: AdminMember
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