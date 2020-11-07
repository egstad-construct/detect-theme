# Detect Preferred Color Scheme

> A micro-module (~0.5KB) for detecting a users `preferred-color-scheme` and watching for changes 🐛️ 🔍️ 👀️.

---

## Installation

```js
npm install @construct/detect-theme
```
---

## Usage

```js
import theme from '@construct/detect-theme'

window.addEventListener('colorSchemeUpdated', (e) => {
  if (e.detail.theme === 'dark') { ... }
})

theme.watch()
```

The `watch()` method is more than likely all you'll need. It does two things: 

1. Get the user's current preferred theme and watches for changes.
2. If a change is detected, a custom event is fired.

---

## Methods 
```js
// gets current scheme and watches for changes
theme.watch()

// gets current scheme (doesn't watch)
theme.get()

// shut 'er down
theme.destroy()
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
  if (e.detail.theme === 'light') {...}
})
```