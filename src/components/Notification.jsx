import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const NotiDiv = styled.div`
  position: relative;
  text-align: center;
  color: white;
  font-size: 20;
  background: black;
  border-radius: 5px;
  z-index: 3;
  margin: 2rem;
  padding-bottom: 1.3rem;
  > span {
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    display: inline-block;
    text-align: center;
  }
`
const Close = styled.div`
  postion: relative;
  margin-right: auto;
  text-align: right;
  > button {
    background: none;
    border: none;
    padding: 0.3rem;
    color: white;
    &:hover{
      color: red;
    }
  }
`

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  if (notification === null) return null

  return (
    <NotiDiv>
      <Close><button onClick={ () => dispatch(removeNotification()) }>x</button></Close>
      <span>{notification}</span>
    </NotiDiv>
  )
}

export default Notification
