// 切换黑暗模式
// todo 待优化
export const toggleDark = (e: Event) => {
  const app = document.getElementById('app')
  const appDark = document.getElementById('app-dark')
  if (!app || !appDark) {
    throw new Error('app or app-dark not found')
  }
  appDark.innerHTML = app.outerHTML
  app.classList.add('hidden')
  appDark.classList.remove('hidden')

  // const mode = localStorage.getItem('mode') || 'light'
  
  document.documentElement?.classList.toggle('dark')

  // const negate = (mode: string) => {
  //   return mode === 'dark' ? 'light' : 'dark'
  // }
  
  // if (['dark', 'light'].includes(mode)) {}

  appDark.querySelector('#app')?.classList.add('anim')
  const time = setTimeout(() => {
    appDark.innerHTML = ''
    appDark.classList.add('hidden')
    app.classList.remove('hidden')
    clearTimeout(time)
  }, 1000)
}
