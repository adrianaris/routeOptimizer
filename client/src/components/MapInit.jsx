import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import mapboxgl from '!mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

const MapInit = () => {
  const token = process.env.REACT_APP_MAPBOX_TOKEN
  mapboxgl.accessToken = token
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })

  const mapContainer = useRef(null)
  const geocoderContainer = useRef(null)
  const map = useRef(null)
}

export default MapInit
