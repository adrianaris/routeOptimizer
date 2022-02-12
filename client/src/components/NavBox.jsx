import React from 'react'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'

const StyledUl = styled.ul`
  z-index: 5;
  list-style: none;
  position: fixed;
  right: 10%;
  @media (min-aspect-ratio: 29/30) {
    right: 60%;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const NavBox = props => {
  const { showDisplay } = props
  return (
    <StyledUl>
      <li><StyledLink to="/login" onClick={ showDisplay }>login</StyledLink></li>
      <li>asdfas</li>
      <li>adfasdfh</li>
    </StyledUl>
  )
}

export default NavBox
