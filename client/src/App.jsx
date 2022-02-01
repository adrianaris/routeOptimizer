import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserIPaction } from './reducers/userDataReducer'
import Map from './components/Map'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserIPaction())
  }, [])

  return (
    <Map />
  )
}

export default App
