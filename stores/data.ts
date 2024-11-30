import { defineStore } from 'pinia'
import json from '../test-data.json'

export const useDataStore = defineStore('data', () => {
  const data = ref(json)

  return { data }
})
