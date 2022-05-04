import { ticketStatusTypes } from "../utils/constants";

// export interface ITicketData {
//   title: string;
//   description: string;
//   status: ticketStatusTypes;
//   email: string;
//   category: string;
//   ticketRef: string;
//   agentEmail?: string;
//   createdAt: Date;
//   UpdatedAt: Date;
// }

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
