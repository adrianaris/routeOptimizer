import React, { useRef, useEffect } from 'react'
import {
  addLocation,
  removeLocation,
  addDepot
} from '../reducers/locationsReducer'
import { useDispatch } from 'react-redux'
import {
  featureCollection as turfFeatureCollection,
  point as turfPoint,
} from '@turf/turf'

import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import { getDepot } from '../services/getDepot'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Locations from './Locations'

const MapContainer = styled.div`
  height: 400px;
  position: absolute;
  width: 100%;
`
const Geocoder = styled.div`
  position: absolute;
  z-index: 1;
  width: 50%;
  left: 50%;
  margin-left: -10%;
  top: 380px;
`
const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;
`

const Map = () => {
  const token = process.env.REACT_APP_MAPBOX_TOKEN
  mapboxgl.accessToken = token
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
  const CENTER_INIT = [4.499122, 50.822624]
  const ZOOM_INIT = 11.67

  const dispatch = useDispatch()

  const mapContainer = useRef(null)
  const geocoderContainer = useRef(null)
  const map = useRef(null)

  /**
   * route sources
   */
  const addresses = turfFeatureCollection([])
  let route = turfFeatureCollection([])

  const createMapLayers = () => {
    geocoderContainer.current.appendChild(geocoder.onAdd(map.current))

    /**
     * create a point map for path
     */
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

  const addSearchLocation = (coordinates) => {
    dispatch(addLocation(coordinates))

    const point = turfPoint(coordinates.center)
    addresses.features.push({ point, id: coordinates.id })
    map.current.getSource('dropoffs-symbol').setData(addresses)
  }

  const removeAddress = (id) => {
    dispatch(removeLocation(id))
    addresses.features = addresses.features.filter(
      (address) => address.id !== id
    )
  }

  useEffect(() => {
    if (map.current !== null) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: CENTER_INIT,
      zoom: ZOOM_INIT,
    })
    map.current.on('load', createMapLayers);
    (async() => {
      const DEPOT = [await getDepot(CENTER_INIT[0], CENTER_INIT[1])]
      dispatch(addDepot(DEPOT))
    })()
  })

  geocoder.on('result', (event) => {
    addSearchLocation(event.result)
  })

  return (
    <FlexContainer>
      <div style={{ position: 'relative', width: '100%' }}>
        <Sidebar map={map.current} />
        <MapContainer ref={mapContainer} />
        <Geocoder ref={geocoderContainer} />
      </div>
      <Locations
        map={map.current}
        removeAddress={removeAddress}
      />
    </FlexContainer>
  )
}

export default Map
