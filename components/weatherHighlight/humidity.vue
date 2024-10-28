<template>
  <div class="flex w-full items-end justify-between">
    <div>
      <span class="data-font">{{ data.current.humidity }}</span>
      <span class="unit-font">%</span>
    </div>
    <div class="glass-title text-[0.65rem]">
      The dew point is {{ localeTemp(data.current, 'dewpoint') }}&deg;<br />
      right now
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())
const { localeTemp } = useLocaleStore()
</script>

<style></style>
