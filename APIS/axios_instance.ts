import axios from "axios"


const instance = axios.create({
    // TODO: replace url in production mode
    baseURL: "https://aiclub.uit.edu.vn/demo/qatar_licence/backend"

})

export default instance
