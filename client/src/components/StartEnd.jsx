import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useSelector, useDispatch } from 'react-redux'
import { removeGoogleUrl } from '../reducers/googleUrlReducer'
import { removeStart, removeEnd, addStart, addEnd } from '../reducers/startendReducer'
import { removeRoute } from '../reducers/routeReducer'
import _ from 'lodash'

import DonwloadButton from './tests/testDownloadButton'

const Layout = styled.div`
  position: relative;
  margin: auto;
  > div {
    border: 2px solid black;
    border-radius: 8px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    cursor: pointer;
    > button {
    margin-left: 3em;
    }
    > p > b {
      border-right: 1px solid black;
      padding: 0.3rem;
      margin-right: 0.3rem;
    }
  }
`
const GeoContainer = styled.span`
  display: inline-block;
  padding: 0.5rem;
  > div {
    border: 1px solid black;
    border-radius: 8px;
  }
`
const Button = styled.button`
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  > a {
      color: inherit;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`
const StartEnd = ({ flyToLocation }) => {
  const startGeocoder = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    types: 'address,country,region,place,postcode,locality,neighborhood'
  })
  const endGeocoder = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    types: 'address,country,region,place,postcode,locality,neighborhood'
  })
  const startGeocoderContainer = useRef(null)
  const endGeocoderContainer = useRef(null)

  const [startVisible, setStartVisible] = useState(false)
  const [endVisible, setEndVisible] = useState(false)

  const startStyle = {
    display: startVisible ? '' : 'none'
  }
  const startGeoStyle = {
    display: startVisible ? 'none' : ''
  }
  const endStyle = {
    display: endVisible ? '' : 'none'
  }
  const endGeoStyle = {
    display: endVisible ? 'none' : ''
  }

  const dispatch = useDispatch()
  const DEPOT = useSelector(state => state.DEPOT)

  useEffect(() => {
    if (_.isEmpty(DEPOT.start)) {
      setStartVisible(false)
    } else setStartVisible(true)
    if (_.isEmpty(DEPOT.end)) {
      setEndVisible(false)
    } else setEndVisible(true)
  })

  useEffect(() => {
    if (startGeocoderContainer.current === null || endGeocoderContainer.current === null) return
    startGeocoder.addTo(startGeocoderContainer.current)
    endGeocoder.addTo(endGeocoderContainer.current)
  }, [])

  startGeocoder.on('result', event => {
    dispatch(addStart(event.result))
  })
  endGeocoder.on('result', event => {
    dispatch(addEnd(event.result))
  })

  return (
    <Layout>
      <DonwloadButton />
      <div
        onClick={() => flyToLocation(DEPOT.start.center)}
      ><p>
          <svg viewBox="0 0 300 300" widht="20" height="20">
          <path d="M288.491,88.205L156.224,2.416c-4.965-3.221-11.359-3.221-16.324,0L7.633,88.205c-6.951,4.509-8.931,13.797-4.423,20.747, c4.51,6.952,13.8,8.929,20.747,4.423l8.294-5.379V281.08c0,8.284,6.716,15,15,15v0.045h136.933c4.462,0,8.079-3.617,8.079-8.079, v-48.912c0-4.462-3.617-8.079-8.079-8.079h-43.011V175.5c0-4.462-3.617-8.079-8.079-8.079H100.04v-55.533, c0-4.462-3.617-8.079-8.079-8.079h-29.71V88.537l85.81-55.657l85.811,55.657V281.08c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15, V107.995l8.294,5.379c2.521,1.636,5.351,2.417,8.148,2.417c4.912-0.001,9.725-2.411,12.599-6.84 C297.421,102.001,295.442,92.713,288.491,88.205z" />
          </svg>: {DEPOT.start.place_name}
        <GeoContainer
          style={startGeoStyle}
          ref={startGeocoderContainer} /></p>
      <Button
        style={startStyle}
        onClick={() => {
          dispatch(removeStart())
          dispatch(removeGoogleUrl())
          dispatch(removeRoute())
        }}
      >Remove
      </Button>
      </div>
      <div
        onClick={() => flyToLocation(DEPOT.end.center)}
      ><p>
        <svg viewBox="0 0 130 130" width="20" height="20">
          <path d="M18,17.8C42.77,3.24,55.21,10,66.7,16.16,76.22,21.3,84.92,26,103.75,10a4.45,4.45,0,0,1,6.2.44,4.22,4.22,0,0,1,1,2.42l5.78,56.89a4.23,4.23,0,0,1-1.38,3.57c-21.79,19.84-35,13.16-48.6,6.27C55.74,74,44.35,68.25,25.21,84.12a3.94,3.94,0,0,1-.53.38l3.09,30.81a6.89,6.89,0,1,1-13.71,1.35L4.21,18.38a10.15,10.15,0,1,1,13.68-1.67L18,17.8Z"/></svg>: {DEPOT.end.place_name}
        <GeoContainer
          style={endGeoStyle}
          ref={endGeocoderContainer} /></p>
      <Button
        style={endStyle}
        onClick={() => {
          dispatch(removeEnd())
          dispatch(removeGoogleUrl())
          dispatch(removeRoute())
        }}
      >Remove
      </Button>
      </div>
    </Layout>
  )
}

export default StartEnd
