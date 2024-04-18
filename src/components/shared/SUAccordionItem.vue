<script setup>
import { IconChevronDown } from "@tabler/icons-vue";
import { inject } from "vue";

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
});

const isActive = inject("isActive");
const toggleAccordion = inject("toggleAccordion");
</script>

<template>
  <div class="border-b border-zinc-200 overflow-hidden transition-all">
    <div
      class="flex justify-between items-center text-sm font-medium py-4 cursor-pointer hover:underline"
      @click="toggleAccordion(index)"
    >
      <div>
        <slot name="trigger" />
      </div>

      <div>
        <IconChevronDown
          class="text-zinc-400 transition-all"
          size="16"
          stroke-width="2"
          :class="{
            'transform rotate-180': isActive(index),
          }"
        />
      </div>
    </div>

    <transition name="slide">
      <div v-show="isActive(index)">
        <div class="text-sm mb-3">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave-from {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
