import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-cards py-2 px-5 text-[12px] text-other2 flex justify-between items-center'>
        <p className='flex items-center'><AiOutlineCopyrightCircle className='mr-1'/> 2023 All Rights Reserved.</p>
        <p>Email: abdurroheemsherifdeen@gmail.com</p>
    </div>
  )
}

export default Footer
