<template>
  <div v-if="showMap">
    <LocationPicker v-model:location="location" v-model:show-map="showMap" />
  </div>
  <div v-else>
    {{ location }}
    <button @click="showMap = true">show map</button>
  </div>
</template>

<script lang="ts" setup>
import type { Geolocation } from '~/types'

const location = ref<Geolocation>()
const showMap = ref(true)
</script>

<style></style>
