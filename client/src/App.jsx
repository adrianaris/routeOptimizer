import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from './reducers/userDataReducer'
import MenuBar from './components/MenuBar'
import Map from './components/Map'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserData())
  }, [])

  return (
    <>
      <MenuBar />
      <Router>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/login" />
        </Routes>
      </Router>
    </>
  )
}

export default App
