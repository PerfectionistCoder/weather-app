<template>
  <div v-if="showMap">
    <LocationPicker v-model:show-map="showMap" />
  </div>
  <div v-else class="flex h-screen w-screen items-center justify-center">
    <div
      class="grid h-min w-full max-w-fit grid-cols-3 content-center justify-center gap-4 *:row-span-1"
    >
      <WeatherSummary />
      <WeatherHighlight />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNowStore } from '~/stores/now'

const { start } = useNowStore()

onMounted(() => {
  start()
})

const showMap = ref(false)
</script>

<style lang="postcss"></style>
