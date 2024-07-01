<script setup lang="ts">
import Header from './header/index.vue'
import Sidebar from './Sidebar/index.vue'
const isCollapse = ref(true)
</script>
<template>
  <div class="w-full h-[100vh] dark:bg-[--wind-dark-bg] dark:text-[--wind-dark-text]">
    <Header />
    <div class="h-[calc(100vh-4rem)] flex">
      <aside class="dark:shadow-gray-300" :class="[isCollapse ? 'w-[4rem]' : 'w-[200px]']">
        <Sidebar class="h-[calc(100vh-7rem)]" :isCollapse="isCollapse" />
        <div
          class="h-[3rem] w-full border-solid border-r-[var(--el-menu-border-color)] border-r-[1px]"
        >
          <el-button
            class="w-full h-full border-none dark:bg-[--wind-dark-bg]"
            @click="isCollapse = !isCollapse"
          >
            <el-icon v-if="!isCollapse"><i-ep-d-arrow-left /></el-icon>
            <el-icon v-else><i-ep-d-arrow-right /></el-icon>
          </el-button>
        </div>
      </aside>
      <main
        class="h-full p-1"
        :class="[isCollapse ? 'w-[calc(100%-4rem)]' : 'w-[calc(100%-200px)]']"
      >
        <div class="h-full relative overflow-auto">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
