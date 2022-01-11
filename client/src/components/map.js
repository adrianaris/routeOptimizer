import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import styled from 'styled-components'
import Sidebar from './sidebar'

const MapContainer = styled.div`
    height: 400px;
    position: absolute;
    top: 0;
    bottom: 0;
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

const Map = () => {
  const token = 'pk.eyJ1IjoiYWRyaWFuYXJpcyIsImEiOiJja3kzOTl0YzkwdGZuMm5xdHJzMHJ5b2p4In0.kXH2cOyOUq6WIOmYH5sKAA'
  mapboxgl.accessToken = token
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })

  const mapContainer = useRef(null)
  const map = useRef(null)

  const [address, setAddress] = useState([])
  console.log(address)

  useEffect(() => {
    if(map.current !== null) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [4.5201, 50.8195],
      zoom: 11.67
    })
    // map.current.addControl(geocoder)
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map.current))
    setAddress({
      coordinates: [4.5201, 50.8195],
      place_name: 'starting position'
    }) // just to init sidebar for now
  })

  // useEffect(() => {
  //   if (map.current === null) return
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4))
  //     setLat(map.current.getCenter().lat.toFixed(4))
  //     setZoom(map.current.getZoom().toFixed(2))
  //   })
  // })

  geocoder.on('result', async event => {
    const newAddress= {
      coordinates: await event.result.center,
      place_name: await event.result.place_name
    }

    setAddress(newAddress)
  })

  return (
    <div>
      {map.current &&
        <Sidebar map={map.current}/>
      }
      <MapContainer ref={mapContainer} />
      <Geocoder id="geocoder" />
    </div>
  )
}

export default Map