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
import ManagePage from '@/components/Admin/Task/TaskManage'
import TaskManage from '@/components/Admin/Task/ManageView'
import AdminMember from '@/components/Admin/Member/AdminMember'
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
      path: '/admin',
      name: 'AdministratorMain',
      component: AdminMain
    },
    {
      path: '/admin/task/create',
      name: 'TaskCreate',
      component: TaskCreate
    },
    {
      path: '/admin/task/',
      redirect: '/admin/task/showall'
    },
    {
      path: '/admin/task/showall',
      name: 'ShowTaskInfo',
      component: ShowTaskInfo
    },
    {
      path: '/admin/task/showall/:taskName',
      name: 'ShowTaskDetail',
      component: ShowTaskDetail
    },
    {
      path: '/admin/task/manage',
      name: 'ManagePage',
      component: ManagePage
    },
    {
      path: '/admin/task/manage/:taskName',
      name: 'TaskManage',
      component: TaskManage
    },
    {
      path: '/admin/member',
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