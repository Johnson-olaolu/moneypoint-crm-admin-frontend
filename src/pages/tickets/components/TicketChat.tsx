import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firebaseService } from "../../../services/firebase.service";
import { ticketService } from "../../../services/ticket.service";
import { getInitials } from "../../../utils/helpers";
import { IUser } from "../../../interface/user.interface";
import { RootState } from "../../../store";

interface ITicketChat {
  ticketRef: string;
}

const TicketChat: React.FC<ITicketChat> = (props) => {
  const { ticketRef } = props;
  const { user } = useSelector((state: RootState) => state.user);
  const { messages } = useSelector((state: any) => state.messages);

  useEffect(() => {
    firebaseService.listenForMessages(ticketRef);
  }, [ticketRef]);

  const [messageData, setMessageData] = useState("");

  const handleSendMessage = async () => {
    let payload = {
      ticketRef: ticketRef,
      customerSupportId: user?.customerSupport?.id,
      message: messageData,
      sentAt: new Date(),
    };
    const response = await ticketService.sendNewMessage(payload);
    setMessageData("")
  };

  return (
    <div className=" h-full flex flex-col ">
      <div className="grow h-96  overflow-y-auto">
        {messages.map((message: { user?: string; message: string; sentAt: Date; createdAt: Date }) => (
          <SingleChatItem sentAt={message.sentAt} createdAt={message.createdAt} message={message.message} user={message.user} />
        ))}
      </div>
      {/* chat bar */}
      <div className=" h-8 shrink-0">
        <div className=" flex space-x-2">
          <div className=" grow bg-gray-100 rounded-full px-4 flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              name="message"
              placeholder="Type in your message here"
              value={messageData}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMessageData(e.target.value);
              }}
              className=" flex-grow bg-transparent focus-visible:outline-none text-sm placeholder:text-gray-300 text-gray-600"
            />
            <div className=" flex shrink-0 items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={messageData === ""}
            className=" h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer disabled:opacity-50"
          >
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 13.8417L16.3847 0.629206L0 2.58337L2.52778 6.96161L12.6319 2.79587L3.97222 9.46346L6.5 13.8417Z" fill="#0361F0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

interface ISingleChat {
  sentAt: Date;
  createdAt: Date;
  message: string;
  user?: string;
}
const SingleChatItem: React.FC<ISingleChat> = (props) => {
  //const { user }: { user: IUser } = useSelector((state: any) => state.user);
  const { message, sentAt, createdAt, user } = props;
  return (
    <div className=" mb-4">
      {!user ? (
        <div className=" flex space-x-2 items-end max-w-md ">
          <div className=" w-6 h-6 rounded-full bg-gray-200 shrink-0 flex items-center justify-center">
            <span className=" text-xs text-gray-800">G</span>
          </div>
          <div className=" bg-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg text-xs p-4 text-gray-600">
            {message}
            <p className="text-right text-blue-400">{moment(sentAt).fromNow()}</p>
          </div>
        </div>
      ) : (
        <div className=" flex space-x-2 items-end max-w-md ml-auto justify-end">
          <div className=" bg-moneypoint-blue rounded-tl-lg rounded-tr-lg rounded-bl-lg text-xs p-4 text-blue-100">
            {message}
            <p className="text-right text-blue-400">{moment(sentAt).fromNow()}</p>
          </div>
          <div className=" w-6 h-6 rounded-full bg-moneypoint-blue shrink-0 flex items-center justify-center">
            <span className=" text-xs text-white">{getInitials(user)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketChat;
