import React, { useState, useEffect } from 'react'
import { Login, Register } from '../reducers/userReducer'
import useField from '../hooks/useField'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Notification from './Notification'

const Layout = styled.div`
  position: relative;
  width: 60%;
  top: 9rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: collumn;
  inner-text: center;
`
const FormInnerDiv = styled.div`
  padding: 5px;
  text-align: right;
  > input {
    border: solid black;
    border-radius: 4px;
  }
`
const Button = styled.button`
  position: relative;
  background: white;
  border: solid black;
  border-radius: 4px;
`

const LoginPage = () => {
  const [form, switchForm] = useState(true)
  const dispatch = useDispatch()
  const username = useField('text')
  const name = useField('text')
  const password = useField('password')
  const navigate = useNavigate()
  const [navigator, setNavigator] = useState('waze')

  const navigatorOptions = [
    {
      value: 'gmaps',
      label: 'GoogleMaps'
    },
    {
      value: 'waze',
      label: 'Waze'
    }
  ]

  const loggedUser = useSelector(state => state.user)

  const handleRegister = event => {
    event.preventDefault()
    dispatch(Register({
      username: username.value,
      name: name.value,
      navigator: navigator,
      password: password.value
    }))
  }
  const handleLogin = event => {
    event.preventDefault()
    dispatch(Login({
      username: username.value,
      password: password.value
    }))
  }

  useEffect(() => {
    if (loggedUser !== null) return navigate('/')
  }, [loggedUser])

  return (
    <Layout>
      <Notification />
      {form
        ? <><h1>Login</h1>
          <form onSubmit={handleLogin}>
            <FormInnerDiv>
              <b>username: </b>
              <input {...username} />
            </FormInnerDiv>
            <FormInnerDiv>
              <b>password: </b>
              <input {...password} />
            </FormInnerDiv>
            <FormInnerDiv>
              <Button type='submit'>Login</Button>
            </FormInnerDiv>
          </form>
          <h3>New user? register here: </h3>
          <div><Button onClick={() => switchForm(!form)}>Register</Button></div></>
        : <><h1>Register</h1>
          <form onSubmit={handleRegister}>
            <FormInnerDiv>
              <b>username: </b>
              <input {...username} />
            </FormInnerDiv>
            <FormInnerDiv>
              <b>name:     </b>
              <input {...name} />
            </FormInnerDiv>
            <FormInnerDiv>
              <b>password: </b>
              <input {...password} />
            </FormInnerDiv>
            <FormInnerDiv>
              <b>navigator: </b>
              <select onChange={(e) => setNavigator(e.target.value)}>
                {navigatorOptions.map(option => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))}
              </select>
            </FormInnerDiv>
            <FormInnerDiv>
              <Button type='submit'>Register</Button>
            </FormInnerDiv>
          </form>
          <h3>Already an user? login here: </h3>
          <div><Button onClick={() => switchForm(!form)}>Login</Button></div></>
      }
    </Layout>
  )
}

export default LoginPage
