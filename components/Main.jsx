import React from 'react';
import MainTop from './MainTop';
import Service from './Services'
import Priceplan from './Priceplan'
import Recommendations from './Recommendations'
import { useGlobalContext } from '../context/context';
import Acknowledge from './Acknowledgement'
import Footer from './Footer'

const expe = [
  { dig: '10+', desc: 'Years Experience' },
  { dig: '143', desc: 'Completed Projects' },
  { dig: '114', desc: 'Happy customers' },
  { dig: '20+', desc: 'Honors and Awards' },
];

function Main() {
  const { showNav } = useGlobalContext();
  return (
    <div className='relative'>
    
      <MainTop />
      <div className="flex items-center justify-between py-8">
        {expe.map((exp) => (
          <div className="flex space-x-3 items-center" key={exp.dig}>
            <h1 className='text-3xl text-other1'>{exp.dig}</h1>
            <h1 className='text-[14px]'>{exp.desc}</h1>
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
