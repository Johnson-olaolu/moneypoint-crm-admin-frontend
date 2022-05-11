import React from "react";
import { useNavigate } from "react-router-dom";
import TicketStatusTypes from "../../../components/statusTypes/TicketStatusTypes";
import { IFirebaseTicketData } from "../../../interface/ticket.interface";
import { ticketStatusTypes } from "../../../utils/constants";

interface ISingleTicketItem {
  ticket :IFirebaseTicketData
}

const SingleTicketItem : React.FC<ISingleTicketItem> = (props): JSX.Element => {
  const navigate = useNavigate()
  const { ticket } = props;
  const  handleTicketNavigate = (status : ticketStatusTypes , ticketRef : string) => {
    navigate(`ongoing/${ticketRef}`)
  }

  return (
    <div  onClick={ () => {handleTicketNavigate(ticket.status, ticket.ticketRef)}} className=" bg-gray-100 rounded-md p-5 shadow-sm hover:shadow-md cursor-pointer">
      <div className=" pb-4">
        <h4 className=" text-base text-gray-800 font-medium capitalize mb-2"> {ticket.title}</h4>
        <p className=" text-sm text-gray-800 ticket-item-text max-h-10 overflow-hidden ">{ticket.description}</p>
      </div>
      <div className="grid grid-cols-4 gap-y-3">
        <div className=" space-y-2">
          <label htmlFor="issueId" className=" uppercase text-sm text-gray-400 ">
            ISSUE ID
          </label>
          <p id="issueId" className="">
            #{ticket.ticketRef}
          </p>
        </div>
        <div className=" space-y-2">
          <label htmlFor="issueId" className=" uppercase text-sm text-gray-400 ">
            Category
          </label>
          <p id="issueId" className="">
            {ticket.category}
          </p>
        </div>
        <div className=" space-y-2">
          <label htmlFor="issueId" className=" uppercase text-sm text-gray-400 ">
            Customer Email
          </label>
          <p id="issueId" className="">
            {ticket.email}
          </p>
        </div>
        <div className=" space-y-2">
          <label htmlFor="issueId" className=" uppercase text-sm text-gray-400 ">
            Agent ID
          </label>
          <p id="issueId" className="">
            {ticket.agentEmail}
          </p>
        </div>
        <div className=" space-y-2">
          <label htmlFor="issueId" className=" uppercase text-sm text-gray-400 ">
            Assigned to
          </label>
          <p id="issueId" className="">
            Unassigned
          </p>
        </div>
        <div className=" space-y-2">
          <label htmlFor="issueId" className=" uppercase text-sm text-gray-400 ">
            status
          </label>
          <p id="issueId" className="">
            <TicketStatusTypes status={ticket.status}/>
          </p>
        </div>
        <div className=" col-span-2 flex items-center gap-4 justify-end">
          <button className=" rounded bg-moneypoint-blue text-white w-36 h-12 font-medium capitalize">
            take issue
          </button>
          <button className=" rounded bg-moneypoint-red text-white w-36 h-12 font-medium capitalize">
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTicketItem;
