import React from 'react';
import { services } from '../data/data';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

function Services() {
  return (
    <div className='' id='services'>
      <h1 className="text-xl">My Services</h1>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {services.map((service, idx) => (
          <div className="card bg-cards px-5 py-8 relative" key={idx}>
            <h1>{service.title}</h1>
            <p className='mt-3 text-[12px] text-other2 text-justify'>{service.text}</p>

            <Link
              href="/contact"
              className="absolute font-bold bottom-2 left-4 flex items-center space-x-2 hover:space-x-3 text-other1 text-[14px] transition-all ease-in-out duration-500"
            >
              <h5 className='transition-all ease-in-out duration-500 text-sm'>{'ORDER NOW'}</h5>
              <FaAngleRight className='transition-all ease-in-out duration-500 text-sm'/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
