import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRouteName, removeRouteName, setNewRoute, saveToServer } from '../reducers/routeNameReducer'
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
    if (event.key === 'Enter') {
      dispatch(setRouteName(input.value))
    }
  }

  return (
    <div><div>Route Name: { routeName.name !== null
      ? <><b>{routeName.name}</b>
        <Button onClick={() => dispatch(removeRouteName())}>
          change
        </Button>
        </>
      : <>
        <input {...input} onKeyPress={handleEnter} />
        <Button onClick={() => dispatch(setRouteName(input.value))}>
          set
        </Button></>
      }</div>
      {routeName.saved === false
        ? <Button onClick={()=> dispatch(saveToServer('test'))}>SaveRoute</Button>
        : <>{ routeName.modified === true &&
            <><Button>Update</Button>
            <Button onClick={()=>dispatch(setNewRoute())}>Create New Route</Button></>
          }</>
      }
    </div>
  )
}

export default RouteName
