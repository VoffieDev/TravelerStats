<script setup lang="ts">
import { ref } from "vue";
const searchValue = ref("");
</script>

<template>
  <q-toolbar class="text-white shadow-2 q-mb-xl temp">
    <q-toolbar-title align="left">TravelerStats</q-toolbar-title>
    <q-space />
    <q-input
      class="q-pa-sm"
      rounded
      outlined
      v-model="searchValue"
      bg-color="grey-10"
      label-color="white"
      label="Enter UID"
    />
    <q-icon
      name="bi-github"
      color="white"
      size="2rem"
    />
  </q-toolbar>
</template>

<style scoped>
.temp {
  background: rgba(0, 0, 0, 0.5);
}
</style>
