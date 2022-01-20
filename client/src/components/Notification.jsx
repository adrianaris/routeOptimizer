import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const NotiDiv = styled.div`
  color: green;
  font-size: 20;
  background: lightgrey;
  border-style: solid;
  border-radius: 5;
  padding: 10;
  margin-bottom: 10;
`

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if (notification === null) return null

  return (
    <NotiDiv>
      {notification.content}
    </NotiDiv>
  )
}

export default Notification
