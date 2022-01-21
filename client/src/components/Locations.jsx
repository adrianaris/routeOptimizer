import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { optimLocations, removeLocation } from '../reducers/locationsReducer'
import { createGoogleUrl } from '../reducers/googleUrlReducer'
import styled from 'styled-components'
import optimize from '../services/optimize'
// import { setNotification } from '../reducers/notificationReducer'

const LocationsContainer = styled.div`
  position: absolute;
  top: 420px;
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
        <button onClick={handleOptimizeClick}>optimize</button>
        <button>
          <a href={googleMapsUrl}>open in gmaps</a>
        </button>
      </div>
      }
      <ol>
        {locations.map(({ id, place_name }, index) => (
          <li key={id + index}>
            <p>{place_name}</p>
            <button onClick={() => dispatch(removeLocation(id))}>Remove</button>
          </li>
        ))}
      </ol>
    </LocationsContainer>
  )
}

export default Locations
