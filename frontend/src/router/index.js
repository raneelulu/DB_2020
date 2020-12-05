import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/components/IndexPage'
import EvalTodoView from '@/views/TodoListView'
import EvalEvaluatedView from '@/views/EvaluatedListView'
import EvalTaskEvalView from '@/views/EvalTaskEvalView'
import Helloworld from '@/components/Helloworld'
import LoginPage from '@/components/main/Home'
import AdminMain from '@/components/Admin/AdminMain'
import TaskCreate from '@/components/Admin/Task/Create/TaskCreate'
import ShowTaskInfo from '@/components/Admin/Task/Stat/ShowInfo'
import ShowTaskDetail from '@/components/Admin/Task/Stat/TaskView'
import ManagePage from '@/components/Admin/Task/Manage/TaskManage'
import TaskManage from '@/components/Admin/Task/Manage/ManageView'
import ShowMember from '@/components/Admin/Member/ShowMember'
import SearchMember from '@/components/Admin/Member/Search'
import UserInfo from '@/components/Admin/Member/UserInfo'
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
      path: '/admin/member/',
      redirect: '/admin/member/showlist'
    },
    {
      path: '/admin/member/showlist',
      name: 'ShowMember',
      component: ShowMember
    },
    {
      path: '/admin/member/search',
      name: 'SearchMember',
      component: SearchMember
    },
    {
      path: '/admin/:userID',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
export default router;