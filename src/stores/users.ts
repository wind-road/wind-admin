import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  // persist: {
  //   key: 'piniaState',
  //   storage: localStorage
  // },
  persist: true,
  state: () => ({
    userInfo: {
      token: '456'
    }
  }),
  actions: {
    SetUserInfo(data: any) {
      this.userInfo = data
    }
  }
})
