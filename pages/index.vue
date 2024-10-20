<template>
  <div v-if="status == 'pending'">
    <LoadingAnimation />
  </div>
  <div v-else></div>
</template>

<script lang="ts" setup>
import type { FetchResponse } from 'ofetch'

const navigate = async (
  path: string,
  response: FetchResponse<any> | undefined
) => {
  const data = response?._data
  await navigateTo({
    path,
    query: {
      latitude: data?.lat,
      longitude: data?.lon,
      city: data?.city,
    },
  })
}

const locationPickerPage = '/map'

const { status } = await useFetch('json/false', {
  params: {
    fields: 'status,lat,lon,city',
  },
  baseURL: 'http://ip-api.com/',
  server: false,
  cache: 'force-cache',
  lazy: true,

  async onRequestError({ response }) {
    await navigate(locationPickerPage, response)
  },
  async onResponse({ response }) {
    if (response._data.status == 'fail')
      await navigate(locationPickerPage, response)
    else await navigate('/', response)
  },
  async onResponseError({ response }) {
    await navigate(locationPickerPage, response)
  },
})
</script>

<style></style>
