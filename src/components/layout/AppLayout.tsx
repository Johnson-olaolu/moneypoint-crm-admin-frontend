import React from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import Header from '../header/Header'
import LeftSidebar from '../sidebar/LeftSidebar'

const AppLayout = () => {
  return (
    <section className=" flex h-screen flex-col bg-moneypoint-light-blue">
    <Header />
    <div className="flex w-full pl-8 pt-8 pr-8 gap-8  h-full overflow-hidden">
      <div className=" w-56 pb-8 shrink-0 h-full overflow-auto">
          <LeftSidebar/>
      </div>
      <div className=" flex-grow flex flex-col ">
          <Breadcrumbs/>
          <Outlet/>
      </div>
    </div>
  </section>
  )
}

export default AppLayout