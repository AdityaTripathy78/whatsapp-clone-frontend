import axios from "axios"

const instance = axios.create({
    baseURL : "https://whatsapp-mern-backnd.herokuapp.com/",
})

export default instance;