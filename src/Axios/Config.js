import Axios from 'axios'

const Http = Axios.create({
    baseURL: 'https://localhost:44386/Api/',
    setTimeout: 60000
})
export default Http