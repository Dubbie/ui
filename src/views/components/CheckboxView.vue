<script setup>
import AppPreview from "@/components/AppPreview.vue";
import ComponentDetails from "@/components/ComponentDetails.vue";
import SUCheckbox from "@/components/ui/SUCheckbox.vue";
import SUTabs from "@/components/ui/SUTabs.vue";
import SUTabsContent from "@/components/ui/SUTabsContent.vue";
import SUTabsList from "@/components/ui/SUTabsList.vue";
import SUTabsTrigger from "@/components/ui/SUTabsTrigger.vue";
import AppCodeBlock from "@/components/AppCodeBlock.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { ref } from "vue";

const getCodeSample = () => {
  let codeSample = `<script setup>
  import SUCheckbox from "@/components/ui/SUCheckbox.vue";

  const checked = ref(false);
<\/script>`;

  codeSample += `\n
<template>
  <SUCheckbox text="Accept terms and conditions" v-model="checked" />
</template>`;

  return codeSample;
};

const mainChecked = ref(false);
const descChecked = ref(false);
</script>

<template>
  <ComponentDetails
    name="Checkbox"
    description="A control that allows the user to toggle between checked and unchecked states."
  >
    <SUTabs>
      <SUTabsList>
        <SUTabsTrigger value="preview">Preview</SUTabsTrigger>
        <SUTabsTrigger value="code">Code</SUTabsTrigger>
      </SUTabsList>

      <SUTabsContent value="preview">
        <AppPreview max-width="100%">
          <SUCheckbox
            text="Accept terms and conditions"
            v-model="mainChecked"
          />
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
          <p class="font-semibold mb-2">With description</p>
          <AppPreview max-width="100%" compact>
            <SUCheckbox
              text="Accept terms and conditions"
              description="You must accept the terms and conditions."
              v-model="descChecked"
            />
          </AppPreview>
        </div>
      </div>
    </div>
  </ComponentDetails>
</template>
