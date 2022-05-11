import axiosService from "./axios.service"


const sendNewMessage  = (payload : { userId? : string, message : string, ticketRef : string  , sentAt : Date }) => {
    const {message, ticketRef, userId , sentAt} = payload
    return axiosService.post(`/ticket/message/${ticketRef}` , {message, userId, sentAt})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.error(err)
        })
}

const getSingleTicketByRef = (ticketRef : string) => {
    return axiosService.get(`/ticket/ref/${ticketRef}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.error(err)
        })
}

export const ticketService = {
    sendNewMessage,
    getSingleTicketByRef
} 