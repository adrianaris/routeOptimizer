import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { setNotification } from '../reducers/notificationReducer'
import styled from 'styled-components'
import useField from '../hooks/useField'
import { UpdateU } from '../reducers/userReducer'

const Layout = styled.div`
  position: relative;
  width: 500px;
  min-width: 300px;
  display: ${props => props.display};
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
  margin-left: 1rem;
  &:hover {
    background-color: black;
    color: white;
  }
`

const UserInfo = ({ display }) => {
  const user = useSelector(state => state.user)
  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const [navigator, setNavigator] = useState(user.navigator)
  const nameInput = useField('text')
  const usernameInput = useField('text')
  const [visible, setVisible] = useState(false)
  const style = { display: visible ? '' : 'none' }
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.name !== name || user.username !== username || user.navigator !== navigator) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [name, username, navigator])


  const handleEnter = (event, setValue) => {
    if (event.key === 'Enter') {
      setValue(event.target.value)
    }
  }

  const handleSetNavigator = () => {
    if (navigator === 'gmaps') {
      setNavigator('waze')
    } else {
      setNavigator('gmaps')
    }
  }

  const handleUpdateUser = async () => {
    dispatch(UpdateU({
      name: name,
      username: username,
      navigator: navigator
    }))
    setVisible(false)
  }

  const handleReset = () => {
    setName(user.name)
    setUsername(user.username)
    setNavigator(user.navigator)
  }

  return (
    <Layout display={display}>
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
      <div style={style}>
        <Button onClick={() => handleUpdateUser()}>Save Changes
        </Button>
        <Button onClick={() => handleReset()}>Reset Changes</Button>
      </div>
    </Layout>
  )
}

export default UserInfo
