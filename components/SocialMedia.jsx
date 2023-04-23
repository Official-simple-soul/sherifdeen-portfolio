import React, {useState} from 'react'
import {MdDarkMode} from 'react-icons/md'
import {BsSun} from 'react-icons/bs'
import { socialMedia } from '../data/data';
import Link from 'next/link';
import { useGlobalContext } from '../context/context';

function SocialMedia() {
    const {light, setLight} = useGlobalContext()
  return (
    <div className="opacity-90 md:opacity-100 bg-white absolute top-64 right-0 flex flex-col">
        {
          socialMedia.map((side, idx)=> {
            const Icon = side.icon
            return <Link href={side.link} target='_blank' className="" key={idx}>
              <Icon className='text-black text-[40px] border-b border-black p-2 cursor-pointer hover:bg-priBG hover:text-white'/>
            </Link>
          })
        }
        {
          light?
          <MdDarkMode className='text-black text-[40px] border-b border-black p-2 cursor-pointer hover:bg-priBG hover:text-white' onClick={()=>setLight(!light)}/>
          :
          <BsSun className='text-black text-[40px] border-b border-black p-2 cursor-pointer hover:bg-priBG hover:text-white' onClick={()=>setLight(!light)}/>
        }
      </div>
  )
}

export default SocialMedia
