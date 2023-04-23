import Link from 'next/link';
import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { FaTimes, FaAngleRight } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { useGlobalContext } from '../context/context';


function Priceplan() {
  const {light} = useGlobalContext()
  
  return (
    <div id='plans'>
      <h1 className="my-6 text-center md:text-start">Training Price Plan</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className={`${light?'bg-white':'bg-cards'} card shadow-md text-center py-8 relative overflow-hidden  transition-all ease-in-out duration-500`}>
          <h1>Starter Price</h1>
          <p className="text-light text-[12px] my-6">
            $ <span className="text-4xl text-bold text-other1">FREE</span>/ hour
          </p>
          <div className="space-y-3">
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Wed Development</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Javascript</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <IoIosClose className="text-[12px] text-other1" />
              <span>ReactJs and upward</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <IoIosClose className="text-[12px] text-other1" />
              <span>Web and Mobile App Management</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Mentorship</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <IoIosClose className="text-[12px] text-other1" />
              <span>Certificate</span>
            </p>
          </div>
          <Link
            href=""
            className="absolute font-bold bottom-2 left-[35%] flex items-center space-x-2 hover:space-x-3 text-other1 text-[14px] transition-all ease-in-out duration-500"
          >
            <h5 className="transition-all ease-in-out duration-500 text-sm">
              {'ORDER NOW'}
            </h5>
            <FaAngleRight className="transition-all ease-in-out duration-500 text-sm" />
          </Link>
        </div>
        <div className={`${light?'bg-white':'bg-cards'}  shadow-md card text-center py-8 relative overflow-hidden  transition-all ease-in-out duration-500`}>
          <h1>Basic Price</h1>
          <p className="text-light text-[12px] my-6">
            $ <span className="text-4xl text-bold text-other1">5</span>/ hour
          </p>
          <div className="space-y-3">
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Wed Development</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Html, Css and Javascript</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Bootstrap and Tailwind</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>ReactJs</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <IoIosClose className="text-[12px] text-other1" />
              <span>Web and Mobile App Management</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Mentorship</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Certificate</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="absolute font-bold bottom-2 left-[35%] flex items-center space-x-2 hover:space-x-3 text-other1 text-[14px] transition-all ease-in-out duration-500"
          >
            <h5 className="transition-all ease-in-out duration-500 text-sm">
              {'REQUEST NOW'}
            </h5>
            <FaAngleRight className="transition-all ease-in-out duration-500 text-sm" />
          </Link>
          <div className="text-[12px] absolute w-40 py-1 text-black bg-other1 text-center rotate-45 top-6 -right-12">
            POPULAR
          </div>
        </div>
        <div className={`${light?'bg-white':'bg-cards'}  shadow-md card text-center py-8 relative  transition-all ease-in-out duration-500`}>
          <h1>Premium Price</h1>
          <p className="text-light text-[12px] my-6">
            $ <span className="text-4xl text-bold text-other1">12</span> hour
          </p>
          <div className="space-y-3">
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>FrontEnd Development (Full)</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Javascript, ReactJs, NextJs, <br /> VueJs(Optional)</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Bootstrap, Tailwind and SCSS</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <IoIosClose className="text-[12px] text-other1" />
              <span>Mobile App Development <br /> (React Native or Kotlin)</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Web and Mobile App Management</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Mentorship</span>
            </p>
            <p className="text-other2 text-[12px] flex items-center justify-center space-x-2">
              <BsCheck className="text-[12px] text-other1" />
              <span>Certificate</span>
            </p>
          </div>
          <Link
            href=""
            className="absolute font-bold bottom-2 left-[35%] flex items-center justify-center space-x-2 hover:space-x-3 text-other1 text-[14px] transition-all ease-in-out duration-500"
          >
            <h5 className="transition-all ease-in-out duration-500 text-sm">
              {'ORDER NOW'}
            </h5>
            <FaAngleRight className="transition-all ease-in-out duration-500 text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Priceplan;
