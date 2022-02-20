import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  background: transparent;
  &:hover {
    background-color: black;
    color: white;
  }
`

const OverviewButton = ({ map, locations, DEPOT }) => {
  const filteredLocations = locations.filter(elem => elem.jobDone === false)
  const allLocations = 
  return (

  )
}
