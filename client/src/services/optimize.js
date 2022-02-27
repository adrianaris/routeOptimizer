import axios from 'axios'
import {
  lineString as turfLineString,
  bbox as turfBbox,
  featureCollection as turfFeatureCollection,
  feature as turfFeature
} from '@turf/turf'


const optimize = async locations => {
  axios.post('/api/address', locations)
  const token = process.env.REACT_APP_MAPBOX_TOKEN
  const coordinates = locations.map(({ center }) => center.join(','))

  const { data } = await axios.get(`https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinates.join(';')}?overview=full&steps=true&geometries=geojson&source=first&destination=last&roundtrip=false&access_token=${token}`)
  if (data.code !== 'Ok') {
    console.log('Error retrieving optimized route')
    return
  }

  let orderedIndexArray = []
  for (let i in data.waypoints) {
    orderedIndexArray.push(data.waypoints[i].waypoint_index)
  }

  /**
   * The location is reversed bacause
   * in GoogleMaps the coordinates are reversed
   */
  const waypoints = data.waypoints
    .sort((a, b) => a.waypoint_index - b.waypoint_index)
    .map(({ location }) => location[1] + ',' + location[0])

  const routeGeoJSON = {
    ...turfFeatureCollection([
    turfFeature({ ...data.trips[0].geometry })
    ]),
    distance: data.trips[0].distance,
    duration: data.trips[0].duration,
    bbox: turfBbox(turfLineString(locations.map(elem => elem.center)))
  }
  console.log(routeGeoJSON)

  return { routeGeoJSON, orderedIndexArray, waypoints }
}

export default optimize
