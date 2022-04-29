import React from 'react'

interface IMCustomFormGroupSubmit {
    onClick:  () => void
}

const MCustomFormGroupSubmit: React.FC<IMCustomFormGroupSubmit> = () => {
  return (
    <button type="submit" className='w-full text-sm h-12 rounded text-white bg-moneypoint-blue font-medium'> Create Ticket</button>
  )
}

export default MCustomFormGroupSubmit