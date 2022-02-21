import React, { useState } from 'react'

const UserRoute = ({ route }) => {
  const [visible, setVisible] = useState(false)
  const show = { display: visible ? '' : 'none' }
  const hide = { display: visible ? 'none' : '' }

  return (
    <div onClick={() => setVisible(!visible)}>
      <p style={hide}><b>{route.name}: </b> {route.DEPOT.start.address.place_name}</p>
      <div style={show}>
        <p>
          <b>Name:</b> {route.name} /
          <b> Distance:</b> {(route.route[0].distance / 1000).toFixed(2)} km /
          <b> Duration:</b> {(route.route[0].duration / 3600).toFixed(2)} h
        </p>
        <div><b>Start:</b> {route.DEPOT.start.address.place_name}</div>
        <div><b>End:</b> {route.DEPOT.end.address.place_name}</div>
        <ol>
          {route.addresses.map(elem => (
            <li key={elem._id}>
              {elem.address.address.place_name} --
              <b> {elem.jobDone ? 'Finished' : 'Not Finished'}</b>
              </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default UserRoute
