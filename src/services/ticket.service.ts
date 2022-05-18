import { iTicket } from "../interface/ticket.interface"
import axiosService from "./axios.service"

const getSingleTicketByRef = (ticketRef : string) : Promise<iTicket> => {
    return axiosService.get(`/ticket/ref/${ticketRef}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.error(err)
            Promise.reject()
        })
}

const assignTicket= (payload: { assigneeId? : number , ticketRef : string,  customerSupportId : number} )  : Promise<string>  => {
    return axiosService.post(`ticket/assign-ticket`, payload) 
        .then(res => {
            return res.data
        })
        .catch(err =>{
            console.error(err)
            return Promise.reject()
        })
}

const sendNewMessage  = (payload : { customerSupportId? : number, message : string, ticketRef : string  , sentAt : Date }) => {
    const {message, ticketRef, customerSupportId, sentAt} = payload
    return axiosService.post(`/ticket/message/${ticketRef}` , {message, customerSupportId, sentAt})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.error(err)
        })
}

export const ticketService = {
    sendNewMessage,
    getSingleTicketByRef,
    assignTicket
} 