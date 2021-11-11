import axios from "axios";

const api = axios.create({
    baseURL: "https://capstone-backend-tchau-mamae.herokuapp.com"
})

export default api