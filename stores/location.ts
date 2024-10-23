import { defineStore } from 'pinia'
import type { LatitudeLongtitude } from '~/types'

export const useLocationStore = defineStore('location', () => {
  const geolocation = ref<LatitudeLongtitude | undefined>()

  return { geolocation }
})
