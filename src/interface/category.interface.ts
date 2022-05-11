import { ICustomerSupportLevel } from "./customer-support.interface"

export interface ICategory {
    id : number
    title : string
    description : string
    customerSupportLevels : ICustomerSupportLevel[]
    subCategories : string[]
}

export interface IFaq {
    id : number
    question : string
    solution : string
    category : ICategory
    subCategory : string
}