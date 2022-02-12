import React from 'react'
import styled from 'styled-components'
import {
  Link
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
  @media (min-aspect-ratio: 29/30) {
    right: 45%;
  }
  @media (max-height: 661px) and (max-width: 640px) {
    right: 10%;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
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
