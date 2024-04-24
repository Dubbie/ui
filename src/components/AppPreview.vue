<script setup>
const props = defineProps({
  maxWidth: {
    type: String,
    default: "400px",
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="flex justify-center items-center border border-zinc-200 rounded-lg p-16"
    :class="{
      'min-h-[400px]': !props.compact,
    }"
  >
    <div
      class="flex-1 flex justify-center items-center"
      :style="{ maxWidth: props.maxWidth }"
    >
      <slot />
    </div>
  </div>
</template>
