import React, { useState } from 'react'
import styled from 'styled-components'

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
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

const UserRoute = ({ route }) => {
  const [visible, setVisible] = useState(false)
  const show = { display: visible ? '' : 'none' }
  const hide = { display: visible ? 'none' : '' }

  return (
    <Layout onClick={() => setVisible(!visible)}>
      <div style={hide}><b>{route.name}: </b> {route.DEPOT.start.address.place_name}</div>
      <div style={show}>
        <div>
          <b>Name:</b> {route.name} /
          <b> Distance:</b> {(route.route[0].distance / 1000).toFixed(2)} km /
          <b> Duration:</b> {(route.route[0].duration / 3600).toFixed(2)} h
        </div>
        <div><b>Start:</b> {route.DEPOT.start.address.place_name}</div>
        <div><b>End:</b> {route.DEPOT.end.address.place_name}</div>
        <ol>
          {route.addresses.map(elem => (
            <li key={elem._id}>
              {elem.address.address.place_name}
              </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default UserRoute
