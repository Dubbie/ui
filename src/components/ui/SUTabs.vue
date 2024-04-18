<script setup>
import { ref, provide } from "vue";

const activeTab = ref(null);

const isTabActive = (tabValue) => {
  // handle initial value
  if (activeTab.value === null) {
    activeTab.value = tabValue;
  }

  return activeTab.value === tabValue;
};

const showTab = (tabValue) => {
  activeTab.value = tabValue;
};

provide("isTabActive", isTabActive);
provide("showTab", showTab);
</script>

<template>
  <div>
    <slot />
  </div>
</template>
