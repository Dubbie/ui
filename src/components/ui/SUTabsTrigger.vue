<script setup>
import { inject } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const showTab = inject("showTab");
const isTabActive = inject("isTabActive");
</script>

<template>
  <button
    type="button"
    class="-mb-px px-3 py-2 font-semibold"
    :class="{
      'border-b-2 border-zinc-800': isTabActive(props.value),
      'text-zinc-400 hover:text-zinc-700': !isTabActive(props.value),
    }"
    @click="showTab(props.value)"
  >
    <slot />
  </button>
</template>
