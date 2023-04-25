import React from 'react';
import MainTop from './MainTop';
import Service from './Services'
import Priceplan from './Priceplan'
import Recommendations from './Recommendations'
import { useGlobalContext } from '../context/context';
import Acknowledge from './Acknowledgement'
import Footer from './Footer'

const expe = [
  { dig: '2+', desc: 'Years Experience' },
  { dig: '14', desc: 'Completed Projects' },
  { dig: '45', desc: 'Happy customers' },
  { dig: '5', desc: 'Honors and Awards' },
];

function Main() {
  const { showNav } = useGlobalContext();
  return (
    <div className='relative'>
      <MainTop />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 py-8">
        {expe.map((exp) => (
          <div className="md:flex shadow py-1 px-2 space-x-3 items-center text-center md:text-start mb-2" key={exp.dig}>
            <h1 className='text-xl md:text-2xl text-other1'>{exp.dig}</h1>
            <h1 className='text-[12px] md:text-[13px]'>{exp.desc}</h1>
          </div>
        ))}
      </div>
      <Service />
      <Priceplan />
      <Recommendations />
      <Acknowledge />
      <Footer />
    </div>
  );
}

export default Main;
