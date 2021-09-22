import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getAll = () => {
    return axios.get(baseUrl)
}

const getUserById = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}

const userService = {
    getAll, getUserById
}

export default userService;
