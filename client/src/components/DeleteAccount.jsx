import React from 'react'
import useField from '../hooks/useField'
import styled from 'styled-components'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { Logout } from '../reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import userServices from '../services/user'

const Button = styled.button`
  position: relative;
  background: white;
  border: solid black;
  border-radius: 4px;
  margin: 4px;
  &:hover {
    background-color: black;
    color: white;
  }
`
const DeleteAccount = ({ userName }) => {
  const password = useField('password')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await userServices.deleteAccount({
        password: password.value
      })
      navigate('/')
      dispatch(Logout())
      dispatch(setNotification(`Account ${userName} has been deleted.`, 10))
    } catch (error) {
      dispatch(setNotification('Delete account failed. Please try again.', 10))
    }
  }

  return(
    <>
      <h4>
        If you wish to delete this account please enter your password below.
        <br /> Please be advised that you will lose all your saved routes.
      </h4>
      <div>
        <form onSubmit={handleSubmit}>
          <input {...password}/>
          <Button type='submit'>delete</Button>
        </form>
      </div>
    </>
  )
}

export default DeleteAccount
