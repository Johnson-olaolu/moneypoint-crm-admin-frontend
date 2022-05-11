import React from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../../services/auth.service'

const Header = () => {
  const navigate = useNavigate()
  const logout  = () => {
    authService.logout()
    navigate("/auth/login")
  }

  return (
    <header className='h-20 bg-white shadow-md relative border-t-4 border-moneypoint-blue px-8 shrink-0'>
        <div className="flex items-center h-full w-full">
            <img src={require("../../assets/logos/moneypoint-logo.svg").default} alt="" className="" />
            <div className="flex items-center justify-between flex-grow">
                <div className=""></div>
                <div className="flex items-center gap-10">
                    <button>  <img src={require("../../assets/icons/settings.svg").default} alt="" className="" /> </button>
                    <button onClick={logout}>   <img src={require("../../assets/icons/logout.svg").default} alt="" className="" /> </button>   
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header