import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

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

const NavigationButton = ({ index }) => {
  const navigator = useSelector(state => state.user).navigator
  const DEPOT = useSelector(state => state.DEPOT)
  const userDATA = useSelector(state => state.userDATA)
  const locations = useSelector(state => state.addresses).features.concat(DEPOT.end)

  const destination = index === locations.length - 1
    ? DEPOT.end.center[1] + ',' + DEPOT.end.center[0]
    : locations[index].center[1] + ',' + locations[index].center[0]
  const origin = userDATA.latitude + ',' + userDATA.longitude

  const linkToNavigator = navigator === 'waze'
    ? 'https://www.waze.com/ul?ll=' +
      `${locations[index].center[1]}%2C` +
      `${locations[index].center[0]}&navigate=yes`
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
