import { ticketStatusTypes } from "../utils/constants";
import { ICategory } from "./category.interface";
import { ICustomerSupport } from "./customer-support.interface";

export interface iTicket {
  title : string
  description : string
  status : ticketStatusTypes
  email : string
  category: ICategory
  subCategory? : string
  ticketRef : string,
  agentEmail? : string
  assigned? : ICustomerSupport
  escalated? : boolean
  createdAt : Date
  UpdatedAt : Date
}

export interface IFirebaseTicketData {
  category: string;
  description: string;
  email: string;
  status: ticketStatusTypes;
  subCategory: string;
  ticketRef: string;
  title: string;
  agentEmail? : string
}
