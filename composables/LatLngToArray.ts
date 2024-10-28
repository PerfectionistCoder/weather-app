import type { LatitudeLongitude } from '~/types'

export const useLatLngToArray = (latlng: L.LatLng): LatitudeLongitude => {
  return {
    lat: latlng.lat,
    lng: latlng.lng,
  }
}
