<template>
  <div id="userLayout" class="w-full h-[100vh] relative flex justify-center items-center">
    <div
      :class="[
        'flex-1',
        'md:bg-none',
        'dark:bg-[--wind-dark-bg]',
        'dark:text-[--wind-dark-text]',
        'h-full',
        'p-1',
        'flex',
        'justify-center',
        'items-center',
        'bg-gradient-to-tl',
        'from-[#666af1]',
        'from-[49.9%]',
        'to-[#fff]',
        'dark:to-[--wind-dark-bg]',
        'to-[50.1%]'
      ]"
    >
      <el-form
        ref="loginFormRef"
        class="min-w-[300px]"
        label-position="top"
        :model="loginFormData"
        :rules="rules"
      >
        <h1 class="text-2xl font-bold text-center p-1">pnpm + vue3 + vite</h1>
        <p class="text-base text-center p-1">这是一个基于xx的管理系统</p>
        <div class="h-6"></div>
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginFormData.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginFormData.password" type="password" placeholder="请输入密码" />
        </el-form-item>
        <div>
          <el-button type="primary" @click="login(loginFormRef)" class="w-full">登录</el-button>
        </div>
      </el-form>
    </div>
    <div
      class="hidden md:block min-w-[200px] h-full border-t-indigo-500 border-t-[100vh] border-l-[200px] border-l-white dark:border-l-[--wind-dark-bg]"
    ></div>
    <div class="flex-1 hidden md:flex h-full bg-indigo-500 justify-end">
      <el-tooltip class="" effect="dark" content="主题" placement="bottom">
        <el-icon
          class="w-8 h-8 m-5 rounded-full border border-solid cursor-pointer text-white"
          @click="toggleDark"
        >
          <i-ep-moon />
        </el-icon>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormItemRule, FormInstance, FormRules } from 'element-plus'
import { useUserStore } from '@/stores/users'
import { toggleDark } from '@/hook/index'
const store = useUserStore()
console.log(store.userInfo)

defineOptions({
  name: 'Login'
})

const router = useRouter()
const loginFormRef = ref<FormInstance>()
// 验证函数
const checkUsername: FormItemRule['validator'] = (_rule, value: string, callback) => {
  if (value.length < 5) {
    return callback(new Error())
  } else {
    callback()
  }
}
const checkPassword: FormItemRule['validator'] = (_rule, value: string, callback) => {
  if (value.length < 6) {
    return callback(new Error())
  } else {
    callback()
  }
}

// 登录相关操作
const loginFormData = reactive({
  username: 'admin',
  password: '123456'
})
const rules = reactive<FormRules<typeof loginFormData>>({
  username: [{ validator: checkUsername, message: '请输入5个字符的账号', trigger: 'change' }],
  password: [{ validator: checkPassword, message: '请输入6个字符的密码', trigger: 'change' }]
})

const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  ElMessage({
    message: '登录成功',
    type: 'success',
    duration: 300,
    onClose() {
      router.push('/home')
    }
  })
}
</script>
