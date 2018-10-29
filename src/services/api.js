import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.kenoby.com/',
    headers: {
        'x-tenant': '55b7e031299d4e33019c1c5a',
        'x-version': '3.0.0'
    }
})

export default api