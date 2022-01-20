import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { optimLocations } from '../reducers/locationsReducer'
import { createGoogleUrl } from '../reducers/googleUrlReducer'
import styled from 'styled-components'
import optimize from '../services/optimize'

const LocationsContainer = styled.div`
  position: relative;
  top: 420px;
`

const Locations = ({ map, removeAddress }) => {
  const locations = useSelector(state => state.locations)
  const googleMapsUrl = useSelector(state => state.googleUrl)
  const dispatch = useDispatch()
  if (!locations) return
  console.log(locations)
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
            <button onClick={() => removeAddress(id)}>Remove</button>
          </li>
        ))}
      </ol>
    </LocationsContainer>
  )
}

export default Locations
