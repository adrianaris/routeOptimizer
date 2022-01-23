import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserIPaction } from './reducers/userDataReducer'
import Map from './components/Map'
import Notification from './components/Notification'

// import getOptimRoute from './services/matrix'
// import styled from 'styled-components'

// const Button = styled.button` // for testin the optimization endpoint
// position: absolute;
// top: 500px;
// `

const App = () => {
  const dispatch = useDispatch()
  // for testing the optimization endpoint
  // const handleTestButton = () => {
  //   const testReq = {
  //     points: [
  //       {
  //         coordinates: [4.5467, 50.8316],
  //       },
  //       {
  //         coordinates: [4.4071, 50.8858],
  //       },
  //       {
  //         coordinates: [4.4114, 50.9734],
  //       },
  //       {
  //         coordinates: [4.6363, 51.0744],
  //       },
  //       {
  //         coordinates: [4.8881, 51.0527],
  //       },
  //       {
  //         coordinates: [5.2104, 50.9380],
  //       },
  //       {
  //         coordinates: [5.0621, 50.7440],
  //       }
  //     ]
  //   }

  //   getOptimRoute(testReq)
  // }

  useEffect(() => {
    dispatch(getUserIPaction())
  }, [])

  return (
    <div>
      <Map />
      <Notification />
    </div>
  )
}

export default App
