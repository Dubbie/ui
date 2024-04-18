<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  to: String,
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <RouterLink
    :to="to"
    class="rounded-lg px-3 py-2 font-medium text-zinc-500 hover:text-zinc-700"
    :class="{
      'bg-zinc-100 text-zinc-700': active,
    }"
  >
    <slot />
  </RouterLink>
</template>
