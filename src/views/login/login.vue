<template>
  <section class="x-login">
    <section class="pwd-login">
      <h2 class="title">技术前沿</h2>
      <el-form ref="ruleForm" :model="form" :rules="rules">
        <el-form-item prop="account">
          <el-input
            readonly
            prefix-icon="el-icon-user"
            v-model.trim="form.account"
            placeholder="请输入用户账号"
            @focus="(e) => {e.target.removeAttribute('readonly')}"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            readonly
            prefix-icon="el-icon-lock"
            type="password"
            v-model.trim="form.password"
            placeholder="请输入用户密码"
            @focus="(e) => {e.target.removeAttribute('readonly')}"
            @keyup.enter.native="login"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button class="login-btn" type="primary" @click="login">登录</el-button>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { setToken } from '@/utils/token'

export default defineComponent({
  setup(props, ctx) {
    const ruleForm = ref()
    const state = reactive({
      form: {
        account: 'admin',
        password: '123456'
      },
      rules: {
        account: [{ required: true, message: '账号不能为空', trigger: ['change', 'blur'] }],
        password: [{ required: true, message: '密码不能为空', trigger: ['change', 'blur'] }]
      },
    })
    const router = useRouter()
    const login = () => {
      ruleForm.value.validate((val: boolean) => {
        if (!val) return
        const { account, password } = state.form
        ElMessage.closeAll()
        if (account !== 'admin' || password !== '123456') {
          return ElMessage.warning('账号或密码不正确')
        }
        setToken(window.btoa(`${account}${password}`))
        router.push({
          path: '/home'
        })
      })
    }
    return {
      ...toRefs(state),
      login,
      ruleForm
    }
  }
})
</script>

<style lang="less" scoped>
.x-login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #303133;
  .pwd-login {
    padding: 28px;
    background: #f2f6fc;
    border-radius: 10px;
  }
  .title {
    padding-bottom: 30px;
    font-size: 28px;
    text-align: center;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
