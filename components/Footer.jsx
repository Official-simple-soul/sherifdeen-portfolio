import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import { useGlobalContext } from '../context/context'

function Footer() {
  const {light} = useGlobalContext()

  return (
    <div className={`${light?'text-gray-700 border-t border-gray-400':'text-other2 bg-cards'} py-2 px-5 text-[12px] text-other2 flex justify-between items-center`}>
        <p className='flex items-center'><AiOutlineCopyrightCircle className='mr-1'/> 2023 All Rights Reserved.</p>
        <p>Email: abdurroheemsherifdeen@gmail.com</p>
    </div>
  )
}

export default Footer
