import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { setNewRoute } from '../reducers/routeNameReducer'

const Button = styled.button`
  position: relative;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  &:hover {
    background-color: black;
    color: white;
  }
`

const NewRouteButton = () => {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(setNewRoute())}>NewRoute</Button>
  )
}

export default NewRouteButton
