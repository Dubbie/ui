<script setup>
import { IconRocket } from "@tabler/icons-vue";

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
</script>

<template>
  <div class="flex gap-x-4 border border-zinc-200 rounded-lg py-3 px-4">
    <div>
      <IconRocket size="20" :stroke-width="1.5" />
    </div>

    <div class="text-sm">
      <p v-if="title" class="font-medium mb-1">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>
