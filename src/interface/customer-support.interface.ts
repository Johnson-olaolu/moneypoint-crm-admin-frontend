import { IUser } from "./user.interface"

export interface ICustomerSupport {
    id : number
    user : IUser
    level : ICustomerSupportLevel 
    createdAt : Date
    updatedAt : Date
}

export interface ICustomerSupportLevel {
    id: number
    name : string
    description : string
    customerSupports : ICustomerSupport[]
    createdAt : Date
    updatedAt : Date
}