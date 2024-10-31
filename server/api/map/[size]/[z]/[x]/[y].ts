export default defineEventHandler(async (event) => {
  const { x, y, z, size } = getRouterParams(event)

  const response = await fetch(
    `https://api.maptiler.com/maps/basic-v2-dark/${size}/${z}/${x}/${y}.png?key=${import.meta.env.MAP_KEY}`
  )
  if (!response.ok) {
    setResponseStatus(event, 500)
    return
  } else {
    setHeaders(event, {
      'content-type': 'image/png',
    })
    sendStream(event, response.body!)
  }
})
