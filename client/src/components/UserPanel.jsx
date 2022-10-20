import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import routesServices from '../services/routes'
import UserRoute from './UserRoute'
import UserInfo from './UserInfo'
import ChangePassword from './ChangePassword'
import Notification from './Notification'

const Layout = styled.div`
  position: relative;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }
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
  &:hover {
    background-color: black;
    color: white;
  }
`

const UserPanel = () => {
  const routes = useSelector(state => state.user).routes
  console.log(routes)
  const rmRoute = id => {
    routesServices.deleteRoute(id) // This weird function is here due to refactoring in a hurry
  }
  const [visible, setVisible] = useState(false)
  const show = visible ? 'flex' : 'none'
  const hide = visible ? 'none' : 'flex'

  return (
    <Layout>
      <h1>user panel</h1>
      <Notification />
      <h3>user info</h3>
      <Button onClick={() => setVisible(!visible)}>
        {!visible ? 'Change Password' : 'Changed My Mind'}
      </Button>
      <ChangePassword display={show} setVisible={setVisible}/>
      <UserInfo display={hide} />
      <h3>saved routes</h3>
      {routes.map(route => (
        <UserRoute key={route.id} route={route} rmRoute={rmRoute} />
      ))}
    </Layout>
  )
}


export default UserPanel
