<script setup lang="ts">
import logo from '@/assets/logo.jpg?inline'
</script>
<template>
  <header class="h-[4rem] shadow flex justify-between items-center">
    <div class="p-1 flex items-center">
      <img :src="logo" class="rounded-full" width="42" height="42" alt="logo" />
      <h1 class="text-2xl ml-2">wind-admin</h1>
    </div>
    <div class="p-1 flex gap-4 items-center">
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
        <el-icon class="w-8 h-8 rounded-full border border-solid cursor-pointer">
          <i-ep-moon />
        </el-icon>
      </el-tooltip>
      <el-dropdown :hide-on-click="false">
        <div class="el-dropdown-link flex items-center gap-2">
          <img :src="logo" class="rounded-full w-8 h-8" alt="profile" />
          超级管理员<el-icon class="el-icon--right"><i-ep-arrow-down /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> <i-ep-user-filled class="mr-1" /> 管理员 1 </el-dropdown-item>
            <el-dropdown-item> <i-ep-user-filled class="mr-1" /> 普通用户 2 </el-dropdown-item>
            <el-dropdown-item divided> <i-ep-user class="mr-1" /> 个人信息 </el-dropdown-item>
            <el-dropdown-item divided> <i-ep-switch-button class="mr-1" /> 登出 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>
