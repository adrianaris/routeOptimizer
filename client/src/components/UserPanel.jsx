import React from 'react'
import styled from 'styled-components'
import getRoutes from '../hooks/getRoutes'
import UserRoute from './UserRoute'
import UserInfo from './UserInfo'
import Notification from './Notification'

const Layout = styled.div`
  position: relative;
  top: 9rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserPanel = () => {
  /**
   * I should actualy just populate the user reducer when logging in
   * instead of using this hook
   */
  const [routes, addRoute] = getRoutes('/routes')
  console.log(routes)

  return (
    <Layout>
      <h1>user panel</h1>
      <Notification />
      <button onClick={() => addRoute}>addRoute</button>
      <h3>user info</h3>
      <UserInfo />
      <h3>saved routes</h3>
      {routes.map(route => (
        <UserRoute key={route.id} route={route} />
      ))}
    </Layout>
  )
}


export default UserPanel
