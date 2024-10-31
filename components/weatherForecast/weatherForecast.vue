<template>
  <CustomPanel class="flex flex-col gap-2">
    <template #title>daily forecast</template>
    <template #default>
      <div
        class="glassmorphism mt-2 flex w-full flex-col items-center justify-between rounded-[1rem] px-4 py-2"
      >
        <div class="flex w-full items-center gap-4">
          <div class="flex size-10 flex-col items-center gap-0.5">
            <img
              :class="[precipChance ? 'size-8' : 'size-10']"
              :src="`/images/${useWeatherImage(toRef(tomorrow.day.condition.code), toRef(1)).value}`"
            />
            <div
              v-if="precipChance"
              class="text-center text-sky-400 font-dimension-[0.8rem]"
            >
              {{ precipChance }}%
            </div>
          </div>
          <div class="flex flex-col gap-1 py-1">
            <div class="glass-subtle font-dimension-[0.7rem]">Tomorrow</div>
            <div class="flex items-end gap-1">
              <span class="font-bold font-dimension-[1.2rem]"
                >{{ localeTemp(tomorrow.day, 'avgtemp') }}&deg;</span
              >
            </div>
            <div class="glass-subtle font-dimension-[0.75rem]">
              {{ tomorrow.day.condition.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 flex flex-col gap-2 overflow-auto">
        <div
          v-for="day in data.forecast.forecastday.slice(2)"
          :key="day.date_epoch"
          class="glass-subtle grid grid-cols-3 items-center justify-between font-dimension-[0.75rem]"
        >
          <div class="flex items-center">
            <img
              class="size-10"
              :src="`/images/${useWeatherImage(toRef(day.day.condition.code), toRef(1)).value}`"
            />
          </div>
          <div>
            {{
              new Date(day.date_epoch * 1000).toLocaleDateString(locale, {
                day: '2-digit',
                month: 'short',
              })
            }}
          </div>
          <div>
            {{
              new Date(day.date_epoch * 1000).toLocaleDateString(locale, {
                weekday: 'long',
              })
            }}
          </div>
        </div>
      </div>
    </template>
  </CustomPanel>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())
const { locale } = storeToRefs(useLocaleStore())
const { localeTemp } = useLocaleStore()

const tomorrow = computed(() => data.value.forecast.forecastday[0])
const precipChance = computed(
  () =>
    tomorrow.value.day.daily_chance_of_rain ||
    tomorrow.value.day.daily_chance_of_snow
)
</script>

<style></style>
