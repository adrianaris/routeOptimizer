import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRouteName, removeRouteName } from '../reducers/routeNameReducer'
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

  useEffect(() => {
    if (routeName.name !== null) return
    dispatch(setRouteName(initRouteName))
  }, [])

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
    </div>
  )
}

export default RouteName
