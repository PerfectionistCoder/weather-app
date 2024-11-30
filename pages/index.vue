<template>
  <div v-if="showMap">
    <LocationPicker v-model:show-map="showMap" />
  </div>
  <div v-else class="flex h-screen w-screen items-center justify-center">
    <div
      class="grid grid-cols-[repeat(3,320px)] grid-rows-[auto,20rem] content-center justify-center gap-4"
    >
      <WeatherSummary />
      <WeatherHighlight />
      <WeatherForecast />
      <WeatherMap />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNowStore } from '~/stores/now'

const { start } = useNowStore()

onMounted(() => {
  start()
})

const showMap = ref(true)
</script>

<style lang="postcss"></style>
