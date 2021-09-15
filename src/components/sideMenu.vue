<template>
  <el-aside width="200px">
    <section class="x-menu">
      <el-menu :default-active="$route.path">
        <el-menu-item
          v-for="(item, index) in home"
          :key="index"
          :index="item.path" @click="goPath(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{item.meta && item.meta.title}}</span>
        </el-menu-item>
        <el-submenu index="1">
          <template #title><i class="el-icon-collection"></i>应用</template>
          <menuTree :menuData="apply" @goPath="goPath" />
        </el-submenu>
      </el-menu>
    </section>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import menuTree from './menuTree.vue'
import homeRoutes from '@/router/modules/home'
import applyRoutes from '@/router/modules/business'

export default defineComponent({
  components: {
    menuTree
  },
  setup(props, ctx) {
    type Data = {
      apply: any[],
      home: any[]
    }
    const state:Data = reactive({
      apply: [],
      home: []
    })
    const router = useRouter()
    const goPath = (item: any) => {
      router.push(item.path)
    }
    state.apply = applyRoutes
    state.home = homeRoutes
    return {
      ...toRefs(state),
      goPath
    }
  }
})
</script>
<style lang="less">
@bgColor: #1b1c22;
@activeBgColor: #000;
.x-menu {
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
}
.el-menu {
  width: 202px;
  height: 100%;
  color: #fff;
  background-color: @bgColor !important;
  .el-menu-item,
  .el-submenu__title,
  .el-submenu__title i {
    color: #fff;
    background-color: @bgColor;
  }
  .el-submenu__title:hover {
    i {
      background-color: @activeBgColor;
    }
    background-color: @activeBgColor;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: @activeBgColor;
  }
  .el-menu-item.is-active{
    color: #00c985;
  }
}
</style>
