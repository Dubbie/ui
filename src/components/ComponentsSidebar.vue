<script setup>
import SidebarHeading from "@/components/SidebarHeading.vue";
import SidebarLink from "@/components/SidebarLink.vue";
</script>

<template>
  <div class="flex flex-col gap-y-3 text-sm py-3">
    <div class="flex flex-col">
      <SidebarHeading>Getting Started</SidebarHeading>
      <SidebarLink to="/">Introduction</SidebarLink>
    </div>

    <div class="flex flex-col">
      <SidebarHeading>Components</SidebarHeading>
      <SidebarLink to="/components/accordion">Accordion</SidebarLink>
      <SidebarLink to="/components/alert">Alert</SidebarLink>
    </div>
  </div>
</template>
