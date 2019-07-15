<template>
  <div class="rating-star">
    <div
      v-for="n in maxValue"
      :key="n"
      class="rating-star__item"
    >
      <star-icon
        :index="n"
        :rate="rate"
        :star-size="starSize"
        :is-readonly="isReadonly"
        :color="color"
        :bg-color="bgColor"
        @update-rate-value="updateRateValue"
      />
      <img
        class="rating-star__stroke"
        :src="strokeSvg"
        :width="starSize"
        :height="starSize"
        :has-stroke="hasStroke"
        alt=""
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Rate, MAX_RATE } from '@models/Rate';
import StarIcon from '@components/StarIcon.vue';
import { getStrokeSvg } from '@helpers/stars';

export default Vue.extend({
  components: {
    StarIcon,
  },

  props: {
    maxValue: {
      type: Number,
      default: MAX_RATE,
    },

    initialValue: {
      type: Number,
      default: 0,
    },

    starSize: {
      type: Number,
      default: 30,
    },

    color: {
      type: String,
      default: 'ffcc00',
    },

    bgColor: {
      type: String,
      default: 'cccccc',
    },

    strokeColor: {
      type: String,
      default: '000000',
    },

    hasStroke: {
      type: Boolean,
      default: false,
    },

    isReadonly: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      rate: Rate.createNew(this.initialValue, this.maxValue),
    };
  },

  computed: {
    strokeSvg(): string {
      return getStrokeSvg(this.strokeColor);
    },
  },

  methods: {
    updateRateValue() {
      this.$emit('input', this.rate.get());
    },
  },
});
</script>

<style lang="scss" scoped>
.rating-star {
  display: inline-flex;

  &__item {
    position: relative;
  }

  &__stroke {
    display: none;

    &[has-stroke] {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    }
  }
}
</style>
