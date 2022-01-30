import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useSelector, useDispatch } from 'react-redux'
import { removeGoogleUrl } from '../reducers/googleUrlReducer'
import { removeStart, removeEnd, addStart, addEnd } from '../reducers/startendReducer'
import _ from 'lodash'

const Layout = styled.div`
  position: relative;
  margin: auto;
  > div {
    border: 2px solid black;
    border-radius: 8px;
    padding: 0.5rem;
    margin-top: 0.5rem;
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
const StartGeo = styled.div`
  display: inline-block;
  padding: 0.5rem;
  > div {
    border: 1px solid black;
    border-radius: 8px;
  }
`
const EndGeo = styled.div`
  display: inline-block;
  padding: 0.5rem;
  > div {
    border: 1px solid black;
    border-radius: 8px;
  }
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
      <div><p><b>Start:  </b>{DEPOT.start.place_name}
        <StartGeo
          style={startGeoStyle}
            ref={startGeocoderContainer} /></p>
        <button
          style={startStyle}
          onClick={() => {
            dispatch(removeStart())
            dispatch(removeGoogleUrl())
          }}
        >Remove
        </button>
      </div>
      <div><p><b>End:  </b>{DEPOT.end.place_name}
        <EndGeo
          style={endGeoStyle}
            ref={endGeocoderContainer} /></p>
        <button
          style={endStyle}
          onClick={() => {
            dispatch(removeEnd())
            dispatch(removeGoogleUrl())
          }}
        >Remove
        </button>
      </div>
    </Layout>
  )
}

export default StartEnd
