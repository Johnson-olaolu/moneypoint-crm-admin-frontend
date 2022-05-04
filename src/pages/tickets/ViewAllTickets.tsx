import React from 'react'
import { } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IFirebaseTicketData } from '../../interface/ticket.interface'
import { testTicketData } from '../../utils/testTicketData'
import SingleTicketItem from './components/SingleTicketItem'
import SortBar from './components/SortBar'

const ViewAllTickets = () => {
  const navigate = useNavigate()
	const { tickets } = useSelector((state : any) => state.tickets);
  return (
    <section className='ticket-section rounded-lg bg-white p-6 shadow-md h-full overflow-auto'>  
      <SortBar/>
      <div className=" space-y-4">
        {tickets.map((ticket : IFirebaseTicketData) => (
          <SingleTicketItem ticket = {ticket}/>
        ))}
      </div>
      <div className="my-5 text-center">
        <button className=' text-sm font-medium text-moneypoint-blue'>Load More</button>
      </div>
    </section>
  )
}

export default ViewAllTickets