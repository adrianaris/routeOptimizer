import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Toggable from './Toggable'
import NavBox from './NavBox'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const NavBar = styled.div`
  z-index: 5;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  @media (min-aspect-ratio: 29/30) {
    margin: auto;
    position: relative;
  }
  @media (max-height: 661px) and (max-width: 640px) {
    width: 95vw;
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
  const user = useSelector(state => state.user)
  const NavBoxRef = useRef()
  const clickRef = useRef()
  const showDisplay = () => {
    NavBoxRef.current.toggleVisibility()
  }

  const handleClickOutside = event => {
    if (clickRef.current && !clickRef.current.contains(event.target)) {
      NavBoxRef.current.closeOnClickOutside()
    }
  }

  useEffect(() => {
    console.log(clickRef)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [NavBoxRef.current.closeOnClickOutside])

  return (
    <NavBar>
      <StyledLink to="/">Logo</StyledLink>
      <Welcome>Welcome {user ? user.username : ''}</Welcome>
      <StyledToggable buttonLabel='MENU' ref={NavBoxRef} innerRef={clickRef}>
        <NavBox showDisplay={showDisplay} />
      </StyledToggable>
    </NavBar>
  )
}

export default MenuBar
