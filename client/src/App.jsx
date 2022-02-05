import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from './reducers/userDataReducer'
import Map from './components/Map'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserData())
  }, [])

  return (
    <Map />
  )
}

export default App
