import axios from "axios"


const instance = axios.create({
    // TODO: replace url in production mode
    baseURL: "http://192.168.20.156:8001"

})

export default instance
