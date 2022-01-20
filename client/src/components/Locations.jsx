import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const LocationsContainer = styled.div`
  position: relative;
  top: 420px;
`

const Locations = ({ optimize, googleMapsUrl, removeAddress }) => {
  const locations = useSelector(state => state.locations)
  if (!locations) return

  return (
    <LocationsContainer>
      {locations.length < 3 ||
      <div>
        <button onClick={optimize}>optimize</button>
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
