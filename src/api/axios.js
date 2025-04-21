import axios from "axios";

const instace =axios.create({
    baseURL: 'https://backed-1ule.onrender.com/api',
    withCredentials: true,
})

export default instace