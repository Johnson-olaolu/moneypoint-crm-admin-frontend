import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
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
    navigate(``)
  }

  return (
    <>
      <Link to={`ongoing/${ticket.ticketRef}`} className = " block">
        <div className=" px-4 py-3 bg-gray-100 rounded-md space-y-1 relative hover:shadow-md">
          <p className=" text-sm text-gray-800">{ticket.title}</p>
          <div className=" flex items-center gap-1 text-xs text-gray-400 uppercase"> <span>STATUS</span> <TicketStatusTypes status={ticket.status}/></div> 
          <span className=" absolute right-4 text-xs italic text-gray-400 top-1">{moment(Date.now()).fromNow()}</span>  
        </div>
      </Link>
    </>
  );
};

export default SingleTicketItem;
