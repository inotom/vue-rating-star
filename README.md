# vue-rating-star

Rating star icon, Vue.js component.


## Demo

[Demo](http://sandbox.serendip.ws/vue-rating-star.html)


## Install

### Browser

```html
<script src="vue.js"></script>
<script src="vue-rating-star.min.js"></script>
```


### npm

```
npm install -D @inotom/vue-rating-star
```


## Usage

### Browser

```html
<div id="app">
  <rating-star></rating-star>
</div>

<script src="vue.js"></script>
<script src="vue-rating-star.min.js"></script>
<script>
Vue.use(RatingStar);
new Vue({
  el: '#app',
});
</script>
```


### SFC

```vue
<template>
  <rating-star></rating-star>
</template>

<script>
import RatingStar from '@inotom/vue-rating-star';

export default {
  components: {
    RatingStar,
  },
}
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
