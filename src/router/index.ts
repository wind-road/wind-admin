import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'

export const menu = [
  {
    path: 'home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '主页' }
  },
  {
    path: 'test',
    name: 'Test',
    component: () => import('@/views/test/index.vue'),
    meta: { title: '测试1' },
    children: [
      {
        path: 'test2',
        name: 'Test2',
        component: () => import('@/views/test/test2/index.vue'),
        meta: { title: '测试2' },
        children: [
          {
            path: 'test3',
            name: 'Test3',
            component: () => import('@/views/test/test2/test3/index.vue'),
            meta: { title: '测试3' },
          }
        ]
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      redirect: 'Login',
      component: Layout,
      meta: {
        title: '主页',
        keepAlive: false
      },
      children: menu
    }
  ]
})
export default router
