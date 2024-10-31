export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?q=${query.lat},${query.lng}&key=${import.meta.env.DATA_KEY}&days=7&aqi=yes`
  )
  return response.body
})
