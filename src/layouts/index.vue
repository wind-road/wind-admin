<script setup lang="ts">
import Header from './header/index.vue'
const isCollapse = ref(false)
</script>
<template>
  <div class="w-full h-[100vh]">
    <Header />
    <div class="h-[calc(100vh-4rem)] flex">
      <aside class="shadow" :class="[isCollapse ? 'w-[60px]' : 'w-[200px]']">123</aside>
      <main>2</main>
    </div>
  </div>
</template>
