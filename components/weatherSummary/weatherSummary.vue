<template>
  <CustomPanel>
    <template #default>
      <div class="relative h-full w-full">
        <div class="absolute z-[1] flex w-full justify-end">
          <button class="glassmorphism flex rounded-full p-3">
            <Icon name="tabler:arrows-exchange" size="24" />
          </button>
        </div>
        <div class="absolute bottom-0 flex w-full flex-col gap-1">
          <div class="flex *:leading-[1em]">
            <div class="text-[3.5em]">{{ 28 }}</div>
            <div class="text-[3em]">&deg;</div>
            <div class="mt-1 text-[2em] font-bold">
              {{ localeTempSymbol }}
            </div>
          </div>
          <div class="mt-1 flex items-center gap-1">
            <Icon name="wi:rain-mix" size="36" />
            <span class="text-sm font-medium capitalize">{{
              'Rainy Storm Clouds'
            }}</span>
          </div>
          <span class="separator my-2"></span>
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
        class="absolute h-24 w-32 bg-sky-500 opacity-30"
        style="
          border-radius: 5rem 10rem 10rem 5rem / 4rem 5rem 5rem 4rem;
          translate: -2rem 5rem;
          rotate: -10deg;
        "
      ></span>
      <span
        class="absolute h-24 w-24 bg-purple-500 opacity-30"
        style="border-radius: 5rem / 4rem; translate: -3rem -4rem"
      ></span>
      <span
        class="absolute h-52 w-20 bg-blue-500 opacity-30"
        style="
          border-radius: 15rem / 30rem;
          translate: 5rem -1rem;
          rotate: -10deg;
        "
      ></span>
    </template>
  </CustomPanel>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())
const { localeTempSymbol } = storeToRefs(useLocaleStore())
</script>
