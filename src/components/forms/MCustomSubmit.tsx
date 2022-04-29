import React from 'react'

interface IMCustomInput {
    text: string
}

const MCustomSubmit : React.FC<IMCustomInput>= (props) => {
    const { text} = props
  return (
    <button className='w-full h-12 rounded bg-white text-xl font-medium mix-blend-screen'  type="submit">{text}</button>
  )
}

export default MCustomSubmit