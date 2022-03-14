import React from 'react'
import { useSelector } from 'react-redux'

const DonwloadButton = () => {
  const locations = useSelector(state => state.addresses).features
  const downloadFile = () => {
    const linkElem = document.createElement('a')
    const file = new Blob([JSON.stringify(locations)], {
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
