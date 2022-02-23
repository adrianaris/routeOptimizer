import { useState } from 'react'

const useField = type => {
  const [value, setValue] = useState('')

  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
    execute: { clear: function() { return setValue('')} } //so that I can clear input on submit
  }
}

export default useField
