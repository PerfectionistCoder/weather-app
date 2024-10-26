import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', () => {
  const locale = computed(() => navigator.languages[0] || navigator.language)

  const localeTempSymbol = ref<'C' | 'F'>('C')

  const speedSymbol = ref<'km/h' | 'mph'>('km/h')

  const distanceSymbol = ref<'km' | 'mi'>('km')

  const airQualityIndex = ref<'us-epa-index' | 'gb-defra-index'>('us-epa-index')

  return {
    locale,
    localeTempSymbol,
    speedSymbol,
    distanceSymbol,
    airQualityIndex
  }
})
