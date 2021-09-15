<template>
  <div class="x-home">
    <el-container style="height: 100%">
      <sideMenu />
      <el-container>
        <strong class="x-time">{{ currTime }}</strong>
        <el-main>
          <router-view v-slot="{ Component }" class="x-container">
            <keep-alive>
              <component :is="$route.meta.keepAlive ? Component : null"/>
            </keep-alive>
            <component :is="!$route.meta.keepAlive ? Component : null"/>
          </router-view>
          <p class="x-copyright">
            Copyright ©2021 Kiscon
            <span class="x-update-time">最后更新时间：{{ lastModified }}</span>
          </p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import sideMenu from '@/components/sideMenu.vue'
import { getNow } from '@/utils/common'

export default defineComponent({
  components: {
    sideMenu
  },
  setup() {
    let timer:any = null
    let currTime = ref()
    onMounted(() => {
      timer && clearInterval(timer)
      timer = setInterval(() => {
        currTime.value = getNow()
      }, 1000)
    })
    return {
      currTime,
      lastModified: document.lastModified
    }
  }
})
</script>
<style lang="less">
.x-home {
  height: 100%;
  font-size: 16px;
}
.el-main {
  position: relative;
  background-color: #fff;
  overflow: hidden !important;
}
.x-time {
  position: absolute;
  right: 48px;
  top: 24px;
  font-size: 16px;
  z-index: 2;
  color: #666;
}
.x-copyright {
  padding-top: 10px;
  color: #aaa;
  text-align: center;
  .x-update-time {
    float: right;
    padding-right: 20px;
    font-size: 10px;
    color: #f00;
  }
}
</style>
