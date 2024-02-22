<script setup lang="ts">
import { ref } from 'vue';

import RatingStar from './components/RatingStar.vue';

const initialRate = ref(2);
const currentRate = ref(initialRate.value);
</script>

<template>
  <div>
    <h1>vue-rating-star demo</h1>

    <h2>Default</h2>
    <rating-star></rating-star>

    <h2>:max-value</h2>
    <rating-star :max-value="7"></rating-star>

    <h2>:initial-value</h2>
    <rating-star :initial-value="3"></rating-star>
    <br>
    <rating-star :initial-value="3.7"></rating-star>

    <h2>color</h2>
    <rating-star :initial-value="3" color="f00000"></rating-star>

    <h2>bg-color</h2>
    <rating-star :initial-value="3" bg-color="00ff00"></rating-star>

    <h2>:has-stroke</h2>
    <rating-star :initial-value="3" :has-stroke="true"></rating-star>

    <h2>stroke-color</h2>
    <rating-star :initial-value="3" :has-stroke="true" stroke-color="f00000"></rating-star>

    <h2>:star-size</h2>
    <rating-star :initial-value="3" :star-size="60"></rating-star>

    <h2>:is-readonly</h2>
    <rating-star :initial-value="3" :is-readonly="true"></rating-star>
    <br>
    <rating-star :initial-value="4.5" :is-readonly="true"></rating-star>

    <h2>full options</h2>
    <rating-star
      :max-value="10"
      :initial-value="5.5"
      :star-size="60"
      color="ccff66"
      bg-color="666666"
      :has-stroke="true"
      stroke-color="ff9900"
    ></rating-star>

    <h2>v-model binding</h2>
    <rating-star :initial-value="initialRate" v-model="currentRate"></rating-star> {{ currentRate }}
  </div>
</template>
