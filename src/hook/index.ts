// 切换黑暗模式
export const toggleDark = (e: Event) => {
  const app = document.getElementById('app')
  const appDark = document.getElementById('app-dark')
  if (!app || !appDark) {
    throw new Error('app or app-dark not found')
  }
  appDark.innerHTML = app.outerHTML
  app.classList.add('hidden')
  appDark.classList.remove('hidden')

  const mode = localStorage.getItem('mode') || 'light'

  // 待优化
  if (['dark', 'light'].includes(mode)) {
    appDark.classList.remove('light')
    appDark.classList.remove('dark')
    const appView = appDark.querySelector('#app');
    appView?.classList.remove('dark')
    appView?.classList.remove('light')
    if (mode === 'dark'){
      // -------------------
      app.classList.add('light')
      app.classList.remove('dark')  
      localStorage.setItem('mode', 'light')
    }
    if (mode === 'light'){
      appDark.classList.add('dark')
      app.classList.add('dark')
      app.classList.remove('light')
      localStorage.setItem('mode', 'dark')
    }
  }
  appDark.querySelector('#app')?.classList.add('anim')
  const time = setTimeout(() => {
    appDark.innerHTML = ''
    appDark.classList.add('hidden')
    app.classList.remove('hidden')
    clearTimeout(time)
  }, 1000)
}
