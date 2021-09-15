import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

let timer: any = null

export default createStore({
  state: {
    listData: {
      a: 10
    },
    num: 10
  },
  getters: {
    doubleCount: state => state.num * 2
  },
  mutations: {
    setData(state, value) {
      state.listData = value
    },
    addNum(state) {
      state.num = state.num + Math.random()
    }
  },
  actions: {
    setData(context) {
      context.commit('setData')
    },
    addNum(context) {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        console.log('模拟延时')
        context.commit('addNum')
      }, 1500)
    },
  },
  modules: {},
  // 数据状态持久化 vuex-persistedstate
  plugins: [createPersistedState({
    key: 'VUEXCACHE',
    storage: window.sessionStorage,
    reducer(val)  {
      return {
        // 只储存state中的num
        num: val.num
      }
    }
  })]
})
