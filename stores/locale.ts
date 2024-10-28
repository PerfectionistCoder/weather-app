import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', () => {
  const locale = computed(() => navigator.languages[0] || navigator.language)

  const tempSymbol = ref<'C' | 'F'>('C')
  const localeTemp = (data: { [key: string]: any }, key: string) => {
    return Math.round(data[key + '_' + tempSymbol.value.toLowerCase()])
  }

  const distanceSymbol = ref<'km' | 'mi'>('km')
  const localeDistance = (data: { [key: string]: any }, key: string) => {
    return Math.round(
      data[key + '_' + (distanceSymbol.value == 'km' ? 'km' : 'miles')]
    )
  }
  const speedSymbol = computed(() =>
    distanceSymbol.value == 'km' ? 'km/h' : 'mph'
  )
  const localeSpeed = (data: { [key: string]: any }, key: string) => {
    return Math.round(
      data[key + '_' + (speedSymbol.value == 'km/h' ? 'kph' : 'mph')]
    )
  }

  const airQualityIndex = ref<'us-epa-index' | 'gb-defra-index'>('us-epa-index')

  return {
    locale,
    tempSymbol,
    localeTemp,
    distanceSymbol,
    localeDistance,
    speedSymbol,
    localeSpeed,
    airQualityIndex,
  }
})
