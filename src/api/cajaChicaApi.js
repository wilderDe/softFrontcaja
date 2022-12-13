import axios from "axios";


const cajaChicaApi = axios.create({
    baseURL: "https://softcaja.vercel.app/api"
})

export default cajaChicaApi