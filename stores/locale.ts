import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', () => {
  const locale = computed(() => navigator.languages[0] || navigator.language)

  const localeTempSymbol = ref<'C' | 'F'>('C')

  const speedSymbol = ref<'km/h' | 'mph'>('km/h')

  return {
    locale,
    localeTempSymbol,
    speedSymbol,
  }
})
