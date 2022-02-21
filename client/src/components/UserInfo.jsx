import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import useField from '../hooks/useField'

const Layout = styled.div`
  position: relative;
  width: 50%;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  @media (max-width: 500px) {
    width: 90%;
  }
  > div {
    width 90%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin 0.5rem;
    text-align: left;
  }
`
const Button = styled.button`
  float: right;
  position: relative;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
`

const UserInfo = () => {
  const user = useSelector(state => state.user)
  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const [navigator, setNavigator] = useState(user.navigator)
  const nameInput = useField('text')
  const usernameInput = useField('text')

  const handleEnter = (event, setValue) => {
    if (event.key === 'Enter') {
      setValue(event.target.value)
      console.log(user)
    }
  }

  const handleSetNavigator = () => {
    if (navigator === 'gmaps') {
      setNavigator('waze')
    } else setNavigator('gmaps')
  }
  //const handleSaveChanges
  return (
    <Layout>
      {name
        ? <div>
          Name: <b>{name}</b>
          <Button onClick={() => setName()}>Change</Button>
        </div>
        : <div>
          Name: <input { ...nameInput }
            onKeyPress={() => handleEnter(event, setName)}/>
          <Button onClick={() => setName(nameInput.value)}>set</Button>
        </div>
      }
      {username
        ? <div>
            Username: <b>{username}</b>
          <Button onClick={() => setUsername()}>Change</Button>
        </div>
        : <div>
          Username: <input { ...usernameInput }
            onKeyPress={() => handleEnter(event, setUsername)}/>
          <Button onClick={() => setUsername(usernameInput.value)}>set</Button>
        </div>
      }
      <div>
        Navigator: <b>
          {navigator === 'gmaps' ? 'GoogleMaps' : 'Waze'}
        </b>
        <Button onClick={() => handleSetNavigator()}>Change</Button>
      </div>
      <div><Button>Save Changes</Button></div>
    </Layout>
  )
}

export default UserInfo
