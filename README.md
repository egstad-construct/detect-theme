# detect-preferedTheme


Four simple functions.

```js
// 1. gets the user's curent preferred color theme
// 2. watches for any changes
preferredTheme.init()

// gets the user's curent preferred color theme
preferredTheme.get()

// watches for any changes
preferredTheme.watch()

// stop watching
preferredTheme.destroy()
```


```js
// detect updates
window.addEventListener('colorSchemeUpdated', (e) => {
  // user selected dark theme
  if (e.detail.theme === 'dark') {...} 
  // user selected light theme
  else {...}
})

// detect dark theme
window.addEventListener('colorSchemeUpdated', (e) => {
  if (e.detail.theme === 'dark') {...}
})

// detect light theme
window.addEventListener('colorSchemeUpdated', (e) => {
  if (e.detail.theme === 'dark') {...}
})
```