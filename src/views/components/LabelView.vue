<script setup>
import AppPreview from "@/components/AppPreview.vue";
import ComponentDetails from "@/components/ComponentDetails.vue";
import SULabel from "@/components/ui/SULabel.vue";
import SUTabs from "@/components/ui/SUTabs.vue";
import SUTabsContent from "@/components/ui/SUTabsContent.vue";
import SUTabsList from "@/components/ui/SUTabsList.vue";
import SUTabsTrigger from "@/components/ui/SUTabsTrigger.vue";
import AppCodeBlock from "@/components/AppCodeBlock.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import SUButton from "@/components/ui/SUButton.vue";

const getCodeSample = () => {
  let codeSample = `<script setup>
  import SULabel from "@/components/ui/SULabel.vue";
<\/script>`;

  codeSample += `\n
<template>
  <SULabel for="email">Email</SULabel>
</template>`;

  return codeSample;
};
</script>

<template>
  <ComponentDetails
    name="Label"
    description="Displays a label or a component that looks like a label."
  >
    <SUTabs>
      <SUTabsList>
        <SUTabsTrigger value="preview">Preview</SUTabsTrigger>
        <SUTabsTrigger value="code">Code</SUTabsTrigger>
      </SUTabsList>

      <SUTabsContent value="preview">
        <AppPreview max-width="100%">
          <SULabel for="email">Email</SULabel>
        </AppPreview>
      </SUTabsContent>

      <SUTabsContent value="code">
        <AppCodeBlock :code="getCodeSample()" />
      </SUTabsContent>
    </SUTabs>
  </ComponentDetails>
</template>
