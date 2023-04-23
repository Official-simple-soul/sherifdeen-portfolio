import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';
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
const {light} = useGlobalContext()

  return (
    
    <div
      className={`${
        showNav ? 'absolute right-0 bottom-0 top-0 md:static w-[50%] md:w-[15%] md:h-[91vh]' : 'absolute -right-20 bottom-0 top-0 md:static md:w-[5%]'
      }  ${light?'bg-[#F4F4F6]':'bg-[#20202A]'} shadow-md flex flex-col transition-all ease-in-out duration-500`}
    >
      <div className={`${showNav? 'justify-start px-10':'justify-center'} z-50 ${light?'bg-[#F4F4F6]':'bg-[#24242F]'}  shadow-md w-full h-14 flex items-center`}>
        {showNav ? (
          <FaTimes
            className="absolute md:static text-other2 text-2xl transition-all ease-in-out duration-500 cursor-pointer"
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
      
    </div>
  );
}

export default SideBar;
