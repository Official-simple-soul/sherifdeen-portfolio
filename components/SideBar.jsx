import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';
import {MdDarkMode} from 'react-icons/md'
import {BsSun} from 'react-icons/bs'
import { socialMedia } from '../data/data';
import Link from 'next/link';
const nav = [
  { nav: 'Home', link: '/' },
  { nav: 'Services', link: '#services' },
  { nav: 'Plans', link: '#plans' },
  { nav: 'Project', link: '/projects' },
  { nav: 'Contact', link: '/contact' },
];


function SideBar() {
  const route = useRouter();
  const {showNav, setShowNav} = useGlobalContext();
const [light, setLight] = useState(false)

  return (
    <div
      className={`${
        showNav ? 'w-[15%] h-[91vh]' : 'w-[5%]'
      }  bg-[#20202A] flex flex-col transition-all ease-in-out duration-500`}
    >
      <div className={`${showNav? 'justify-start px-10':'justify-center'} z-50 bg-[#24242F] w-full h-14 flex items-center`}>
        {showNav ? (
          <FaTimes
            className="text-other2 text-2xl transition-all ease-in-out duration-500 cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          />
        ) : (
          <GiHamburgerMenu
            className="text-other2 text-2xl transition-all ease-in-out duration-500 cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          />
        )}
      </div>
      {showNav ? (
        <ul className="space-y-5 uppercase p-10 transition-all ease-in-out duration-500">
          {nav.map((nav) => (
            <li key={nav.nav} className={`text-sm text-other2`} onClick={()=>setShowNav(false)}>
              <Link href={nav.link}>{nav.nav}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rotate-90 mt-20 text-other2">
          {route.pathname === '/' ? 'HOME' : route.pathname.slice(1).toUpperCase()}
        </div>
      )}
      <div className="bg-white absolute top-64 right-0 flex flex-col">
        {
          socialMedia.map((side, idx)=> {
            const Icon = side.icon
            return <div className="" key={idx}>
              <Icon className='text-black text-[40px] border-b border-black p-2 cursor-pointer hover:bg-priBG hover:text-white'/>
            </div>
          })
        }
        {
          light?
          <MdDarkMode className='text-black text-[40px] border-b border-black p-2 cursor-pointer hover:bg-priBG hover:text-white' onClick={()=>setLight(!light)}/>
          :
          <BsSun className='text-black text-[40px] border-b border-black p-2 cursor-pointer hover:bg-priBG hover:text-white' onClick={()=>setLight(!light)}/>
        }
      </div>
    </div>
  );
}

export default SideBar;
