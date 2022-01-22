import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useSelector, useDispatch } from 'react-redux'
import { removeStart, removeEnd } from '../reducers/startendReducer'
import _ from 'lodash'

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
const GeocoderContainer = styled.div`
  margin: 2px;
`
const StartEnd = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood'
  })
  const geocoderContainer = useRef(null)
  const resultsContainer = useRef(null)

  const dispatch = useDispatch()
  const DEPOT = useSelector(state => state.DEPOT)
  console.log(DEPOT)

  useEffect(() => {
    if (geocoderContainer.current === null) return
    geocoder.addTo(geocoderContainer.current)
  }, [])

  geocoder.on('result', event => {
    resultsContainer.current.innerText = JSON.stringify(event.result, null, 2)
  })

  geocoder.on('clear', () => {
    resultsContainer.current.innerText = ''
  })

  return (
    <Layout>
      <div><p>Start location: {DEPOT.start.place_name}</p>
        {_.isEmpty(DEPOT.start)
          ? <div>
            <GeocoderContainer ref={geocoderContainer} />
            <pre ref={resultsContainer} />
          </div>
          : <button onClick={() => dispatch(removeStart())}>Remove</button>
        }
      </div>
      <div><p>End location: {DEPOT.end.place_name}</p>
        {_.isEmpty(DEPOT.end) ||
          <button onClick={() => dispatch(removeEnd())}>Remove</button>
        }
      </div>
    </Layout>
  )
}

export default StartEnd
