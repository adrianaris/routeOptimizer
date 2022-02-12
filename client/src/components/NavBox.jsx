import React from 'react'
import styled from 'styled-components'
import {
  NavLink // I cant make active to work
} from 'react-router-dom'

const StyledUl = styled.ul`
  z-index: 5;
  list-style: none;
  position: fixed;
  right: 9%;
  margin: 0.5rem;
  padding: 3%;
  color: white;
  background: black;
  border-radius: 8px;
  > li {
  margin: 15px 0;
  }
  > li:first-of-type {
  margin: 0 0 15px;
  }
  > li:last-of-type {
    margin: 15px 0 0;
  }
  @media (max-height: 661px) and (max-width: 640px) {
    right: 10%;
  }
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`

const NavBox = props => {
  const { showDisplay } = props
  return (
    <StyledUl>
      <li><StyledNavLink to="/" onClick={ showDisplay }>MAP</StyledNavLink></li>
      <li><StyledNavLink to="/login" onClick={ showDisplay }>LOGIN</StyledNavLink></li>
      <li>asdfas</li>
      <li>adfasdfh</li>
    </StyledUl>
  )
}

export default NavBox
