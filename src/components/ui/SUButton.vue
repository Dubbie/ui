<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  color: {
    type: String,
    default: "dark/zinc",
  },
  outline: {
    type: Boolean,
    default: false,
  },
});

const colorClasses = computed(() => {
  // handle outline
  if (props.outline) {
    return {
      "dark/zinc": "ring-1 ring-zinc-800 text-zinc-800",
      dark: "ring-1 ring-zinc-800 text-zinc-800",
      zinc: "ring-1 ring-zinc-800 text-zinc-800",
      white: "ring-1 ring-zinc-800 text-zinc-800",
      red: "ring-1 ring-red-600 text-red-600",
      orange: "ring-1 ring-orange-500 text-orange-500",
      amber: "ring-1 ring-amber-500 text-amber-500",
      yellow: "ring-1 ring-yellow-400 text-yellow-400",
      lime: "ring-1 ring-lime-500 text-lime-500",
      green: "ring-1 ring-green-500 text-green-500",
      emerald: "ring-1 ring-emerald-500 text-emerald-500",
      teal: "ring-1 ring-teal-500 text-teal-500",
      cyan: "ring-1 ring-cyan-400 text-cyan-400",
      sky: "ring-1 ring-sky-500 text-sky-500",
      blue: "ring-1 ring-blue-500 text-blue-500",
      indigo: "ring-1 ring-indigo-500 text-indigo-500",
      violet: "ring-1 ring-violet-500 text-violet-500",
      purple: "ring-1 ring-purple-500 text-purple-500",
      fuchsia: "ring-1 ring-fuchsia-500 text-fuchsia-500",
      pink: "ring-1 ring-pink-500 text-pink-500",
      rose: "ring-1 ring-rose-500 text-rose-500",
    }[props.color];
  }

  return {
    "dark/zinc": "bg-zinc-800 text-white",
    dark: "bg-zinc-800 text-white",
    zinc: "bg-zinc-600 text-white",
    white: "bg-white text-zinc-800 ring-1 ring-zinc-300",
    red: "bg-red-600 text-white",
    orange: "bg-orange-500 text-white",
    amber: "bg-amber-500 text-black",
    yellow: "bg-yellow-400 text-black",
    lime: "bg-lime-500 text-black",
    green: "bg-green-500 text-white",
    emerald: "bg-emerald-500 text-white",
    teal: "bg-teal-500 text-white",
    cyan: "bg-cyan-400 text-black",
    sky: "bg-sky-500 text-white",
    blue: "bg-blue-500 text-white",
    indigo: "bg-indigo-500 text-white",
    violet: "bg-violet-500 text-white",
    purple: "bg-purple-500 text-white",
    fuchsia: "bg-fuchsia-500 text-white",
    pink: "bg-pink-500 text-white",
    rose: "bg-rose-500 text-white",
  }[props.color];
});
</script>

<template>
  <button
    :type="props.type"
    class="text-sm font-semibold px-3 py-1.5 rounded-lg"
    :class="colorClasses"
  >
    <slot />
  </button>
</template>
