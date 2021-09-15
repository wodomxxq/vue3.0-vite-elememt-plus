<template>
  <div>
    <pageTitle title="日历" />
    <el-calendar v-model="date">
    </el-calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    return {
      minDate: new Date(year, month),
      maxDate: new Date(year, month + 1, 0),
      date
    }
  }
})
</script>

<style lang="less" scoped>

</style>
