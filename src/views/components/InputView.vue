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
import SUButton from "@/components/ui/SUButton.vue";
import SULabel from "@/components/ui/SULabel.vue";

const getCodeSample = () => {
  let codeSample = `<script setup>
<\/script>`;

  codeSample += `\n
<template>
</template>`;

  return codeSample;
};
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
          <SUInput placeholder="Email" type="email" />
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
            <SUInput placeholder="Email" type="email" disabled />
          </AppPreview>
        </div>

        <div>
          <p class="font-semibold mb-2">With button</p>
          <AppPreview max-width="100%" compact>
            <div class="flex gap-x-2">
              <SUInput placeholder="Email" type="email" />
              <SUButton>Save</SUButton>
            </div>
          </AppPreview>
        </div>

        <div>
          <p class="font-semibold mb-2">With label</p>
          <AppPreview max-width="100%" compact>
            <div>
              <SULabel for="email">Email</SULabel>
              <SUInput
                id="email"
                placeholder="Email"
                type="email"
                class="block"
              />
            </div>
          </AppPreview>
        </div>
      </div>
    </div>
  </ComponentDetails>
</template>
