import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mapboxgl from '!mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import _ from 'lodash'
import { addLocation } from '../reducers/addressesReducer'
import { removeGoogleUrl } from '../reducers/googleUrlReducer'
import { setNotification } from '../reducers/notificationReducer'
import { addStart, addEnd } from '../reducers/startendReducer'
import { getDepot } from '../services/getDepot'
import { initMap } from '../reducers/mapReducer'
import styled from 'styled-components'
//import Sidebar from './Sidebar'
import OverviewButton from './OverviewButton'
import Locations from './Locations'
import Notification from './Notification'
import { featureCollection as turfFeatureCollection } from '@turf/turf'

const MapContainer = styled.div`
  height: 38vh;
  position: relative;
  width: 98%;
  margin: auto;
  border: 2px solid black;
  border-radius: 8px;
`
const Geocoder = styled.div`
  position: relative;
  padding: 0.5rem;
  margin: 3px auto;
  > div {
    border: 2px solid black;
    border-radius: 8px;
    margin: auto;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding-left: 0;
  }
`
const FlexContainer = styled.div`
  position: relative;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  > div:first-of-type {
    position: relative;
    width: 100%;
  }
  @media (min-aspect-ratio: 29/30) {
    align-items: flex-start;
    justify-content: start;
    flex-direction: row;
    > div: first-of-type {
      width: 60%;
      height: 95%;
      > div: last-of-type {
        height: 92vh;
        width: 58vw;
      }
    }
    > div: last-of-type {
      margin: auto;
      height: 92vh;
    }
    @media (max-height: 661px) and (max-width: 640px){
      > div: first-of-type {
        display: none;
      }
      > div: last-of-type {
        z-index: 4;
      }
    }
  }
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 59vh;
  margin: auto;
`

const Map = () => {
  const token = process.env.REACT_APP_MAPBOX_TOKEN
  mapboxgl.accessToken = token
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })

  const userDATA = useSelector(state => state.userDATA)
  const DEPOT = useSelector(state => state.DEPOT)
  const dispatch = useDispatch()

  const mapContainer = useRef(null)
  const geocoderContainer = useRef(null)
  const map = useRef(null)

  /**
   * route sources
   **/
  const route = useSelector(state => state.route)
  const addresses = useSelector(state => state.addresses)
  const locations = addresses.features
  const warehouse = turfFeatureCollection([DEPOT.start, DEPOT.end])
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

    /**
     * Perhapse I should move this into its own module
     */
  const createMapLayers = async () => {
    geocoderContainer.current.appendChild(geocoder.onAdd(map.current))

    /**
     * create a point map for path
     */
    await map.current.addLayer({
      id: 'warehouse',
      type: 'symbol',
      source: {
        data: warehouse,
        type: 'geojson'
      },
      layout: {
        'icon-allow-overlap': true,
        'icon-image': 'castle-15',
        'icon-size': 2
      }
    })

    await map.current.addLayer({
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

    await map.current.addSource('route', {
      type: 'geojson',
      data: route,
    })

    await map.current.addLayer(
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

    await map.current.addLayer(
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
     * maybe this is an example of where typescript could have helped
     */
    dispatch(removeGoogleUrl())
    dispatch(addLocation([coordinates]))
  }

  useEffect(() => {
    if (map.current !== null) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10?optimize=true',
      center: userDATA ? [userDATA.longitude, userDATA.latitude] : [4.3755, 50.8550],
      zoom: userDATA ? 12 : 7
    })
    dispatch(initMap(map.current))
    map.current.on('load', async () => {
      await createMapLayers()
    })
    if (locations.length < 2) dispatch(setNotification('Add two addresses plus start/end' +
      ' for the optimization service to become available!', 20))
  })

  useEffect(() => {
    if (!userDATA) return
    if (_.isEmpty(DEPOT.start) && _.isEmpty(DEPOT.end)) {
      (async () => {
        const setDEPOT = await getDepot(userDATA.longitude, userDATA.latitude)
        dispatch(addStart(setDEPOT))
        dispatch(addEnd(setDEPOT))
      })()
    }
  }, [])

  geocoder.on('result', (event) => {
    addSearchLocation(event.result)
  })


  return (
    <FlexContainer>
      <div>
        <OverviewButton />
        <MapContainer ref={mapContainer} />
      </div>
      <StyledDiv>
        <Notification />
        <Geocoder ref={geocoderContainer} />
        <Locations />
      </StyledDiv>
    </FlexContainer>
  )
}

export default Map
