import axiosService from "./axios.service"

const getAllCustomerSupportLevels = () => {
    return axiosService.get("/customer-support/level")
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.error(err)
            Promise.reject()
        })
}

export const customerSupportService = {
    getAllCustomerSupportLevels
}