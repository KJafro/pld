import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://misty-silence-6581.fly.dev/api/"
})