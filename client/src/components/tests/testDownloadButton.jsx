import React from 'react'
import { useSelector } from 'react-redux'
import { default as state } from './testState.json'

console.log(state)

const DonwloadButton = () => {
  const state = useSelector(state => state)
  const downloadFile = () => {
    const linkElem = document.createElement('a')
    const file = new Blob([JSON.stringify(state)], {
      type: 'application/json'
    })
    linkElem.href = URL.createObjectURL(file)
    linkElem.download = 'test.json'
    document.body.appendChild(linkElem)
    linkElem.click()
  }

  return (
    <div>
      <button onClick={downloadFile}>Download File</button>
    </div>
  )
}

export default DonwloadButton
