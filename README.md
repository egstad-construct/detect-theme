# Detect Preferred Color Scheme

> A micro ES6 module (~0.5KB) for detecting a users `preferred-color-scheme` and watching for changes 🐛️ 🔍️ 👀️.

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="172" height="20" role="img" aria-label="Coverage:statements: 100%"><title>Coverage:statements: 100%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="172" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="129" height="20" fill="#555"/><rect x="129" width="43" height="20" fill="#4c1"/><rect width="172" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="655" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1190">Coverage:statements</text><text x="655" y="140" transform="scale(.1)" fill="#fff" textLength="1190">Coverage:statements</text><text aria-hidden="true" x="1495" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="330">100%</text><text x="1495" y="140" transform="scale(.1)" fill="#fff" textLength="330">100%</text></g></svg>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="136" height="20" role="img" aria-label="Coverage:lines: 100%"><title>Coverage:lines: 100%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="136" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="93" height="20" fill="#555"/><rect x="93" width="43" height="20" fill="#4c1"/><rect width="136" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="475" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="830">Coverage:lines</text><text x="475" y="140" transform="scale(.1)" fill="#fff" textLength="830">Coverage:lines</text><text aria-hidden="true" x="1135" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="330">100%</text><text x="1135" y="140" transform="scale(.1)" fill="#fff" textLength="330">100%</text></g></svg>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160" height="20" role="img" aria-label="Coverage:functions: 100%"><title>Coverage:functions: 100%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="160" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="117" height="20" fill="#555"/><rect x="117" width="43" height="20" fill="#4c1"/><rect width="160" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="595" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1070">Coverage:functions</text><text x="595" y="140" transform="scale(.1)" fill="#fff" textLength="1070">Coverage:functions</text><text aria-hidden="true" x="1375" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="330">100%</text><text x="1375" y="140" transform="scale(.1)" fill="#fff" textLength="330">100%</text></g></svg>
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