<template>
  <CustomPanel class="col-span-2">
    <template #title>weather condition map</template>
    <template #default>
      <div id="map" class="mt-2 h-full w-full rounded-[1rem]"></div>
    </template>
  </CustomPanel>
</template>

<script lang="ts" setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const { geolocation } = storeToRefs(useLocationStore())

const map = ref<L.Map | undefined>()

const { data } = await useFetch(
  'https://api.rainviewer.com/public/weather-maps.json'
)

const size = 256

onMounted(() => {
  map.value = L.map('map', {
    attributionControl: false,
    boxZoom: false,
    center: [geolocation.value.lat, geolocation.value.lng],
    inertia: true,
    zoom: 5,
  })
  map.value.removeControl(map.value.zoomControl)
  L.tileLayer(`https://localhost:3000/api/map/${size}/{z}/{x}/{y}`, {
    tileSize: size,
    updateInterval: 1000,
  }).addTo(map.value)
  L.tileLayer(
    `${data.value.host}${data.value.radar.nowcast[0].path}/256/{z}/{x}/{y}/8/1_1.png`
  ).addTo(map.value)
})
</script>

<style></style>
