<template>
  <div>
    <pageTitle title="新版Vuex使用" />
    <div>
      <p>state的返回 {{ count }}</p>
      <p>getter的返回：{{ doubleCount }}</p>
      <div class="btns">
        <el-button type="primary" @click="increment">commit</el-button>
        <el-button type="primary" @click="asyncIncrement">action</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    return {
      // 在 computed 函数中访问一个 state
      count: computed(() => store.state.num),
      // 在 computed 函数中访问一个 getter
      doubleCount: computed(() => store.getters.doubleCount),
      // 访问一个 mutation
      increment: () => store.commit('addNum'),
      // 访问一个 action
      asyncIncrement: () => store.dispatch('addNum')
    }
  }
})

</script>

<style lang="less" scoped>
.btns {
  margin-top: 10px;
}
</style>
