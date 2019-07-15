<template>
  <img
    class="star-icon"
    :src="svg"
    :width="starSize"
    :height="starSize"
    alt=""
    @mouseover="setRateVisualValue"
    @mouseout="resetRateVisualValue"
    @click="setRateValue"
  >
</template>

<script lang="ts">
import Vue from 'vue';
import { Rate } from '@models/Rate';
import { getSvg, getStarValue } from '@helpers/stars';

export default Vue.extend({
  props: {
    starSize: {
      type: Number,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },

    rate: {
      type: Rate,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    bgColor: {
      type: String,
      required: true,
    },

    isReadonly: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: getStarValue(this.index, this.rate.getVisualValue()),
    };
  },

  computed: {
    svg(): string {
      return getSvg(getStarValue(this.index, this.rate.getVisualValue()), this.color, this.bgColor);
    },
  },

  methods: {
    setRateVisualValue() {
      if (!this.isReadonly) {
        this.rate.setVisualValue(this.index);
      }
    },

    resetRateVisualValue() {
      if (!this.isReadonly) {
        this.rate.setVisualValue(void(0));
      }
    },

    setRateValue() {
      if (!this.isReadonly) {
        this.rate.set(this.index);
        this.rate.setVisualValue(this.index);
        this.$emit('update-rate-value');
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.star-icon {
  position: relative;
}
</style>
