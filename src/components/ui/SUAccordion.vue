<script setup>
import { provide, ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "single",
    validator(value) {
      return ["single", "multiple"].includes(value);
    },
  },
});

const activeItems = ref([]);

const toggleAccordion = (index) => {
  if (props.type === "single") {
    activeItems.value.includes(index)
      ? (activeItems.value = [])
      : (activeItems.value = [index]);
  } else {
    activeItems.value.includes(index)
      ? activeItems.value.splice(activeItems.value.indexOf(index), 1)
      : activeItems.value.push(index);
  }
};

const isActive = (index) => {
  return activeItems.value.includes(index);
};

provide("isActive", isActive);
provide("toggleAccordion", toggleAccordion);
</script>

<template>
  <div class="accordion">
    <slot />
  </div>
</template>
