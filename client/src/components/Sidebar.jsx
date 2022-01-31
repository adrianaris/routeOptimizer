import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SidebarElem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  padding: 0.5rem 1rem;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.8rem;
  border-radius: 6px;
`

const Sidebar = ({ map }) => {
  const [lng, setLng] = useState(4.5201)
  const [lat, setLat] = useState(50.8195)
  const [zoom, setZoom] = useState(11.67)

  useEffect(() => {
    if(map === null) return
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4))
      setLat(map.getCenter().lat.toFixed(4))
      setZoom(map.getZoom().toFixed(2))
    })
  })

  return (
    <SidebarElem>
           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </SidebarElem>
  )
}

export default Sidebar
