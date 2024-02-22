<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Rate, MAX_RATE } from '../Rate';
import StarIcon from './StarIcon.vue';
import { getStrokeSvg } from '../stars';

interface Props {
  maxValue?: number;
  initialValue?: number;
  starSize?: number;
  color?: string;
  bgColor?: string;
  strokeColor?: string;
  hasStroke?: boolean;
  isReadonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  maxValue: MAX_RATE,
  initialValue: 0,
  starSize: 30,
  color: 'ffcc00',
  bgColor: 'cccccc',
  strokeColor: '000000',
  hasStroke: false,
  isReadonly: false,
});

const emit = defineEmits<{
  (e: 'input', rate: number): void
}>();

const modelValue = defineModel<number>();

const rate = ref(Rate.createNew(props.initialValue, props.maxValue));

const strokeSvg = computed(() => getStrokeSvg(props.strokeColor));

const updateRateValue = (index: number) => {
  rate.value.set(index);
  rate.value.setVisualValue(index);
  emit('input', rate.value.get());
};

const updateVisualValue = (index: number) => {
  rate.value.setVisualValue(index);
};

const resetVisualValue = () => {
  rate.value.setVisualValue(void(0));
};

watch(() => rate.value.get(), (newValue) => {
  modelValue.value = newValue;
});
</script>

<template>
  <div class="rating-star">
    <div
      v-for="n in maxValue"
      :key="n"
      class="rating-star__item"
    >
      <star-icon
        :index="n"
        :visual-value="rate.getVisualValue()"
        :star-size="starSize"
        :is-readonly="isReadonly"
        :color="color"
        :bg-color="bgColor"
        @update-rate-value="updateRateValue"
        @update-visual-value="updateVisualValue"
        @reset-visual-value="resetVisualValue"
      />
      <img
        class="rating-star__stroke"
        :src="strokeSvg"
        :width="starSize"
        :height="starSize"
        :has-stroke="hasStroke || null"
        alt=""
      >
    </div>
  </div>
</template>

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
