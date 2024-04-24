<script setup>
import NavLink from "@/components/NavLink.vue";
import { onUpdated, ref } from "vue";

const currentUrl = ref(window.location.pathname);
const isActive = (path) => {
  if (path.indexOf("*") !== -1) {
    return currentUrl.value.includes(path.replace("*", ""));
  }

  return currentUrl.value === path;
};

onUpdated(() => {
  currentUrl.value = window.location.pathname;
});
</script>

<template>
  <div
    class="border-b border-black/5 fixed z-50 inset-x-0 h-16 bg-white/60 backdrop-blur"
  >
    <header class="flex items-center gap-x-8 max-w-7xl mx-auto py-3">
      <div>
        <p class="font-bold">Subi/ui</p>
      </div>
      <nav class="flex gap-x-2 items-center text-sm">
        <NavLink to="/" :active="isActive('/')">Home</NavLink>
        <NavLink to="/components/accordion" :active="isActive('/components/*')"
          >Components</NavLink
        >
      </nav>
    </header>
  </div>
</template>
