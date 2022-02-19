import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRouteName, removeRouteName } from '../reducers/routeNameReducer'
import useField from '../hooks/useField'
import styled from 'styled-components'

const Button = styled.button`
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
`

const RouteName = () => {
  const dispatch = useDispatch()
  const routeName = useSelector(state => state.routeName)
  const input = useField('text')

  const handleEnter = event => {
    event.preventDefault()
    if (event.key === 'Enter') {
      dispatch(setRouteName(input.value))
    }
  }

  return (
    <div><p>Route Name: { routeName !== null
      ? <><b>{routeName}</b>
        <Button onClick={() => dispatch(removeRouteName())}>
          change
        </Button></>
        : <>
          <input {...input} onKeyPress={handleEnter} />
          <Button onClick={() => dispatch(setRouteName(input.value))}>
            set
          </Button></>
      }</p>
    </div>
  )
}

export default RouteName
