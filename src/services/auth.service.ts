import { useNavigate } from "react-router-dom"
import axiosService from "./axios.service"


const login = (payload : {
    email : string,
    password : string
}) => {
    return axiosService.post("/auth/login", payload)
        .then((res) => {
            const {accessToken, data } = res.data
            localStorage.setItem("token", accessToken)
            return data
        })
        .catch(err => {
            console.error(err);
        })
}

const logout = () => {
    localStorage.removeItem("token")
}

const isAuthenticated = () => {
    const token = localStorage.getItem("token")
    if(!token ) {
        return false
    }
    window.Buffer = window.Buffer || require("buffer").Buffer; 
    const decodedJwt = JSON.parse(window.Buffer.from(token.split(".")[1], 'base64').toString())
    if (decodedJwt.exp * 1000 < Date.now()) {
        return false
    }
    return true
}
export const authService = {
    login,
    isAuthenticated,
    logout
}