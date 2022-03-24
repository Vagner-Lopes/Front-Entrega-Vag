import axios from 'axios'

const Api = axios.create({
	baseURL: 'https://code-and-travel-api.herokuapp.com/api'
})

export default Api
