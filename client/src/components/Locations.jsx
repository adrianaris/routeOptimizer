import React from 'react'
import StartEnd from './StartEnd'
import { useSelector, useDispatch } from 'react-redux'
import { optimLocations, removeLocation } from '../reducers/locationsReducer'
import { createGoogleUrl } from '../reducers/googleUrlReducer'
import styled from 'styled-components'
import optimize from '../services/optimize'
// import { setNotification } from '../reducers/notificationReducer'

const LocationsContainer = styled.div`
  position: absolute;
  top: 450px;
  overflow-y: auto;
  margin: auto;
`
const Olist = styled.ol`
  margin: 0.3em;
  border: 1px solid black;
  border-style: outset;
  > li {
    border: 3px solid;
    border-style: outset;
    margin: 0.3em;
    > button {
      display: block;
      position: relative;
      margin-left: auto;
      margin-right: 0;
    }
  }
`

const Button = styled.button`
  margin: 0.5em;
`
const Locations = ({ map }) => {
  const locations = useSelector(state => state.locations)
  const googleMapsUrl = useSelector(state => state.googleUrl)
  const dispatch = useDispatch()
  if (!locations) return

  const handleOptimizeClick = async () => {
    const { routeGeoJSON, orderedIndexArray, waypoints } = await optimize(locations)
    dispatch(optimLocations(orderedIndexArray))
    dispatch(createGoogleUrl(waypoints))
    map.getSource('route').setData(routeGeoJSON)
  }

  return (
    <LocationsContainer>
      {locations.length < 3 ||
      <div>
        <Button onClick={handleOptimizeClick}>optimize</Button>
        <Button>
          <a href={googleMapsUrl}>open in gmaps</a>
        </Button>
      </div>
      }
      <StartEnd />
      <Olist>
        {locations.map(({ id, place_name }, index) => (
          <li key={id + index}>
            <p>{place_name}</p>
            <button onClick={() => dispatch(removeLocation(id))}>Remove</button>
          </li>
        ))}
      </Olist>
    </LocationsContainer>
  )
}

export default Locations
