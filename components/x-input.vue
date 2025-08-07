<script setup lang="ts">
const modelValue = defineModel<string>({ default: "default" });
</script>

<template>
  <div>
    <input type="text" v-model="modelValue" />
  </div>
</template>
