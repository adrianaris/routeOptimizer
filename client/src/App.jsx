import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './reducers/userDataReducer'
import { addStart, addEnd } from './reducers/startendReducer'
import { getDepot } from './services/getDepot'
import _ from 'lodash'
import Map from './components/Map'

const App = () => {
  const dispatch = useDispatch()
  const userDATA = useSelector(state => state.userData)
  const DEPOT = useSelector(state => state.DEPOT)

  useEffect(() => {
    dispatch(setUserData())
  }, [])

  useEffect(() => {
    if (!userDATA) return
    if (_.isEmpty(DEPOT.start) && _.isEmpty(DEPOT.end)) {
      (async () => {
        const setDEPOT = await getDepot(userDATA.longitude, userDATA.latitude)
        dispatch(addStart(setDEPOT))
        dispatch(addEnd(setDEPOT))
      })()
    }
  })

  return (
    <Map />
  )
}

export default App
