<template>
  <img
    class="star-icon"
    :src="svg"
    :width="starSize"
    :height="starSize"
    alt=""
    role="button"
    tabindex="0"
    @mouseover="setRateVisualValue"
    @mouseout="resetRateVisualValue"
    @click="setRateValue"
    @keypress="handleBtnKeyPress"
  >
</template>

<script>
import { Rate } from '@models/Rate';
import { getSvg, getStarValue } from '@helpers/stars';

export default {
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
    svg() {
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

    handleBtnKeyPress(e) {
      if (e.key === ' ' || e.key.toUpperCase() === 'ENTER') {
        e.preventDefault();
        this.setRateValue();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.star-icon {
  position: relative;
}
</style>
