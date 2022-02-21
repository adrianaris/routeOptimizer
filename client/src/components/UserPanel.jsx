// TO DO
import React from 'react'
import styled from 'styled-components'
import getRoutes from '../hooks/getRoutes'
import UserRoute from './UserRoute'

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
      <p>user panel</p>
      <button onClick={() => addRoute}>addRoute</button>
      {routes.map(route => (
        <UserRoute key={route.id} route={route} />
      ))}
    </Layout>
  )
}


export default UserPanel
