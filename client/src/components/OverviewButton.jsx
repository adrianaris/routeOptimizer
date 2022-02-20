import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  bottom: 0.5rem;
  margin: auto;
  z-index: 2;
  width: 100%;
  text-align: center;
`

const Button = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  background: transparent;
  &:hover {
    background-color: black;
    color: white;
  }
`

const OverviewButton = ({ map }) => {
  const bbox = useSelector(state => state.route).bbox

  const fitBounds = () => {
    map.fitBounds(bbox, { padding: 50 })
  }

  return (
    <Container>
      <Button onClick={() => fitBounds()}>OverView</Button>
    </Container>
  )
}

export default OverviewButton
