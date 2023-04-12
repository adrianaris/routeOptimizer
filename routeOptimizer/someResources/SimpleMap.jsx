import turf from 'turf'
import mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef, useState } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import axios from 'axios'

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWRyaWFuYXJpcyIsImEiOiJja3kzOTl0YzkwdGZuMm5xdHJzMHJ5b2p4In0.kXH2cOyOUq6WIOmYH5sKAA'
const CENTER_INIT = [10.019393, 45.140938]
const ZOOM_INIT = 14

// function Map({ setCurrent, current }) {
const Map = () => {
  const [current, setCurrent] = useState({})
  const [googleMapsUrl, setGoogleMapsUrl] = useState('')

  const mapRef = useRef(null)
  const geocoderRef = useRef(null)

  // route sources
  const addresses = turf.featureCollection([])
  let route = turf.featureCollection([])

  // mapbox utilities
  const map = useRef(null)
  const geocoder = new MapboxGeocoder({
    mapboxgl,
    accessToken: mapboxgl.accessToken,
  })

  const createMapLayers = () => {
    geocoderRef.current.appendChild(geocoder.onAdd(map.current))

    // create a point map for path
    map.current.addLayer({
      id: 'dropoffs-symbol',
      type: 'symbol',
      source: {
        data: addresses,
        type: 'geojson',
      },
      layout: {
        'icon-allow-overlap': true,
        'icon-ignore-placement': true,
        'icon-image': 'marker-15',
      },
    })

    map.current.addSource('route', {
      type: 'geojson',
      data: route,
    })

    map.current.addLayer(
      {
        id: 'routeline-active',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#3887be',
          'line-width': ['interpolate', ['linear'], ['zoom'], 12, 3, 22, 12],
        },
      },
      'waterway-label'
    )

    map.current.addLayer(
      {
        id: 'routearrows',
        type: 'symbol',
        source: 'route',
        layout: {
          'symbol-placement': 'line',
          'text-field': '▶',
          'text-size': ['interpolate', ['linear'], ['zoom'], 12, 24, 22, 60],
          'symbol-spacing': [
            'interpolate',
            ['linear'],
            ['zoom'],
            12,
            30,
            22,
            160,
          ],
          'text-keep-upright': false,
        },
        paint: {
          'text-color': '#3887be',
          'text-halo-color': 'hsl(55, 11%, 96%)',
          'text-halo-width': 3,
        },
      },
      'waterway-label'
    )
  }

  const addAddressBySearch = (coordinates) => {
    // coordinates = { center, id, place_name, ...more }
    setCurrent((state) => ({ ...state, [coordinates.id]: coordinates }))
    const point = turf.point(coordinates.center)
    addresses.features.push({ point, id: coordinates.id })
    map.current.getSource('dropoffs-symbol').setData(addresses)
  }

  const optimize = async () => {
    const coordinates = Object.values(current).map(({ center }) =>
      center.join(',')
    )

    const { data } = await axios.get(
      `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinates.join(
        ''
      )}?overview=full&steps=true&geometries=geojson&source=first&destination=last&roundtrip=false&access_token=${
        mapboxgl.accessToken
      }`
    )

    if (data.code !== 'Ok') {
      console.log('Error')
      return
    }

    /**
     * the location is reversed bacause
     * in Google maps the coordinates are reversed
     */
    const waypoints = data.waypoints
      .sort((a, b) => a.waypoint_index - b.waypoint_index)
      .map(({ location }) => location[1] + ',' + location[0])

    setGoogleMapsUrl(
      `https://www.google.com/maps/dir/?api=1&waypoints=${encodeURI(
        waypoints.join('|')
      )}`
    )

    const routeGeoJSON = turf.featureCollection([
      turf.feature(data.trips[0].geometry),
    ])

    map.current.getSource('route').setData(routeGeoJSON)
  }

  const removeAddress = (id) => {
    const updatedKeys = Object.keys(current).filter((key) => key !== id)
    const newCurrent = {}
    for (const key of updatedKeys) newCurrent[key] = current[key]
    setCurrent(newCurrent)
    addresses.features = addresses.features.filter(
      (address) => address.id !== id
    )
  }
  /**
   * this is a regex to test if the browser is on mobile but it does not work yet
   * see http://detectmobilebrowsers.com/
   * */

  // window.mobileCheck = () => {
  //   let check = false
  //   //eslint-disable-next-line
  //   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true})(navigator.userAgent||navigator.vendor||window.opera)
  //   return false
  // }

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: CENTER_INIT,
      zoom: ZOOM_INIT,
    })
    map.current.on('load', createMapLayers)
  }, [])

  geocoder.on('result', (e) => addAddressBySearch(e.result))

  // map.current.on('click', addAddressByPin)

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1em' }}>
      <div
        style={{
          position: 'relative',
          width: '60%',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
          }}
          ref={mapRef}
        />
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            height: '100px',
            margin: 'auto',
          }}
          ref={geocoderRef}
        />
      </div>
      <div>
        <button onClick={optimize}>optimize</button>
        <button>
          <a href={googleMapsUrl}>open in maps</a>
        </button>
        <ul>
          {current.map(({ id, place_name }) => (
            <li key={id}>
              <p>{place_name}</p>
              <button onClick={() => removeAddress(id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Map
