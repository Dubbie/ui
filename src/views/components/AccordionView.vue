<script setup>
import ComponentsSidebar from "@/components/ComponentsSidebar.vue";

import SUAccordion from "@/components/shared/SUAccordion.vue";
import SUAccordionItem from "@/components/shared/SUAccordionItem.vue";
</script>

<template>
  <div class="flex min-h-full flex-1">
    <ComponentsSidebar class="min-w-[200px]" />
    <main>
      <h1 class="text-4xl font-bold mb-3">Accordion</h1>
      <p class="text-zinc-400 text-xl font-medium mb-6">
        A vertically stacked set of interactive headings that each reveal a
        section of content
      </p>

      <div>
        <p class="text-sm font-bold mb-3">Example</p>

        <SUAccordion>
          <SUAccordionItem :index="0">
            <template #trigger>
              <p>Is it accessible?</p>
            </template>

            <template #content>
              <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
            </template>
          </SUAccordionItem>
          <SUAccordionItem :index="1">
            <template #trigger>
              <p>Is it styled?</p>
            </template>

            <template #content>
              <p>
                Yes. It comes with default styles that matches the other
                components' aesthetic.
              </p>
            </template>
          </SUAccordionItem>
          <SUAccordionItem :index="2">
            <template #trigger>
              <p>Is it animated?</p>
            </template>

            <template #content>
              <p>Yes. It comes with a default animation.</p>
            </template>
          </SUAccordionItem>
        </SUAccordion>
      </div>
    </main>
  </div>
</template>
