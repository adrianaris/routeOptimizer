import React from 'react'
import styled from 'styled-components'
import {
  Link,
  BrowserRouter as Router
} from 'react-router-dom'

const StyledUl = styled.ul`
  z-index: 5;
  list-style: none;
`

const NavBox = () => {
  return (
    <Router>
      <StyledUl>
        <li><Link to="/login">login</Link></li>
      </StyledUl>
    </Router>
  )
}
