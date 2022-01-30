/**
 * This service is for now not in use.
 * This was my initial tought-out solution for optimization on my backend
 * using OR-Tools from google.
 * I haven't given-up on the idea but since Angel implemented the
 * optimization from mapbox on the frontent we will be using that
 * for the basic version of this project
 */

import axios from 'axios'
const baseUrl = 'api/matrix'

const getOptimRoute = async req => {
  const response = await axios.post(baseUrl, req)
  const data = {
    points: []
  }
  for (var i = 1; i < response.data.length - 1; i++) {
    data.points.push(req.points[response.data[i]])
  }
  console.log(data)
  return data
}

export default getOptimRoute
