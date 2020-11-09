# Detect Preferred Color Scheme

> A micro ES6 module (~0.5KB) for detecting a users `preferred-color-scheme` and watching for changes 🐛️ 🔍️ 👀️.


[![Coverage:statements](./coverage/badge-statements.svg)](#)
[![Coverage:functions](./coverage/badge-functions.svg)](#)
[![Coverage:lines](./coverage/badge-lines.svg)](#)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Installation

```js
npm install @egstad/detect-theme
```

## Usage

```js
import theme from '@egstad/detect-theme'


// 1. watch for `colorSchemeUpdated` events
// 2. e.detail.theme returns 'light' or 'dark'
window.addEventListener('colorSchemeUpdated', (e) => {
  if (e.detail.theme === 'dark') {
    // update your css vars, add/remove css classes, etc.
  }
})

// 1. fetch preferred theme
// 2. dispatch result via 'colorSchemeUpdated'
// 3. watch for changes
theme.watch()
```

## Methods 

The `watch()` method is more than likely all you'll need. Here's a list of what each method in the module does.

```js
// 1. fetch preferred theme
// 2. dispatch result via 'colorSchemeUpdated'
theme.get()

// 1. runs `get()`
// 2. adds `colorSchemeUpdated` event listener to window
theme.watch()

// removes `colorSchemeUpdated` event listener from window
theme.destroy()
```