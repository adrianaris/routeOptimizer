import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRouteName, removeRouteName } from '../reducers/routeNameReducer'
import useField from '../hooks/useField'
import styled from 'styled-components'
import routes from '../services/routes'

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
  const months = ['jan', 'feb', 'march', 'april',
    'mai', 'june', 'july', 'aug',
    'sept', 'oct', 'nov', 'dec']
  const date = new Date()
  const initRouteName = `route ${date.getDay()}/${months[date.getMonth()]}/${date.getFullYear()}`

  const handleEnter = event => {
    if (event.key === 'Enter') {
      dispatch(setRouteName(input.value))
    }
  }

  /**
   * Set initial route name after login/register
   */
  useEffect(() => {
    if (routeName.name !== null) return
    dispatch(setRouteName(initRouteName))
  }, [])

  const handleTestSave = async () => {
    const routeToSave = {
      name: routeName.name,
      DEPOT: DEPOT,
      addresses: addresses.features,
      route: route
    }
    const savedRoute = await routes.saveRoute(routeToSave)
    console.log(savedRoute)
  }
  const handleTestGetUserRoutes = async () => {
    const userRoutes = await routes.getUserRoutes()
    console.log(userRoutes)
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
      <button onClick={() => handleTestGetUserRoutes()}>test get user routes</button>
    </div>
  )
}

export default RouteName
