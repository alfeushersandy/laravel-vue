import axios from "axios";

const Api = axios.create({
    //set default URL/endpoint API
    baseURL: 'http://localhost:8000/api'
})

export default Api;