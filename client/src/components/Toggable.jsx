import React, { useState, useImperativeHandle } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  margin: auto;
  height: 50px;
  width: 50px;
  background: white 0.8;
  border: solid black;
  border-radius: 4px;
`
//const ToggableStyle = styled.div`
//  display: inline-block;
//  right: 0;
//`
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
    <div>
      <Button
        onClick={toggleVisibility}>
        {props.buttonLabel}
      </Button>
      <div style={Display}>
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
