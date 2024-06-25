<script setup lang="ts">
// const { isCollapse } = useStore()
const isCollapse = ref(false)
</script>
<template>
  <div class="w-full h-[100vh]">
    <header class="h-[4rem] shadow flex justify-between items-center">
      <div class="p-1 flex items-center">
        <img src="../../assets/logo.png" class="rounded-full" width="42" height="42" alt="logo">
        <h1 class="text-2xl ml-2">wind-admin</h1>
      </div>
      <div class="p-1">1</div>
    </header>
    <div class="h-[calc(100vh-4rem)] flex">
      <aside class="shadow" :class="[isCollapse ? 'w-[60px]' : 'w-[200px]']">123</aside>
      <main>2</main>
    </div>
  </div>
</template>
