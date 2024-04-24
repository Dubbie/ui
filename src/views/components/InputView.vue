<script setup>
import AppPreview from "@/components/AppPreview.vue";
import ComponentDetails from "@/components/ComponentDetails.vue";
import SUInput from "@/components/ui/SUInput.vue";
import SUTabs from "@/components/ui/SUTabs.vue";
import SUTabsContent from "@/components/ui/SUTabsContent.vue";
import SUTabsList from "@/components/ui/SUTabsList.vue";
import SUTabsTrigger from "@/components/ui/SUTabsTrigger.vue";
import AppCodeBlock from "@/components/AppCodeBlock.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { ref } from "vue";

const getCodeSample = () => {
  let codeSample = `<script setup>
<\/script>`;

  codeSample += `\n
<template>
</template>`;

  return codeSample;
};

const mainInput = ref("");
</script>

<template>
  <ComponentDetails
    name="Input"
    description="Displays an input or a component that looks like an input."
  >
    <SUTabs>
      <SUTabsList>
        <SUTabsTrigger value="preview">Preview</SUTabsTrigger>
        <SUTabsTrigger value="code">Code</SUTabsTrigger>
      </SUTabsList>

      <SUTabsContent value="preview">
        <AppPreview max-width="100%">
          <SUInput v-model="mainInput" placeholder="Email" type="email" />
        </AppPreview>
      </SUTabsContent>

      <SUTabsContent value="code">
        <AppCodeBlock :code="getCodeSample()" />
      </SUTabsContent>
    </SUTabs>

    <div class="mt-10">
      <SectionHeading>Examples</SectionHeading>

      <div class="flex flex-col gap-y-6">
        <div>
          <p class="font-semibold mb-2">Disabled</p>
          <AppPreview max-width="100%" compact>
            <SUInput
              v-model="mainInput"
              placeholder="Email"
              type="email"
              disabled
            />
          </AppPreview>
        </div>
      </div>
    </div>
  </ComponentDetails>
</template>
