const MainPage = () => import(/* webpackChunkName: "mainPage" */'@/views/home/index.vue')
const Calendar = () => import(/* webpackChunkName: "calendar" */'@/views/calendar/index.vue')

export default [
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
    icon: 'el-icon-house',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    icon: 'el-icon-time',
    meta: {
      title: '日历'
    }
  }
]
