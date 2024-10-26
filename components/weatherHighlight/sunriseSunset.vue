<template>
  <HighlightSemicircle>
    <svg
      v-for="i in 2"
      :key="i"
      viewBox="0 0 100 100"
      :style="`rotate: ${is_day ? deg : -90}deg`"
      class="first:blur-sm"
    >
      <defs>
        <linearGradient id="dash">
          <stop
            offset="50%"
            stop-color="currentColor"
            class="text-yellow-400"
          />
          <stop
            offset="50%"
            stop-color="currentColor"
            class="text-[color-mix(in_srgb,white,transparent_80%)]"
          />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        :r="r"
        fill="none"
        stroke="url('#dash')"
        stroke-width="0.05rem"
        stroke-dasharray="2.5 2"
      />
    </svg>
    <div
      v-if="is_day"
      class="overflow-hidden"
      :style="{
        width: `${sizePercent}%`,
        height: `${sizePercent}%`,
        'mask-image': `linear-gradient(90deg,black ${progress * 100}%,transparent ${progress * 100}%)`,
      }"
    >
      <div class="flex items-center justify-center">
        <span
          class="absolute -mt-32 size-32 rounded-full bg-yellow-400 blur-[32px]"
        ></span>
      </div>
    </div>
    <div
      v-if="is_day"
      :style="{
        height: `${sizePercent}%`,
        rotate: `${deg}deg`,
      }"
    >
      <div class="flex items-center justify-center">
        <Icon
          name="tabler:sun-filled"
          class="absolute text-[1.5rem] text-yellow-400"
        ></Icon>
      </div>
    </div>
  </HighlightSemicircle>
  <FooterLabel>
    <div class="relative flex items-center justify-center">
      <div
        :class="`absolute flex justify-between`"
        :style="{ width: `calc(${sizePercent}% - 0.5rem)` }"
      >
        <div
          v-for="i in 2"
          :key="i"
          :class="`flex items-center justify-center`"
        >
          <div
            class="absolute h-1 w-3 rounded-sm bg-yellow-400 shadow-[0_0_0.5rem_theme(colors.yellow.400)]"
          ></div>
        </div>
      </div>
      <span class="separator h-[1px]"></span>
    </div>
    <div class="h-full"></div>
    <div class="flex w-full justify-between px-2">
      <div
        v-for="icon in ['sunrise', 'sunset'] as const"
        :key="icon"
        class="flex flex-col gap-0.5 first:items-start last:items-end"
      >
        <Icon
          class="-mb-0.5 text-[1.5rem] text-[color-mix(in_srgb,white,transparent_70%)]"
          :name="`wi:${icon}`"
        >
        </Icon>
        <div
          class="font-bold capitalize text-yellow-400 font-dimension-[0.6rem]"
        >
          {{ icon }}
        </div>
        <div class="font-bold font-dimension-[0.7rem]">
          {{
            new Date(sunTime[icon]).toLocaleTimeString(locale, {
              hour: '2-digit',
              minute: '2-digit',
            })
          }}
        </div>
      </div>
    </div>
  </FooterLabel>
</template>

<script lang="ts" setup>
const {
  data: {
    value: {
      current: { is_day },
      forecast: {
        forecastday: [
          {
            astro: { sunrise, sunset },
          },
        ],
      },
    },
  },
} = storeToRefs(useDataStore())
const { locale } = storeToRefs(useLocaleStore())
const { timestamp } = storeToRefs(useNowStore())

const parseTime = (str: string) => {
  const [hr, min, dayPeriod] = str
    .split(':')
    .join(' ')
    .split(' ')
    .map((e) => Number(e) || e) as [number, number, string]
  return new Date(timestamp.value).setHours(
    (dayPeriod.toLowerCase() == 'pm' ? 12 : 0) + hr,
    min
  )
}
const sunTime = computed(() => ({
  sunrise: parseTime(sunrise),
  sunset: parseTime(sunset),
}))

const sizePercent = 80
const r = 50 * (sizePercent / 100)

const progress = computed(
  () =>
    (new Date().setHours(13) - sunTime.value.sunrise) /
    (sunTime.value.sunset - sunTime.value.sunrise)
)
const tan = computed(() => {
  const x = progress.value
  const y = Math.sqrt(0.25 - Math.pow(x - 0.5, 2))
  return Math.atan(-y / Math.abs(0.5 - x)) * (180 / Math.PI)
})
const deg = ref(progress.value < 0.5 ? -(90 + tan.value) : 90 + tan.value)
</script>

<style></style>
