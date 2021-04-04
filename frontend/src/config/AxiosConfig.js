import axios from 'axios'


const axiosConfig = () => {
    const token = localStorage.getItem('token')

    axios.interceptors.request.use((config) => {
        config.baseURL = process.env.BACKEND_URL || "http://localhost:4000"

        if (token) config.headers.Authorization = token

        return config
    })
}

export default axiosConfig