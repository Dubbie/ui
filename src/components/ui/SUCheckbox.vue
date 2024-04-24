<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="flex space-x-2">
    <div class="relative">
      <input
        type="checkbox"
        class="appearance-none border border-zinc-800 size-4 rounded"
        :class="{
          'bg-zinc-800': props.modelValue,
          'bg-white': !props.modelValue,
        }"
        :checked="props.modelValue"
        @input="emit('update:modelValue', $event.target.checked)"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="size-4 text-white absolute top-0.5 left-0"
        v-show="props.modelValue"
      >
        <path
          fill-rule="evenodd"
          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div>
      <p class="font-medium text-sm">{{ props.text }}</p>
      <p class="text-sm text-zinc-400" v-if="props.description">
        {{ props.description }}
      </p>
    </div>
  </label>
</template>
