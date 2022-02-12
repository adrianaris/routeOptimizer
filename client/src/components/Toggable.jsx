import React, { useState, useImperativeHandle } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  margin: auto;
`
const ToggableStyle = styled.div`
  display: inline-block;
  right: 0;
`
//const ToggableContent = styled.div`
//  position: fixed;
//  right: 10%;
//  @media (min-aspect-ratio: 29/30) {
//    right: 60%;
//  }
//`

const Toggable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const Display ={ display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <ToggableStyle>
      <Button
        onClick={toggleVisibility}>
        {props.buttonLabel}
      </Button>
      <div style={Display}>
        {props.children}
      </div>
    </ToggableStyle>
  )
})

Toggable.propTypes = {
  buttonLabel: propTypes.string.isRequired
}
Toggable.displayName = 'Toggable' //for debuging purposes

export default Toggable
