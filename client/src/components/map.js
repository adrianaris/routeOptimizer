import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
  const token = 'pk.eyJ1IjoiYWRyaWFuYXJpcyIsImEiOiJja3kzOTl0YzkwdGZuMm5xdHJzMHJ5b2p4In0.kXH2cOyOUq6WIOmYH5sKAA'
  mapboxgl.accessToken = token

  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)
  
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    }, [map.current])
  })
  
  return (
      <div ref={mapContainer} className="map-container" />
  )
}

export default Map