const { spawn } = require('child_process')

const callORtools = matrix => {
  const pythonScript = spawn(
    './venv/bin/python',
    [
      './ORtools/ortoolsTSPcompleteprogram1.py',
      JSON.stringify(matrix),
      JSON.stringify([matrix.length-1]) // end position (start is 0)
    ])
  pythonScript.stdout.on('data', data => {
    /** 
     * create ordered array out of the python script response
     * the python script was also tweacked to facilitate this
     * this array is used to reorder the list of addresses
     */
    const orderedArray = data.toString()
      .split(/,/)
      .map(str => parseFloat(str))

    orderedArray.shift()
    return orderedArray
  })

  pythonScript.stderr.on('data', data => {
    console.log(data.toString())
  })
}
  
module.exports = callORtools
