import React from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import Skill from './Skill';
import SkillList from './SkillList';
import { FaDownload } from 'react-icons/fa';
import { socialMedia } from '../data/data';

function Header() {
  return (
    <div className="z-40 w-[25%] fixed h-[91vh] relative">
      <div className="top bg-priBG py-8 px-6 h-[37%]">
        <div className="relative w-20 h-20 mx-auto">
          <Image
            src={'/skillImages/logo.jpg'}
            alt=""
            fill
            className="rounded-full border"
          />
          <div className="right-2 bottom-2 rounded-full h-3 w-3 absolute bg-other1 animate-ping"></div>
          <div className="right-2 bottom-2 rounded-full h-3 w-3 absolute bg-other1"></div>
        </div>
        <div className="text-center">
          <h1 className="my-4">Simple_Soul</h1>
          <h4 className="text-[#8C8C8E] text-[14px]">Software Engineer</h4>
          <h4 className="text-[#8C8C8E] text-[14px]">DevOps Engineer</h4>
        </div>
      </div>
      <div className="relative overflow-auto scroll-smooth px-6 py-3 bg-secBG h-[63%]">
        <div className="top pb-4 border-b border-gray-500">
          <div className="flex justify-between items-center">
            <h5 className="text-[14px]">Residence:</h5>
            <h5 className="text-[#8C8C8E] text-[14px]">Nigeria</h5>
          </div>
          <div className="flex justify-between items-center my-2">
            <h5 className="text-[14px]">City:</h5>
            <h5 className="text-[#8C8C8E] text-[14px]">Akwa-Ibom</h5>
          </div>
          <div className="flex justify-between items-center">
            <h5 className="text-[14px]">Age:</h5>
            <h5 className="text-[#8C8C8E] text-[14px]">29</h5>
          </div>
        </div>
        <Skill />
        <SkillList />
        <Link
          href={'https://drive.google.com/file/d/1UMAGPReUpHn-JTJ87w9uKq6tsyFQbxwg/view?usp=sharing'}
          target='blank'
          className="py-3 flex justify-start items-center space-x-4"
        >
          <h1 className="text-[#8C8C8E]">Download CV</h1>
          <FaDownload className="text-[#8C8C8E]" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
