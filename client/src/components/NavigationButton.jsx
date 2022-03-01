import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Button = styled.button`
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #add8e6;
  > a {
      color: inherit;
  }
  &:hover {
    background-color: purple;
    color: white;
  }
`

const NavigationButton = ({ center }) => {
  const navigator = useSelector(state => state.user).navigator
  const userDATA = useSelector(state => state.userDATA)
  console.log(center)

  const destination = center[1] + ',' + center[0]
  const origin = userDATA.latitude + ',' + userDATA.longitude

  const linkToNavigator = navigator === 'waze'
    ? 'https://www.waze.com/ul?ll=' +
      `${center[1]}%2C` +
      `${center[0]}&navigate=yes`
    : `https://www.google.com/maps/dir/?api=1&origin=${origin}` +
      `&destination=${destination}`

    return (
      <Button>
        <a
          href={linkToNavigator}
          target="_blank"
          rel="noopener noreferrer"
        >GoToNavigator</a>
      </Button>
    )
}

export default NavigationButton
