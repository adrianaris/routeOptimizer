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