<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <NavigationBar :key="$route.path" />
    <div class="max-w-7xl w-full mx-auto flex flex-1">
      <RouterView />
    </div>
  </div>
</template>
