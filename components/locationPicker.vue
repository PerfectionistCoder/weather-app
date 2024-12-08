<template>
  <div>
    <div id="map" class="h-screen w-screen">
      <ZoomInOut :map="map"></ZoomInOut>
      <div
        class="custom-viewpoint-center custom-map-components *:custom-map-button bottom-2 flex gap-2 text-[1rem] *:flex *:items-center *:px-3 *:py-1.5"
      >
        <button @click="getLocation">find my location</button>
        <button :disabled="currentLocation == undefined" @click="exit()">
          confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from '~/assets/icons/marker.svg'
import type { LatitudeLongitude } from '~/types'

const { geolocation } = storeToRefs(useLocationStore())
const currentLocation = ref<LatitudeLongitude>()
const showMap = defineModel<boolean>('show-map')
const { data } = storeToRefs(useDataStore())

const marker = ref<L.Marker | undefined>()
const setMarker = ({
  latlng,
}: {
  [key: string]: any
  latlng: L.LatLngExpression
}) => {
  if (map.value && !marker.value) {
    const size = 32
    marker.value = L.marker(latlng, {
      draggable: true,
      autoPan: true,
      icon: L.icon({
        iconUrl: markerIcon,
        iconSize: [size, size],
        iconAnchor: [size / 2, size],
      }),
    }).addTo(map.value)
  } else marker.value?.setLatLng(latlng)
  currentLocation.value = useLatLngToArray(marker.value!.getLatLng())
}

const zoom = 3
const minZoom = 2
const maxZoom = 17
const focusZoom = 10

const size = 256

const map = ref<L.Map | undefined>()
onMounted(() => {
  map.value = L.map('map', {
    attributionControl: false,
    boxZoom: false,
    center: [0, 0],
    inertia: true,

    zoom,
    minZoom,
    maxZoom,
  })
  map.value.removeControl(map.value.zoomControl)
  L.tileLayer(`https://localhost:3000/api/map/${size}/{z}/{x}/{y}`, {
    tileSize: size,
  }).addTo(map.value)

  map.value.on('click', (event) => setMarker(event))

  if (geolocation.value) {
    const latlng = [
      geolocation.value.lat,
      geolocation.value.lng,
    ] as L.LatLngExpression
    map.value.setView(geolocation.value, focusZoom)
    setMarker({ latlng })
  }
})

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        map.value?.setView(latlng, focusZoom)
        setMarker({ latlng })
      },
      (err) => {
        switch (err.code) {
          case 1:
            alert('Permission for acquiring your geolocation is denied.')
            break
          default:
            alert('Fail to acquire your geolocation.')
            break
        }
      }
    )
  } else alert('Geolocation is not supported by this browser.')
}

const exit = async () => {
  const res = await $fetch('/api/data', {
    query: currentLocation.value,
  })

  data.value = res

  geolocation.value = currentLocation.value
  showMap.value = false
}
</script>

<style scoped lang="postcss"></style>
