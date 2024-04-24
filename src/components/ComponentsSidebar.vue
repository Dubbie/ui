<script setup>
import SidebarHeading from "@/components/SidebarHeading.vue";
import SidebarLink from "@/components/SidebarLink.vue";
</script>

<template>
  <div class="flex flex-col gap-y-3 text-sm py-6">
    <div class="flex flex-col">
      <SidebarHeading>Getting Started</SidebarHeading>
      <SidebarLink to="/">Introduction</SidebarLink>
    </div>

    <div class="flex flex-col">
      <SidebarHeading>Components</SidebarHeading>
      <SidebarLink to="/components/accordion">Accordion</SidebarLink>
      <SidebarLink to="/components/alert">Alert</SidebarLink>
      <SidebarLink to="/components/button">Button</SidebarLink>
      <SidebarLink to="/components/checkbox">Checkbox</SidebarLink>
      <SidebarLink to="/components/input">Input</SidebarLink>
      <SidebarLink to="/components/label">Label</SidebarLink>
    </div>
  </div>
</template>
