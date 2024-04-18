<script setup>
import ComponentsSidebar from "@/components/ComponentsSidebar.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex min-h-full flex-1">
    <ComponentsSidebar class="min-w-[200px]" />
    <main>
      <h1 class="text-4xl font-bold mb-3">{{ name }}</h1>
      <p class="text-zinc-400 text-xl font-medium mb-6">
        {{ description }}
      </p>

      <slot />
    </main>
  </div>
</template>
