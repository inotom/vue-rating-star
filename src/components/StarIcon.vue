<script setup lang="ts">
import { computed } from 'vue';
import { getSvg, getStarValue } from '../stars';

interface Props {
  starSize: number;
  index: number;
  visualValue: number;
  color: string;
  bgColor: string;
  isReadonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isReadonly: false,
});

const emit = defineEmits<{
  (e: 'update-rate-value', index: number): void;
  (e: 'update-visual-value', index: number): void;
  (e: 'reset-visual-value'): void;
}>();

const svg = computed(() => getSvg(getStarValue(props.index, props.visualValue), props.color, props.bgColor));

const setRateVisualValue = () => {
  if (!props.isReadonly) {
    emit('update-visual-value', props.index);
  }
};

const resetRateVisualValue = () => {
  if (!props.isReadonly) {
    emit('reset-visual-value');
  }
};

const setRateValue = () => {
  if (!props.isReadonly) {
    emit('update-visual-value', props.index);
    emit('update-rate-value', props.index);
  }
};

const handleBtnKeyPress = (e: KeyboardEvent) => {
  if (e.key === ' ' || e.key.toUpperCase() === 'ENTER') {
    e.preventDefault();
    setRateValue();
  }
};
</script>

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
  />
</template>

<style lang="scss" scoped>
.star-icon {
  position: relative;
}
</style>
