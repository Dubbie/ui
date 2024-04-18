<script setup>
import AppPreview from "@/components/AppPreview.vue";
import ComponentDetails from "@/components/ComponentDetails.vue";
import SUAccordion from "@/components/ui/SUAccordion.vue";
import SUAccordionItem from "@/components/ui/SUAccordionItem.vue";
import SUTabs from "@/components/ui/SUTabs.vue";
import SUTabsContent from "@/components/ui/SUTabsContent.vue";
import SUTabsList from "@/components/ui/SUTabsList.vue";
import SUTabsTrigger from "@/components/ui/SUTabsTrigger.vue";
import VCodeBlock from "@wdns/vue-code-block";

const accordionItems = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "Is it animated?",
    content: "Yes. It comes with a default animation.",
  },
];

let codeSample = `<script setup>
  import SUAccordion from "@/components/shared/SUAccordion.vue";
  import SUAccordionItem from "@/components/shared/SUAccordionItem.vue";
<\/script>`;

for (let i = 0; i < accordionItems.length; i++) {
  const item = accordionItems[i];
  item.index = i;

  if (i === 0) {
    codeSample += "\n\n<template>";
  } else {
    codeSample += `\n`;
  }

  codeSample += `
  <SUAccordionItem :index="${item.index}">
    <template #trigger>
      <p>${item.title}</p>
    </template>

    <template #content>
      <p>${item.content}</p>
    </template>
  </SUAccordionItem>`;

  if (i === accordionItems.length - 1) {
    codeSample += "\n</template>";
  }
}
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
            <SUAccordionItem
              v-for="item in accordionItems"
              :key="item.index"
              :index="item.index"
            >
              <template #trigger>
                <p>{{ item.title }}</p>
              </template>

              <template #content>
                <p>{{ item.content }}</p>
              </template>
            </SUAccordionItem>
          </SUAccordion>
        </AppPreview>
      </SUTabsContent>

      <SUTabsContent value="code">
        <!-- <div class="bg-zinc-800 text-white px-6 py-4 rounded-lg"> -->
        <!--   <pre><code>{{ codeSample}}</code></pre> -->
        <!-- </div> -->

        <VCodeBlock
          language="html"
          highlightjs
          max-height="400px"
          :code="codeSample"
          theme="github-dark"
        />
      </SUTabsContent>
    </SUTabs>
  </ComponentDetails>
</template>
@@/components/ui/SUAccordion.vue@/components/ui/SUAccordionItem.vue@/components/ui/SUTabsContent.vue@/components/ui/SUTabsList.vue/components/ui/SUTabsTrigger.vue
