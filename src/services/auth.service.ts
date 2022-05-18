import { ICustomerSupport } from "../interface/customer-support.interface"
import { IUser } from "../interface/user.interface"
import axiosService from "./axios.service"

const login = (payload : {
    email : string,
    password : string
}) : Promise <{ user : IUser , customerSupport? : ICustomerSupport}> =>  {
    return axiosService.post("/auth/login", payload)
        .then((res) => {
            const {accessToken, user , customerSupport } = res.data
            localStorage.setItem("token", accessToken)
            return customerSupport? {user, customerSupport} : { user}
        })
        .catch(err => {
            console.error(err);
            return  Promise.reject()
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