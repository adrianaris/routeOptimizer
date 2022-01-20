import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import optimize from '../services/optimize'

const LocationsContainer = styled.div`
  position: relative;
  top: 420px;
`

const Locations = ({ map, removeAddress }) => {
  const locations = useSelector(state => state.locations)
  const googleMapsUrl = useSelector(state => state.googleUrl)
  if (!locations) return

  const handleOptimizeClick = async () => {
    const routeGeoJSON = await optimize()
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
