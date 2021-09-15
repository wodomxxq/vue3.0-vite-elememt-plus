const Map = () => import(/* webpackChunkName: "business" */'@/views/map/index.vue')
const Article = () => import(/* webpackChunkName: "business" */'@/views/article/index.vue')
const TsTest = () => import(/* webpackChunkName: "business" */'@/views/ts-test/index.vue')
const StoreTest = () => import(/* webpackChunkName: "business" */'@/views/store/index.vue')

export default [
  {
    path: '/map',
    name: 'Map',
    meta: {
      title: '地图展示',
      keepAlive: true
    },
    component: Map
  },
  {
    path: '/article',
    name: 'Article',
    meta: {
      title: '文章列表',
      keepAlive: true
    },
    component: Article
  },
  {
    path: '/ts-test',
    name: 'TsTest',
    meta: {
      title: 'TypeScript',
      keepAlive: true
    },
    component: TsTest
  },
  {
    path: '/store',
    name: 'StoreTest',
    meta: {
      title: '新版Vuex',
      keepAlive: true
    },
    component: StoreTest
  }
]
