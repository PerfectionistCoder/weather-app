import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const data = ref()
  const getData = async (lat: number, lng: number) => {
    const { data: res } = await useFetch('/api/data', {
      query: {
        lat,
        lng,
      },
    })

    data.value = res.value
  }

  return { data, getData }
})
