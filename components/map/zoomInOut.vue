<template>
  <div class="custom-map-components right-2 top-2 flex flex-col gap-2">
    <button
      v-for="icon in icons"
      :key="icon"
      class="custom-map-button flex size-8 items-center justify-center"
      @click="resize(icon)"
    >
      <Icon :name="icon" class="text-[1.5em]"></Icon>
    </button>
  </div>
</template>

<script lang="ts" setup>
import type L from 'leaflet'

const props = defineProps<{
  map: L.Map | undefined
}>()

const icons = ['tabler:plus', 'tabler:minus'] as const

const resize = (type: (typeof icons)[number]) => {
  if (props.map)
    switch (type) {
      case 'tabler:plus':
        props.map.zoomIn()
        break
      case 'tabler:minus':
        props.map.zoomOut()
        break
    }
}
</script>

<style></style>
