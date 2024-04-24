<script setup>
import AppPreview from "@/components/AppPreview.vue";
import ComponentDetails from "@/components/ComponentDetails.vue";
import SUButton from "@/components/ui/SUButton.vue";
import SUTabs from "@/components/ui/SUTabs.vue";
import SUTabsContent from "@/components/ui/SUTabsContent.vue";
import SUTabsList from "@/components/ui/SUTabsList.vue";
import SUTabsTrigger from "@/components/ui/SUTabsTrigger.vue";
import AppCodeBlock from "@/components/AppCodeBlock.vue";
import SectionHeading from "@/components/SectionHeading.vue";

const getCodeSample = () => {
  let codeSample = `<script setup>
  import SUButton from "@/components/ui/SUButton.vue";
<\/script>`;

  codeSample += `\n
<template>
  <SUButton>Save changes</SUButton>
</template>`;

  return codeSample;
};

const colors = [
  "dark",
  "zinc",
  "white",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];
</script>

<template>
  <ComponentDetails
    name="Button"
    description="Displays a button or a component that looks like a button."
  >
    <SUTabs>
      <SUTabsList>
        <SUTabsTrigger value="preview">Preview</SUTabsTrigger>
        <SUTabsTrigger value="code">Code</SUTabsTrigger>
      </SUTabsList>

      <SUTabsContent value="preview">
        <AppPreview compact>
          <SUButton>Save changes</SUButton>
        </AppPreview>
      </SUTabsContent>

      <SUTabsContent value="code">
        <AppCodeBlock :code="getCodeSample()" />
      </SUTabsContent>
    </SUTabs>

    <div class="mt-10">
      <SectionHeading>Outline</SectionHeading>
      <p class="text-sm text-zinc-500 mb-6">
        Use the <code class="text-zinc-800 font-semibold">outline</code> prop to
        create an outline button. You can also specify the
        <code class="text-zinc-800 font-semibold">color</code> prop to change
        the color of the outlined button.
      </p>

      <AppPreview compact>
        <SUButton outline>Save changes</SUButton>
      </AppPreview>
    </div>

    <div class="mt-10">
      <table class="table w-full">
        <thead class="border-b text-sm font-semibold">
          <tr>
            <td class="w-1/3">Color</td>
            <td class="w-2/3 align-middle" align="center">Example</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="color in colors" :key="color">
            <td class="font-mono">`{{ color }}`</td>
            <td class="py-3" align="center">
              <SUButton :color="color">Save changes</SUButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </ComponentDetails>
</template>
