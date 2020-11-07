# Detect Preferred Color Scheme

> A micro-module (~0.5KB) for detecting a users `preferred-color-scheme` and watching for changes 🐛️ 🔍️ 👀️.

---

## Installation

```js
npm install ... -D
```

## Example

The module has four simple functions. More often than not, you'll only need to start up 

```js
import preferredTheme from 'detect-preferredTheme'

preferredTheme.init()
```

This gets the current theme and watches for changes.


```js
// 1. gets the user's current preferred color theme
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
const onSchemeChange = scheme => {
  if (scheme === 'dark') {
    // turn off the lights! 🌃️
  } else {
    // let there be light! 🌅️
  }
}

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
  if (e.detail.theme === 'light') {...}
})
```