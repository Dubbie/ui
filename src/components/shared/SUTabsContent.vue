<script setup>
import { computed, inject } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const isTabActive = inject("isTabActive");
const isActive = computed(() => {
  return isTabActive(props.value);
});
</script>

<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
