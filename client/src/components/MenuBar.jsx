import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
  z-index: 5;
  position: fixed;
  top: 2%;
  left: 3.5%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 94%;
  @media (min-aspect-ratio: 29/30) {
    width: 54%;
  }
`
const ToggleButton = styled.button`
  right: 0;
`
const Welcome = styled.div`
text-align: center;
margin: auto;
`

const MenuBar = () => {
  return (
    <NavBar>
      <div>Logo</div>
      <Welcome>Welcome Adrian</Welcome>
      <ToggleButton>Nav</ToggleButton>
    </NavBar>
  )
}

export default MenuBar
