import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Toggable from './Toggable'
import NavBox from './NavBox'
import styled from 'styled-components'

const NavBar = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  padding-top: 25px;
  left: 3%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 94vw;
  @media (min-aspect-ratio: 29/30) {
    width: 54vw;
  }
  @media (max-height: 661px) and (max-width: 640px) {
    width: 94vw;
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
const StyledToggable = styled(Toggable)`
  display: inline-block;
  right: 0;
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
      <StyledToggable buttonLabel='MENU' ref={NavBoxRef}>
        <NavBox showDisplay={showDisplay} />
      </StyledToggable>
    </NavBar>
  )
}

export default MenuBar
