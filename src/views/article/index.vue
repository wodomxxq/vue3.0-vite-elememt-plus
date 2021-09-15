<template>
  <div>
    <pageTitle title="文章列表" />
    <div class="news-search">
      <el-input v-model="query" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="search" style="margin-left:20px">查询</el-button>
    </div>
    <el-table
      v-loading="loading"
      :data="data.hits"
      border
      stripe
      style="width:100%;margin-top:20px">
      <el-table-column
        prop="title"
        label="标题"
        min-width="200px">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="创建时间"
        min-width="110px">
      </el-table-column>
      <el-table-column
        prop="num_comments"
        label="评论数">
      </el-table-column>
      <el-table-column
        prop="points"
        label="点赞数">
      </el-table-column>
      <el-table-column
        prop="url"
        label="地址"
        min-width="200px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeMount, watchEffect } from 'vue'
import {httpGet} from '@/api/useRequest'
import commonApi from '@/api/testApi'
const { getArticle } = commonApi

export default {
  setup() {
    const query = ref('vue')
    const { data, loading, error, run } = httpGet({
	  url: getArticle,
      params: {
        query
      }
    })
	console.log(data, '--')
	onMounted(() => {
	  // run()
	  const stop = watchEffect(() => {
	    run()
	  })
	})
	const openUrl = (url) => {
	  let a = document.createElement('a')
	  a.href = url
	  a.target = '_blank'
	  a.style.display = 'none'
	  document.body.appendChild(a)
	  a.click()
	  document.body.removeChild(a)
	}
	return {
	  query,
	  data,
	  error,
	  loading,
	  search: run,
	  openUrl
	}
  }
}

</script>
<style lang="less" scoped>
.news-search {
  display: flex;
  width: 380px;
}
.news-list {
  padding-top: 50px;
}
</style>
