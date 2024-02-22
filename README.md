# vue-rating-star

Rating star icon, Vue.js component.

From v2.0.0, it works for Vue 3.

## Demo

[Demo](https://sandbox.serendip.ws/vue-rating-star.html)


## Install

### Browser

```html
<script src="vue.global.prod.js"></script>
<script src="vue-rating-star.umd.js"></script>
```


### npm

```
npm install --save @inotom/vue-rating-star
```


## Usage

### Browser

```html
<div id="app">
  <rating-star></rating-star>
</div>

<script src="vue.global.prod.js"></script>
<script src="vue-rating-star.umd.js"></script>
<script>
const { createApp } = Vue;
const { RatingStar } = SwsVueRatingStar;

createApp({
  components: {
    RatingStar,
  },
}).mount('#app');
</script>
```


### SFC (TypeScript)

```vue
<template>
  <rating-star></rating-star>
</template>

<script setup lang="ts">
import RatingStar from '@inotom/vue-rating-star';
</script>
```


## Props

| name             | type      | defaults | description                    |
|------------------|-----------|----------|--------------------------------|
| `:max-value`     | `Number`  | `5`      | Number of stars                |
| `:initial-value` | `Number`  | `0`      | Initial rating number          |
| `:star-size`     | `Number`  | `30`     | Star icon width/height         |
| `color`          | `String`  | `ffcc00` | Star icon color                |
| `bg-color`       | `String`  | `cccccc` | Star icon background-color     |
| `stroke-color`   | `String`  | `000000` | Star icon stroke color         |
| `:has-stroke`    | `Boolean` | `false`  | Enable star icon stroke        |
| `:is-readonly`   | `Boolean` | `false`  | Disable rating status changing |


## License

MIT

## Author

inotom
