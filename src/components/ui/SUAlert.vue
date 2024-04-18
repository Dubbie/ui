<script setup>
import {
  IconCheck,
  IconExclamationCircle,
  IconRocket,
} from "@tabler/icons-vue";
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "info",
  },
  title: {
    type: String,
    required: false,
  },
});

const containerClasses = computed(() => {
  return {
    info: "border-zinc-200 text-zinc-800",
    danger: "border-red-400 text-red-600",
    success: "border-green-400 text-green-600",
    warning: "border-yellow-400 text-yellow-600",
  }[props.type];
});

const icon = computed(() => {
  return {
    info: IconRocket,
    success: IconCheck,
    warning: IconExclamationCircle,
    danger: IconExclamationCircle,
  }[props.type];
});
</script>

<template>
  <div
    class="flex w-full gap-x-4 border rounded-lg py-3 px-4"
    :class="containerClasses"
  >
    <div>
      <component :is="icon" size="20" :stroke-width="1.5" />
    </div>

    <div class="text-sm">
      <p v-if="title" class="font-medium mb-1">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>
