<script setup>
import AppPreview from "@/components/AppPreview.vue";
import ComponentDetails from "@/components/ComponentDetails.vue";
import SUAccordion from "@/components/shared/SUAccordion.vue";
import SUAccordionItem from "@/components/shared/SUAccordionItem.vue";
import SUTabs from "@/components/shared/SUTabs.vue";
import SUTabsContent from "@/components/shared/SUTabsContent.vue";
import SUTabsList from "@/components/shared/SUTabsList.vue";
import SUTabsTrigger from "@/components/shared/SUTabsTrigger.vue";

const codeSample = `<SUAccordion class="w-full">
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
</SUAccordion>`;
</script>

<template>
  <ComponentDetails
    name="Accordion"
    description="A vertically stacked set of interactive headings that each reveal a section of content"
  >
    <SUTabs>
      <SUTabsList>
        <SUTabsTrigger value="preview">Preview</SUTabsTrigger>
        <SUTabsTrigger value="code">Code</SUTabsTrigger>
      </SUTabsList>

      <SUTabsContent value="preview">
        <AppPreview>
          <SUAccordion class="w-full">
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
        </AppPreview>
      </SUTabsContent>

      <SUTabsContent value="code">
        <div class="bg-zinc-800 text-white px-6 py-4 rounded-lg">
          <pre><code>{{ codeSample}}</code></pre>
        </div>
      </SUTabsContent>
    </SUTabs>
  </ComponentDetails>
</template>
