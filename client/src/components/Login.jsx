import React from 'react'
import { Login } from '../reducers/userReducer'
import useField from '../hooks/useField'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const dispatch = useDispatch()
  const username = useField('text')
  const password = useField('password')
  const navigate = useNavigate()

//  const handleRegister = event => {
//    event.preventDefault()
//    dispatch(Register(username, name, password))
//  }
  const handleLogin = event => {
    event.preventDefault()
    dispatch(Login({
      username: username.value,
      password: password.value
    }))
    navigate('/')
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input {...username} />
        <input {...password} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
