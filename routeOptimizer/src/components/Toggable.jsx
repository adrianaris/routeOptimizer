import React, { useState, useImperativeHandle } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  margin: auto;
  height: 40px;
  background: transparent;
  border: solid black;
  border-radius: 4px;
  @media (min-aspect-ratio: 29/30) {
    @media (max-height: 506px) {
      height: auto;
    }
  }
`

const Toggable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const Display ={ display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const closeOnClickOutside = () => {
    setVisible(false)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
      closeOnClickOutside,
      visible
    }
  })

  return (
    <div>
      <Button
        ref={props.innerRef}
        onClick={toggleVisibility}>
        {props.buttonLabel}
      </Button>
      <div style={Display} data-testid='toggable-child'>
        {props.children}
      </div>
    </div>
  )
})

Toggable.propTypes = {
  buttonLabel: propTypes.string.isRequired
}
Toggable.displayName = 'Toggable' //for debuging purposes

export default Toggable
