<script setup lang="ts">
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
const { isCollapse } = toRefs(props)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss">
.dark .el-menu {
  --el-menu-bg-color: --wind-dark-bg;
  --el-menu-text-color: --wind-dark-text;
  --el-menu-hover-bg-color: var(--wind-dark-hover-bg-color);
  --el-menu-border-color: rgba(0,0,0,0)
}
</style>
<template>
  <div class="w-full">
    <el-menu
      default-active="2"
      :collapse="isCollapse"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon class="w-5 h-5">
            <i-ep-search />
          </el-icon>
          <span>首页</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon class="w-5 h-5"> <i-ep-search /> </el-icon>登录页
        </el-menu-item>
        <el-sub-menu index="1-2">
          <template #title>
            <el-icon class="w-5 h-5"> <i-ep-search /> </el-icon>item four</template
          >
          <el-menu-item index="1-4-1">
            <el-icon class="w-5 h-5"> <i-ep-search /> </el-icon>
            item one
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon class="w-5 h-5">
            <i-ep-search />
          </el-icon>
          <span>首页</span>
        </template>
        <el-menu-item index="2-1">
          <el-icon class="w-5 h-5"> <i-ep-search /> </el-icon>登录页</el-menu-item
        >
        <el-sub-menu index="2-4">
          <template #title>
            <el-icon class="w-5 h-5"> <i-ep-search /> </el-icon>item four</template
          >
          <el-menu-item index="2-4-1">
            <el-icon class="w-5 h-5"> <i-ep-search /> </el-icon>item one</el-menu-item
          >
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
