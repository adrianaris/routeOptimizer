import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRouteName, removeRouteName, saveRoute } from '../reducers/routeNameReducer'
//import { setNotification } from '../reducers/notificationReducer'
import useField from '../hooks/useField'
import styled from 'styled-components'

const Button = styled.button`
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  position: relative;
  margin-right: 0;
`

const RouteName = () => {
  const dispatch = useDispatch()
  const addresses = useSelector(state => state.addresses)
  const DEPOT = useSelector(state => state.DEPOT)
  const route = useSelector(state => state.route)
  const routeName = useSelector(state => state.routeName)
  const input = useField('text')

  const handleEnter = event => {
    if (event.key === 'Enter') {
      dispatch(setRouteName(input.value))
    }
  }

  const handleTestSave = () => {
    const routeToSave = {
      name: routeName.name,
      DEPOT: DEPOT,
      addresses: addresses.features,
      route: route
    }
    dispatch(saveRoute(routeToSave))
  }

  return (
    <div><div>Route Name: { routeName.name !== null
      ? <><b>{routeName.name}</b>
        <Button onClick={() => dispatch(removeRouteName())}>
          ChangeName
        </Button>
      </>
      : <>
        <input {...input} onKeyPress={handleEnter} />
        <Button onClick={() => dispatch(setRouteName(input.value))}>
          set
        </Button></>
    }</div>
    <button onClick={() => handleTestSave()}>test save</button>
    </div>
  )
}

export default RouteName
