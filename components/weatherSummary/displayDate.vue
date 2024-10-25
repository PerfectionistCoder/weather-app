<template>
  <div>
    <Icon name="tabler:calendar-month" size="16" />
    <span>{{ date }}</span>
    <span class="font-bold">{{ time }}</span>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useNowStore } from '~/stores/now'
const { timestamp } = storeToRefs(useNowStore())

const { locale } = storeToRefs(useLocaleStore())

const time = computed(() =>
  new Date(timestamp.value).toLocaleTimeString(locale.value, {
    hour: '2-digit',
    minute: '2-digit',
  })
)
const date = computed(() =>
  new Date(timestamp.value).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
)
</script>

<style></style>
