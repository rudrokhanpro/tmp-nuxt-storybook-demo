<script setup lang="ts">
import type { RadioGroupItem } from "@nuxt/ui";

const items: RadioGroupItem[] = [
  { label: "daze", value: 2 },
  { label: "", value: "" },
];

const value = ref("aa");
</script>

<template>
  <div>
    <XInput v-model="value" />
  </div>
</template>
