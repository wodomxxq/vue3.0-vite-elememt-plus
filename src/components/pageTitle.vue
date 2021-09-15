<template>
  <h2 class="x-title" v-text="title"></h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'pageTitle',
  props: {
    title: String
  }
})
</script>
<style lang="less" scoped>
.x-title {
  position: fixed;
  top: 0;
  left: 200px;
  width: 100%;
  padding: 24px;
  font-size: 20px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 #999;
  z-index: 1;
}
</style>
