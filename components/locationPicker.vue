<template>
  <div>
    <LMap
      ref="map"
      v-model:zoom="zoom"
      :use-global-leaflet="false"
      :center="geo"
    >
      <LTileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        :min-zoom="1"
        :max-zoom="20"
      />
      <LMarker
        :lat-lng="geo"
        :draggable="true"
        @update:lat-lng="(e) => console.log(e)"
      />
    </LMap>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

const zoom = ref(5)

const geo = useGetGeolocation()
</script>

<style></style>
