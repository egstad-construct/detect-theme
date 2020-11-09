import theme from '../index.js'

const currentTheme = document.querySelector('#currentTheme')
const root = document.documentElement

// detect updates
window.addEventListener('colorSchemeUpdated', (e) => {
  switch (e.detail.theme) {
    case 'dark':
      currentTheme.innerHTML = 'dark'
      root.style.setProperty('--background', 'black');
      root.style.setProperty('--foreground', 'white');
      break;
    case 'light':
      currentTheme.innerHTML = 'light'
      root.style.setProperty('--background', 'white');
      root.style.setProperty('--foreground', 'black');
      break;
    default:
      currentTheme.innerHTML = 'no-preference'
      break;
  }
})

theme.watch()