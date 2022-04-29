import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import LeftSidebar from '../sidebar/LeftSidebar'

const AppLayout = () => {
  return (
    <section className=" flex h-screen flex-col">
    <Header />
    <div className="flex w-full p-8 gap-8 flex-grow">
      <div className=" w-48 shrink-0">
          <LeftSidebar/>
      </div>
      <div className=" flex-grow">
          <Outlet/>
      </div>
    </div>
  </section>
  )
}

export default AppLayout