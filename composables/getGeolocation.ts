export const useGetGeolocation = () => {
  const params = useRoute().params as { [key: string]: string }
  console.log(params)
  return computed(() =>
    ([params.latitude, params.longitude].map((geo) => Number(geo) || 0) as [
          number,
          number,
        ])
  )
}
