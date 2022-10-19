import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { clearLocations, addLocation } from '../reducers/addressesReducer'
import { removeRouteName, setRouteName, setNewRoute } from '../reducers/routeNameReducer'
import { removeRoute, createRoute } from '../reducers/routeReducer'
import { removeStart, removeEnd, addStart, addEnd } from '../reducers/startendReducer'
import { removeGoogleUrl } from '../reducers/googleUrlReducer'
import { setOldRouteName } from '../reducers/routeNameReducer'
import { useNavigate } from 'react-router-dom'

const Layout = styled.div`
  position: relative;
  width: 65%;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  margin: 0.5rem;
  @media (max-width: 500px) {
    width: 90%;
  }
  > div {
    width: 90%;
    padding: 1rem;
    cursor: pointer;
    &::after {
      content: '${props => props.symbol}';
      position: absolute;
      top: 0;
      right: 0;
      margin: 0.6rem 1rem 1rem 1.5rem;
      font-size: 1.5rem;
      box-size: inherit;
    }
  }
`
const Button = styled.button`
  position: relative;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  margin-left: 1rem;
  margin-right: 1rem;
  &:hover {
    background-color: black;
    color: white;
  }
`
//const ExpandButton = styled.div`
//display: inline-block;
//text-align: right;
//`

const UserRoute = ({ route, rmRoute }) => {
  const [visible, setVisible] = useState(false)
  const show = { display: visible ? '' : 'none' }
  const hide = { display: visible ? 'none' : '' }
  const symbol = visible ? '-' : '+'
  const dispatch = useDispatch()
  const routeName = useSelector(state => state.routeName)
  const navigate = useNavigate()


  const ClearActive = () => {
    dispatch(clearLocations())
    dispatch(removeRouteName())
    dispatch(removeRoute())
    dispatch(removeStart())
    dispatch(removeEnd())
    dispatch(removeGoogleUrl())
  }
  const Reuse = route => {
    dispatch(setRouteName(route.name))
    dispatch(addLocation(route.addresses.map(elem => elem.address.address)))
    dispatch(createRoute(route.route[0])) // I should change the backend model for this
    dispatch(addStart(route.DEPOT.start.address)) //same
    dispatch(addEnd(route.DEPOT.end.address))
    dispatch(setOldRouteName({ name: route.name, routeID: route.id }))
  }
  const ReuseRoute = () => {
    ClearActive()
    Reuse(route)
    navigate('/')
  }

  const deleteRoute = async () => {
    try {
      const id = route.id
      await rmRoute(id)
      if (id === routeName.routeID) dispatch(setNewRoute())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout onClick={() => setVisible(!visible)} symbol={symbol}>
      <div style={hide}>
        <b>{route.name}: </b>
        {route.DEPOT.start &&
        <>{route.DEPOT.start.address.place_name}</>
        }
      </div>
      <div style={show}>
        <div>
          <b>Name:</b> {route.name} /
          {route.route[0].distance && <>
            <b> Distance:</b> {(route.route[0].distance / 1000).toFixed(2)} km /
            <b> Duration:</b> {(route.route[0].duration / 3600).toFixed(2)} h
          </>}
        </div>
        {route.DEPOT.start &&
          <div><b>Start:</b> {route.DEPOT.start.address.place_name}</div>
        }
        {route.DEPOT.end &&
          <div><b>End:</b> {route.DEPOT.end.address.place_name}</div>
        }
        {route.addresses &&
          <ol>
            {route.addresses.map(elem => (
              <li key={elem._id}>
                {elem.address.address.place_name}
              </li>
            ))}
          </ol>
        }
        <Button onClick={deleteRoute}>deleteRoute</Button>
        <Button onClick={ReuseRoute}>Reuse this route</Button>
      </div>
    </Layout>
  )
}

export default UserRoute
