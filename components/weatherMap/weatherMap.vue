<template>
  <CustomPanel class="col-span-2">
    <template #title>live radar</template>
    <template #default>
      <div class="mt-2 h-full w-full overflow-hidden rounded-[1rem]">
        <div
          v-if="error"
          class="glassmorphism flex h-full w-full items-center justify-center"
        >
          <div class="flex items-center gap-2 capitalize">
            <Icon name="tabler:alert-circle" class="text-[1.2em]"></Icon>
            failed to load weather map
          </div>
        </div>
        <div id="map" class="h-full w-full"></div>
      </div>
    </template>
  </CustomPanel>
</template>

<script lang="ts" setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const { geolocation } = storeToRefs(useLocationStore())

const map = ref<L.Map | undefined>()

const { data, error } = await useFetch(
  'https://api.rainviewer.com/public/weather-maps.json'
)

const size = 256

onMounted(() => {
  map.value = L.map('map', {
    attributionControl: false,
    boxZoom: false,
    center: [geolocation.value!.lat, geolocation.value!.lng],
    inertia: true,
    zoom: 5,
  })
  map.value.removeControl(map.value.zoomControl)
  L.tileLayer(`https://localhost:3000/api/map/${size}/{z}/{x}/{y}`, {
    tileSize: size,
    updateInterval: 1000,
  }).addTo(map.value)
})
</script>

<style></style>
