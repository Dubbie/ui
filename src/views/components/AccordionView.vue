<script setup>
import ComponentDetails from "@/components/ComponentDetails.vue";
import SUAccordion from "@/components/shared/SUAccordion.vue";
import SUAccordionItem from "@/components/shared/SUAccordionItem.vue";
</script>

<template>
  <ComponentDetails
    name="Accordion"
    description="A vertically stacked set of interactive headings that each reveal a section of content"
  >
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
  </ComponentDetails>
</template>
