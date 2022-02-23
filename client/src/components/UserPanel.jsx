import React, { useState } from 'react'
import styled from 'styled-components'
import getRoutes from '../hooks/getRoutes'
import UserRoute from './UserRoute'
import UserInfo from './UserInfo'
import ChangePassword from './ChangePassword'
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
  > h1 {
    padding-bottom: 5rem;
  }
`
const Button = styled.button`
  position: relative;
  background: white;
  border: solid black;
  border-radius: 4px;
`

const UserPanel = () => {
  /**
   * I should actualy just populate the user reducer when logging in
   * instead of using this hook
   */
  const [routes, addRoute] = getRoutes('/routes')
  const [visible, setVisible] = useState(false)
  const show = visible ? 'flex' : 'none'
  const hide = visible ? 'none' : 'flex'

  return (
    <Layout>
      <h1>user panel</h1>
      <Notification />
      <button onClick={() => addRoute}>addRoute</button>
      <h3>user info</h3>
      <Button onClick={() => setVisible(!visible)}>
        {!visible ? 'Change Password' : 'Changed My Mind'}
      </Button>
      <ChangePassword display={show} setVisible={setVisible}/>
      <UserInfo display={hide} />
      <h3>saved routes</h3>
      {routes.map(route => (
        <UserRoute key={route.id} route={route} />
      ))}
    </Layout>
  )
}


export default UserPanel
