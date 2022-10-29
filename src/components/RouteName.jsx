import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRouteName, removeRouteName, saveRoute, updateRoute } from '../reducers/routeNameReducer'
import NewRouteButton from './NewRouteButton'
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
  &:hover {
    background-color: black;
    color: white;
  }
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

  useEffect(() => {
    if (routeName.name === null ) return
    const routeToSave = {
      name: routeName.name,
      DEPOT: DEPOT,
      addresses: addresses.features,
      route: route,
    }
    if (!routeName.routeID) {
      dispatch(saveRoute(routeToSave))
    } else if (routeName.modified !== false) {
      routeToSave.id = routeName.routeID
      dispatch(updateRoute(routeToSave))
    }
  }, [addresses, DEPOT, route, routeName])

  const handleChangeName = () => {
    input.execute.setvalue(routeName.name)
    dispatch(removeRouteName())
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <NewRouteButton />
      <div>Route Name: { routeName.name !== null
        ? <Button onClick={handleChangeName}>
          <b>{routeName.name}</b>
        </Button>
        : <>
          <input id='routeName' {...input} onKeyPress={handleEnter} />
          <Button onClick={() => dispatch(setRouteName(input.value))}>
          set
          </Button></>
      }</div>
    </div>
  )
}

export default RouteName
