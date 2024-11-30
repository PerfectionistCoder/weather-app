<template>
  <CustomPanel>
    <template #default>
      <div class="relative h-full w-full">
        <div class="absolute bottom-0 flex w-full flex-col gap-2">
          <div><img :src="`/images/${imgName}`" class="mb-2 h-32" /></div>
          <div class="flex font-dimension-[4rem]">
            <span>{{ localeTemp(data.current, 'temp') }}</span>
            <span class="font-dimension-[3.5rem]">&deg;</span>
            <span class="mt-2 font-bold font-dimension-[2rem]">{{
              tempSymbol
            }}</span>
          </div>
          <span class="capitalize">{{ data.current.condition.text }}</span>
          <span class="separator"></span>
          <div
            class="mt-2 flex flex-col gap-3 *:flex *:items-center *:gap-2 *:text-xs"
          >
            <div>
              <Icon name="tabler:map-pin" size="16" />
              <span>{{ data.location.name }}, {{ data.location.country }}</span>
            </div>
            <DisplayDate />
          </div>
        </div>
      </div>
    </template>
    <template #bg>
      <span
        class="absolute h-[40%] w-[45%] bg-current"
        :style="{ color: colors[0] }"
        style="border-radius: 50%; translate: -50% -40%"
      ></span>
      <span
        class="absolute h-[50%] w-[60%] bg-current"
        :style="{ color: colors[1] }"
        style="
          border-radius: 30% 50% 50% 30% / 20% 30% 30% 20%;
          translate: -20% 60%;
          rotate: -10deg;
        "
      ></span>
      <span
        class="absolute h-[80%] w-[40%] bg-current"
        :style="{ color: colors[2] }"
        style="border-radius: 50% / 40%; translate: 60%; rotate: -10deg"
      ></span>
    </template>
  </CustomPanel>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())
const { tempSymbol } = storeToRefs(useLocaleStore())
const { localeTemp } = useLocaleStore()

const weatherCode = computed(() => data.value.current.condition.code)
const is_day = computed(() => data.value.current.is_day)
const imgName = useWeatherImage(weatherCode, is_day)

const colors = useBgColor(is_day)
</script>
