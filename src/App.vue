<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <NavigationBar :key="$route.path" />
  <RouterView />
</template>
