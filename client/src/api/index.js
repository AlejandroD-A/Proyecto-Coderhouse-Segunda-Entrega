const axios = require('axios');

const URL = "https://ecom-ale.herokuapp.com/api"

console.log(URL)

export const axiosInstance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('token')
        if(token){
            config.headers["Authorization"] = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


