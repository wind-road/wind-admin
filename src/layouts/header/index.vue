<script setup lang="ts">
import logo from '@/assets/logo.jpg?inline'
import { toggleDark } from '@/hook/index'
const router = useRouter()
const handleCommand = (path: string) => {
  router.push(path)
}
</script>
<template>
  <header
    class="h-[4rem] shadow dark:shadow-gray-300 flex justify-between items-center overflow-hidden flex-wrap"
  >
    <div class="p-1 flex items-center min-w-[200px] h-[4rem]">
      <img :src="logo" class="rounded-full" width="42" height="42" alt="logo" />
      <h1 class="text-2xl ml-2">wind-admin</h1>
    </div>
    <div class="p-1 flex gap-4 items-center justify-between flex-wrap">
      <div class="flex gap-4 items-center flex-wrap">
        <el-tooltip class="" effect="dark" content="搜索" placement="bottom">
          <el-icon class="w-8 h-8 rounded-full border border-solid cursor-pointer">
            <i-ep-search />
          </el-icon>
        </el-tooltip>
        <el-tooltip class="" effect="dark" content="设置" placement="bottom">
          <el-icon class="w-8 h-8 rounded-full border border-solid cursor-pointer">
            <i-ep-setting />
          </el-icon>
        </el-tooltip>
        <el-tooltip class="" effect="dark" content="刷新" placement="bottom">
          <el-icon class="w-8 h-8 rounded-full border border-solid cursor-pointer">
            <i-ep-refresh />
          </el-icon>
        </el-tooltip>
        <el-tooltip class="" effect="dark" content="主题" placement="bottom">
          <el-icon
            class="w-8 h-8 rounded-full border border-solid cursor-pointer"
            @click="toggleDark"
          >
            <i-ep-moon />
          </el-icon>
        </el-tooltip>
      </div>
      <el-dropdown
        :hide-on-click="false"
        @command="handleCommand"
        class="dark:text-[--wind-dark-text]"
      >
        <div class="el-dropdown-link flex items-center gap-2">
          <img :src="logo" class="rounded-full w-8 h-8" alt="profile" />
          超级管理员<el-icon class="el-icon--right"><i-ep-arrow-down /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> <i-ep-user-filled class="mr-1" /> 管理员 1 </el-dropdown-item>
            <el-dropdown-item> <i-ep-user-filled class="mr-1" /> 普通用户 2 </el-dropdown-item>
            <el-dropdown-item divided> <i-ep-user class="mr-1" /> 个人信息 </el-dropdown-item>
            <el-dropdown-item divided command="/login">
              <i-ep-switch-button class="mr-1" /> 登出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>
