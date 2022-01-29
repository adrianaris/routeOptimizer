import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import { getDepot } from '../services/getDepot'
import { addStart, addEnd } from '../reducers/startendReducer'
import { addLocation } from '../reducers/locationsReducer'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Locations from './Locations'
import _ from 'lodash'

// import { initState } from './init10locations' //init 10 locations for testing

const MapContainer = styled.div`
  height: 360px;
  position: absolute;
  width: 100%;
  margin: auto;
`
const Geocoder = styled.div`
  position: absolute;
  margin: auto;
  z-index: 1;
  top: 370px;
`
const FlexContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  > div:first-of-type {
    position: relative;
    width: 100%;
  }
  @media (min-aspect-ratio: 29/30) {
    align-items: flex-start;
    justify-content: start;
    flex-direction: row;
    > div: first-of-type {
      position: relative;
      width: 60%;
      height: 100%;
      > div: last-of-type {
        height: 98vh;
      }
    }
    > div: nth-of-type(2) {
      top: 0px;
      right 10%;
    }
    > div: last-of-type {
      top: 40px;
    }
  }
`

const Map = () => {
  const token = process.env.REACT_APP_MAPBOX_TOKEN
  mapboxgl.accessToken = token
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })

  const userDATA = useSelector((state) => state.userDATA)
  const DEPOT = useSelector((state) => state.DEPOT)

  const dispatch = useDispatch()

  const mapContainer = useRef(null)
  const geocoderContainer = useRef(null)
  const map = useRef(null)

  /**
   * route sources
   **/
  const route = useSelector((state) => state.route)
  const addresses = useSelector((state) => state.addresses)

  /**
   * Since I implemented the IP geolocation I'm not sure
   * we still need the navigator.
   * I find the solution with the ipgeolocation more pleasant since it
   * doesn't bother the user with prompts
   **/
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords }) => CENTER_INIT = [coords.longitude, coords.latitude],
  //     console.error,
  //     { maximumAge: 0, enableHighAccuracy: true }
  //   )
  // } else {
  //   console.log('browser doesn\'t allow geolocation')
  // }

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
    /**
     * The addLocation action receives an array so that
     * it can also accept multiple locations as argument
     * (like from a file)
     */
    dispatch(addLocation([coordinates]))
    map.current.getSource('dropoffs-symbol').setData(addresses)
  }

  useEffect(() => {
    if (map.current !== null) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [4.3755, 50.8550],
      zoom: 7
    })
    map.current.on('load', createMapLayers)

    // dispatch(addLocation(initState)) //init 10 addresses for testing
  })

  useEffect(() => {
    if (!_.isEmpty(DEPOT.start) && !_.isEmpty(DEPOT.end)) return
    if (!userDATA) return
    (async () => {
      const setDEPOT = await getDepot(userDATA.longitude, userDATA.latitude)
      dispatch(addStart(setDEPOT))
      dispatch(addEnd(setDEPOT))
    })()
    map.current.setZoom(12)
    map.current.setCenter({ lng: userDATA.longitude, lat: userDATA.latitude })
  }, [userDATA])

  geocoder.on('result', (event) => {
    addSearchLocation(event.result)
  })

  return (
    <FlexContainer>
      <div>
        <Sidebar map={map.current} />
        <MapContainer ref={mapContainer} />
      </div>
      <Geocoder ref={geocoderContainer} />
      <Locations map={map.current} />
    </FlexContainer>
  )
}

export default Map
