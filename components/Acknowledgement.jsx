import React from 'react';
import Image from 'next/image';
import { useGlobalContext } from '../context/context';

function Acknowledgement() {
  const {light} = useGlobalContext()
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-14 mt-32 lg:mt-0">
      <div className="relative h-24 w-24 mx-auto">
        <Image src={'/ackn/acaedf.png'} alt="acaedf" fill className={`${light?'':'mix-blend-color-dodge'} shadow-md`}/>
      </div>
      <div className="relative h-24 w-28 mx-auto">
        <Image src={'/ackn/kodecamp.png'} alt="kodecamp" fill className={`${light?'':'mix-blend-color-dodge'} shadow-md`}/>
      </div>
      <div className="relative h-24 w-36 mx-auto">
        <Image src={'/ackn/FreeCodeCamp.png'} alt="freecodecamp" fill className={`${light?'':'mix-blend-color-dodge'} shadow-md`}/>
      </div>
      <div className="relative h-24 w-36 mx-auto">
        <Image src={'/ackn/stack.png'} alt="stackoverflow" fill className={`${light?'':'mix-blend-color-dodge'} shadow-md`}/>
      </div>
    </div>
  );
}

export default Acknowledgement;
