import React from "react";
import { useParams } from "react-router-dom";
import MCustumSelect from "../../components/forms/MCustomSelect";
import TicketStatusTypes from "../../components/statusTypes/TicketStatusTypes";
import { ticketStatusTypes } from "../../utils/constants";

const ViewSingleTicket = () => {
  const params = useParams();
  return (
    <section>
      <h2 className=" text-gray-800 font-medium text-2xl mb-6"> Issue #{params.ticketId}</h2>
      <div className=" bg-white rounded-lg shadow-sm px-5 py-6">
        <div className=" flex border-b border-gray-300">
          <div className=" space-y-1 pb-4  grow">
            <h4 className=" text-lg text-gray-800 font-medium">I have a missing withdrawal and my password issue</h4>
            <span className=" text-sm text-gray-400">Opened 16 hours ago</span>
          </div>
          <div className="space-y-1 pl-4 pb-4 border-l w-80 shrink-0">
            <label className=" text-lg text-gray-800 font-medium">Customer Support</label>
            <span className="text-sm text-gray-400 block">UcheJohnson@gmail.com</span>
          </div>
        </div>
        <div className="flex">
          <div className=" space-y-1 pt-4 pr-4  grow"></div>
          <div className="space-y-4 pl-4 pt-4 border-l w-80 shrink-0">
            <div className=" space-y-2">
              <span className=" text-xs text-gray-600 uppercase  block">Issue Status</span>
              <TicketStatusTypes status={ticketStatusTypes.OPENED} />
            </div>
            <div className=" space-y-2">
              <span className=" text-xs text-gray-600 uppercase  block">Issue category</span>
              <p className=" text-lg text-gray-800 font-medium">Finance</p>
            </div>
            <div className=" space-y-2">
              <span className=" text-xs text-gray-600 uppercase  block">Issue Support Level</span>
              <MCustumSelect data={[]} name="customeSupportLevel" onSelect={() => {}} value={""} />
              <button className=" rounded bg-moneypoint-red text-white w-full h-12 font-medium capitalize">escalate</button>
            </div>
            <div className=" space-y-2">
              <span className=" text-xs text-gray-600 uppercase  block">Attached Files</span>
              <div className="">
                  Attached Image div
              </div>
            </div>
            <div className="space-y-2">
            <button className=" rounded bg-moneypoint-blue text-white w-full h-12 font-medium capitalize">Resolve</button>
            <button className=" rounded bg-moneypoint-red text-white w-full h-12 font-medium capitalize">Close</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewSingleTicket;
