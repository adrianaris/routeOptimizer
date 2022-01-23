import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useSelector, useDispatch } from 'react-redux'
import { removeStart, removeEnd, addStart, addEnd } from '../reducers/startendReducer'
//import _ from 'lodash'

const Layout = styled.div`
  position: relative;
  margin: 0.3em;
  border: 1px solid;
  border-style: outset;
  > div {
    margin: 0.3em;
    border: 3px solid;
    border-style: outset;
  }
`
const StartGeo = styled.div`
  margin: 2px;
`
const EndGeo = styled.div`
  margin: 2px;
`
const StartEnd = () => {
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


  const dispatch = useDispatch()
  const DEPOT = useSelector(state => state.DEPOT)

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
      <div><p>Start location: {DEPOT.start.place_name}</p>
        <StartGeo ref={startGeocoderContainer} />
        <button
          onClick={() => dispatch(removeStart())}
        >Remove
        </button>
      </div>
      <div><p>End location: {DEPOT.end.place_name}</p>
        <EndGeo ref={endGeocoderContainer} />
        <button
          onClick={() => dispatch(removeEnd())}
        >Remove
        </button>
      </div>
    </Layout>
  )
}

export default StartEnd
