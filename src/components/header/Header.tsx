import React from 'react'

const Header = () => {
  return (
    <header className='h-20 bg-white shadow-md relative border-t-4 border-moneypoint-blue px-8'>
        <div className="flex items-center h-full w-full">
            <img src={require("../../assets/logos/moneypoint-logo.svg").default} alt="" className="" />
            <div className="flex items-center justify-between flex-grow">
                <div className=""></div>
                <div className="flex items-center gap-10">
                    <button>  <img src={require("../../assets/icons/settings.svg").default} alt="" className="" /> </button>
                    <button>   <img src={require("../../assets/icons/logout.svg").default} alt="" className="" /> </button>   
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header