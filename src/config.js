import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://everydaybeing.onrender.com/api/"
})