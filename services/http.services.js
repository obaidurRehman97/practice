import axios from 'axios'
import GLOBAL from '../constants/GLOBAL';

const requestInterceptor = async (request) => {
    let userInfo = await localStorage.getItem('state')
    const token = JSON.parse(userInfo).loginStatus
    if (token) {
        request.url = GLOBAL.BASE_URL + request.url
    }
    return request
}

const successInterceptor = (response) => {
    console.log("Success" + response)
}

const failureInterceptor = (response) =>{
    console.log("ERROR" + response)
}

let axiosInstance = axios.create()

class HTTPClient{
    constructor() {
        axiosInstance.interceptors.request.use(requestInterceptor)
        axiosInstance.interceptors.response.use((response) => {
            successInterceptor(response);
            return response
        },
        (error) => {
            failureInterceptor(error)
            return Promise.reject({...error})
        }
        )
    }

    get(url){
        return axiosInstance.get(url).then((response) => Promise.resolve(response)).catch((error) => Promise.reject(error))
    }
    
}

export default new HTTPClient();