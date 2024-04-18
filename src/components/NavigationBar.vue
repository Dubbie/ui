<script setup>
import NavLink from "@/components/NavLink.vue";
import { onUpdated, ref } from "vue";

const currentUrl = ref(window.location.pathname);
const isActive = (url) => {
  return url === currentUrl.value;
};

onUpdated(() => {
  currentUrl.value = window.location.pathname;
});
</script>

<template>
  <div class="border-b border-black/5">
    <header class="flex items-center gap-x-8 max-w-7xl mx-auto py-3">
      <div>
        <p class="font-bold">Subi/ui</p>
      </div>
      <nav class="flex gap-x-2 items-center text-sm">
        <NavLink to="/" :active="isActive('/')">Home</NavLink>
        <NavLink to="/components" :active="isActive('/components')"
          >Components</NavLink
        >
      </nav>
    </header>
  </div>
</template>
