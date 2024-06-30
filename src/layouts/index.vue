<script setup lang="ts">
import Header from './header/index.vue'
import Sidebar from './Sidebar/index.vue'
const isCollapse = ref(true)
</script>
<template>
  <div class="w-full h-[100vh] dark:bg-[--wind-dark-bg] dark:text-[--wind-dark-text]">
    <Header />
    <div class="h-[calc(100vh-4rem)] flex">
      <aside class="shadow dark:shadow-gray-300" :class="[isCollapse ? 'w-[60px]' : 'w-[200px]']">
        <Sidebar class="h-[calc(100vh-7rem)]" :isCollapse="isCollapse" />
        <el-button
          class="h-[3rem] w-full border-none dark:bg-[--wind-dark-bg]"
          @click="isCollapse = !isCollapse"
        >
          <el-icon v-if="!isCollapse"><i-ep-d-arrow-left /></el-icon>
          <el-icon v-else><i-ep-d-arrow-right /></el-icon>
        </el-button>
      </aside>
      <main
        class="h-full p-1"
        :class="[isCollapse ? 'w-[calc(100%-60px)]' : 'w-[calc(100%-200px)]']"
      >
        <div class="h-full overflow-auto">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
