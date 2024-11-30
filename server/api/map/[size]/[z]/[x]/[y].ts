export default defineEventHandler(async (event) => {
  const { x, y, z, size } = getRouterParams(event)

  const response = await fetch(
    // `https://api.maptiler.com/maps/basic-v2-dark/${size}/${z}/${x}/${y}.png?key=${import.meta.env.MAP_KEY}`
    `https://tile.openstreetmap.org/${z}/${x}/${y}.png`
  )
  if (!response.ok) {
    setResponseStatus(event, 500)
    return
  } else {
    appendHeaders(event, {
      'cache-control': 'public,max-age=3600',
    })
    return response.body
  }
})
