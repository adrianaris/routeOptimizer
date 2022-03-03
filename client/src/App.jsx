import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from './reducers/userDataReducer'
import MenuBar from './components/MenuBar'
import Map from './components/Map'
import LoginPage from './components/Login'
import UserPanel from './components/UserPanel'
import {
  HashRouter as Router,
  Routes, Route
} from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserData())
  })

  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userpanel" element={<UserPanel />} />
        <Route path="/" element={<Map />} />
      </Routes>
    </Router>
  )
}

export default App
