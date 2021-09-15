<template>
  <div>
    <pageTitle title="欢迎来到 Vue3 Vite Element-plus 技术领域" />
    <el-carousel :interval="2000" arrow="always" height="500px">
      <el-carousel-item v-for="image in state.images" :key="image">
        <img :src="image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      ]
    })
    return {
      state
    }
  }
})
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
