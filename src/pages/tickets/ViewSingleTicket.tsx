import moment from "moment";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MCustumSelect from "../../components/forms/MCustomSelect";
import TicketStatusTypes from "../../components/statusTypes/TicketStatusTypes";
import { ICustomerSupportLevel } from "../../interface/customer-support.interface";
import { iTicket } from "../../interface/ticket.interface";
import { customerSupportService } from "../../services/customer-support.service";
import { ticketService } from "../../services/ticket.service";
import { ticketStatusTypes } from "../../utils/constants";
import TicketChat from "./components/TicketChat";

const ViewSingleTicket = () => {
  const { ticketRef } = useParams();
  const { user } = useSelector((state: any) => state.user);

  const [ticketInfo, setTicketInfo] = useState<iTicket>();
  const [customerSupportLevels, setCustomerSupportLevels ] = useState<ICustomerSupportLevel[]>();

  const costumerSupportLevelsQuery = useQuery("customerSupportLevels", customerSupportService.getAllCustomerSupportLevels , {
    onSuccess: () => {
      setCustomerSupportLevels(costumerSupportLevelsQuery.data)
    }
  })

  const ticketQuery = useQuery(["ticket", ticketRef], () => ticketService.getSingleTicketByRef(ticketRef!), {
    onSuccess: () => {
      setTicketInfo(ticketQuery.data);
    },
  });

  return (
    <>
      {ticketQuery.isLoading ? (
        <div className="">Is Loading</div>
      ) : ticketQuery.error ? (
        <div className="">Error : {(ticketQuery.error as Error).message}</div>
      ) : (
        <section className=" h-full overflow-auto pb-10">
          <h2 className=" text-gray-800 font-medium text-2xl mb-6"> Issue #{ticketRef}</h2>
          <div className=" bg-white rounded-lg shadow-sm px-5 py-6">
            <div className=" flex border-b border-gray-300">
              <div className=" space-y-1 pb-4  grow">
                <h4 className=" text-lg text-gray-800 font-medium">{ticketInfo?.title}</h4>
                <span className=" text-sm text-gray-400">{moment(ticketInfo?.createdAt).fromNow()}</span>
              </div>
              <div className="space-y-1 pl-4 pb-4 border-l w-80 shrink-0">
                <label className=" text-lg text-gray-800 font-medium">Client Details</label>
                <span className="text-sm text-gray-400 block">{ticketInfo?.email}</span>
              </div>
            </div>
            <div className="flex">
              <div className=" space-y-1 pt-4 pr-4  grow">
                <TicketChat ticketRef={ticketInfo?.ticketRef!} />
              </div>
              <div className="space-y-4 pl-4 pt-4 border-l w-80 shrink-0">
                <div className=" space-y-2">
                  <span className=" text-xs text-gray-600 uppercase  block">Issue Status</span>
                  <TicketStatusTypes status={ticketInfo?.status!} />
                </div>
                <div className=" space-y-2">
                  <span className=" text-xs text-gray-600 uppercase  block">Issue category</span>
                  <p className=" text-lg text-gray-800 font-medium">{ticketInfo?.category.title}</p>
                </div>
                <div className=" space-y-2">
                  <span className=" text-xs text-gray-600 uppercase  block">Issue Support Level</span>
                  <MCustumSelect data={customerSupportLevels!?.map(level => ({name : level.name, value : level.id}))} name="customeSupportLevel" onSelect={() => {}} value={""} />
                  <button className=" rounded bg-moneypoint-red text-white w-full h-12 font-medium capitalize">escalate</button>
                </div>
                <div className=" space-y-2">
                  <span className=" text-xs text-gray-600 uppercase  block">Attached Files</span>
                  <div className="">Attached Image div</div>
                </div>
                <div className="space-y-2">
                  <button className=" rounded bg-moneypoint-blue text-white w-full h-12 font-medium capitalize">Resolve</button>
                  <button className=" rounded bg-moneypoint-red text-white w-full h-12 font-medium capitalize">Close</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ViewSingleTicket;
