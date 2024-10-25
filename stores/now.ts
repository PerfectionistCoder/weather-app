import { defineStore } from 'pinia'

export const useNowStore = defineStore('now', () => {
  const id = ref<NodeJS.Timeout | undefined>()

  const timestamp = ref<number>(Date.now())
  const start = () => {
    id.value = setInterval(() => {
      timestamp.value = Date.now()
    }, 1000)
  }
  const pause = () => {
    clearInterval(id.value)
  }

  return { timestamp, start, pause }
})
