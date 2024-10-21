import type { Geolocation } from '~/types'

export const useLatLngToArray = (latlng: L.LatLng): Geolocation => {
  return {
    lat: latlng.lat,
    lng: latlng.lng,
  }
}
