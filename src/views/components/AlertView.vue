<script setup>
import AppPreview from "@/components/AppPreview.vue";
import ComponentDetails from "@/components/ComponentDetails.vue";
import SUAlert from "@/components/ui/SUAlert.vue";
import SUTabs from "@/components/ui/SUTabs.vue";
import SUTabsContent from "@/components/ui/SUTabsContent.vue";
import SUTabsList from "@/components/ui/SUTabsList.vue";
import SUTabsTrigger from "@/components/ui/SUTabsTrigger.vue";
import AppCodeBlock from "@/components/AppCodeBlock.vue";
import SectionHeading from "@/components/SectionHeading.vue";

const getCodeSample = () => {
  let codeSample = `<script setup>
  import SUAlert from "@/components/ui/SUAlert.vue";
<\/script>`;

  codeSample += `\n
<template>
  <SUAlert title="Heads up!">
    <p>This is an example alert with the default info type.</p>
  </SUAlert>
</template>`;

  return codeSample;
};
</script>

<template>
  <ComponentDetails
    name="Alert"
    description="Displays a callout for user attention."
  >
    <SUTabs>
      <SUTabsList>
        <SUTabsTrigger value="preview">Preview</SUTabsTrigger>
        <SUTabsTrigger value="code">Code</SUTabsTrigger>
      </SUTabsList>

      <SUTabsContent value="preview">
        <AppPreview max-width="100%">
          <SUAlert title="Heads up!">
            <p>This is an example alert with the default info type.</p>
          </SUAlert>
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
          <p class="font-semibold mb-2">Danger</p>
          <AppPreview max-width="100%" compact>
            <SUAlert type="danger" title="Danger!">
              <p>This is an example alert with the danger type.</p>
            </SUAlert>
          </AppPreview>
        </div>

        <div>
          <p class="font-semibold mb-2">Success</p>
          <AppPreview max-width="100%" compact>
            <SUAlert type="success" title="Success!">
              <p>This is an example alert with the success type.</p>
            </SUAlert>
          </AppPreview>
        </div>

        <div>
          <p class="font-semibold mb-2">Warning</p>
          <AppPreview max-width="100%" compact>
            <SUAlert type="warning" title="Warning!">
              <p>This is an example alert with the warning type.</p>
            </SUAlert>
          </AppPreview>
        </div>
      </div>
    </div>
  </ComponentDetails>
</template>
