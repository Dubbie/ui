<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<template>
  <input
    :value="props.modelValue"
    :type="props.type"
    class="appearance-none text-sm border border-zinc-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-zinc-700 disabled:opacity-60 disabled:pointer-events-none"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
