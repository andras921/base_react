import {API_URL} from "./const";
import axios from 'axios'

function client() {

    const headers = {};

    const axiosInstance = axios.create({
        baseURL: API_URL,
        headers
    })

    axiosInstance.interceptors.response.use(
        response =>
            Promise.resolve(response),
        error => {
            return Promise.reject(error)
        }
    )

    return axiosInstance;
}

export {client};