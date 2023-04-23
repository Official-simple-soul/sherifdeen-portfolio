import React from 'react';
import { projects } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';
import { useGlobalContext } from '../context/context';


function ProjectMain() {
  const {light} = useGlobalContext()

  return (
    <div className="">
      <div className="md:columns-3 md:gap-10 mb-10 px-6 mt-6">
        {projects.map((project) => {
          return (
            <div
              className="group card relative mb-10 overflow-hidden transition-all ease-in-out cursor-pointer duration-1000"
              key={projects.id}
            >
              <Image
                src={project.image}
                alt={project.link}
                height={500}
                width={500}
                className={`hover:scale-105 transition-all ease-in-out duration-1000`}
              />
              <div className={`${light?'bg-[#F4F4F6]':'bg-secBG'} group-hover:h-40 group-hover:p-3 absolute h-0 w-full bottom-0 transition-all ease-in-out duration-1000`}>
                <h1 className="text-[14px] text-other1">{project.name}</h1>
                <p className="text-[10px] text-other2 my-3">{project.desc}</p>
                <div className="flex items-center justify-between text-[12px]">
                  <Link
                    href={`${project.live}`}
                    className="hover:bg-gray-700 hover:text-white px-5 rounded-md shadow bg-transparent border border-other2 text-other2 transition-all ease-in-out duration-500"
                  >
                    Live
                  </Link>
                  <Link
                    href={`${project.code}`}
                    className="hover:bg-gray-700 hover:text-white px-5 rounded-md shadow bg-transparent border border-other2 text-other2 transition-all ease-in-out duration-500"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectMain;
