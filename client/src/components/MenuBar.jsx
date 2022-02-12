import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Toggable from './Toggable'
import NavBox from './NavBox'
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
const Welcome = styled.div`
  text-align: center;
  margin: auto;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const MenuBar = () => {
  const NavBoxRef = useRef()
  const showDisplay = () => {
    NavBoxRef.current.toggleVisibility()
  }

  return (
    <NavBar>
      <StyledLink to="/">Logo</StyledLink>
      <Welcome>Welcome Adrian</Welcome>
      <Toggable buttonLabel='NAV' ref={NavBoxRef}>
        <NavBox showDisplay={showDisplay} />
      </Toggable>
    </NavBar>
  )
}

export default MenuBar
