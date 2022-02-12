import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from './reducers/userDataReducer'
import MenuBar from './components/MenuBar'
import Map from './components/Map'
import Login from './components/Login'
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
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Map />} />
      </Routes>
    </Router>
  )
}

export default App
