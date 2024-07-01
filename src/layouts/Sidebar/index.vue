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
<template>
  <div class="w-full pt-[1px]">
    <el-menu
      default-active="2"
      class="h-full"
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
