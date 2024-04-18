<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  to: String,
});

const isActive = computed(() => {
  return props.to === window.location.pathname;
});
</script>

<template>
  <RouterLink
    :to="to"
    class="rounded-lg py-0.5 font-medium"
    :class="{
      'text-zinc-800': isActive,
      'text-zinc-400 hover:text-zinc-600': !isActive,
    }"
  >
    <slot />
  </RouterLink>
</template>
