import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserIPaction } from './reducers/userDataReducer'
import Map from './components/Map'
import Notification from './components/Notification'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserIPaction())
  }, [])

  return (
    <div>
      <Notification />
      <Map />
    </div>
  )
}

export default App
