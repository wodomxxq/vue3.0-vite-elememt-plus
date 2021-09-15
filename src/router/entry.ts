import children from './modules'

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login/login.vue')
const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/views/home/home.vue')

export default [
  {
    path: '/',
    redirect: {
      path: '/login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    children,
    redirect: {
      path: '/main'
    }
  }
]
