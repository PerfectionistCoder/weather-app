import { defineStore } from 'pinia'
import type { LatitudeLongitude } from '~/types'

export const useLocationStore = defineStore('location', () => {
  const geolocation = ref<LatitudeLongitude | undefined>()

  return { geolocation }
})
