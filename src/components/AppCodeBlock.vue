<script setup>
import VCodeBlock from "@wdns/vue-code-block";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  maxHeight: {
    type: String,
    default: "400px",
  },
  language: {
    type: String,
    default: "html",
  },
  theme: {
    type: String,
    default: "github-dark",
  },
});
</script>

<template>
  <VCodeBlock
    :language="language"
    highlightjs
    :max-height="maxHeight"
    :code="code"
    :theme="theme"
  />
</template>
