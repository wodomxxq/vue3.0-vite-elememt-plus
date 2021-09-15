<template>
  <el-menu-item-group>
    <el-menu-item
      v-for="(item, index) in menuData"
      :key="index"
      :index="item.path"
      @click="goPath(item)">
      {{item.meta.title}}
    </el-menu-item>
  </el-menu-item-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'menuTree',
  props: ['menuData'],
  setup(props, ctx) {
    const goPath = (item: any) => {
      ctx.emit('goPath', item)
    }
    return {
      goPath
    }
  }
})
</script>

<style lang="less" scoped>
</style>

