<script setup lang="ts">
import { useUserStore } from '@/stores/users'
const store = useUserStore()
console.log(store.userInfo)
// 创建一个表格元素
const createTable = () => {
  return {
    date: new Date().toLocaleString(),
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
}

const tableData = Array.from({ length: 100 }, () => createTable())
</script>
<style lang="scss">
.dark .home-data-table {
  --el-table-row-hover-bg-color: var(--wind-dark-hover-bg-color);
}
</style>
<template>
  <div class="h-full flex flex-col">
    <el-table
      :data="tableData"
      class="home-data-table w-full flex-1 dark:text-[--wind-dark-text]"
      row-class-name="dark:bg-[--wind-dark-bg]"
      header-cell-class-name="dark:bg-[--wind-dark-bg]"
    >
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <div class="flex justify-end">
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>
