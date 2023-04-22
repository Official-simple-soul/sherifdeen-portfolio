import React from 'react';
import Image from 'next/image';

function Acknowledgement() {
  return (
    <div className="grid grid-cols-4 gap-6 py-14">
     

      <div className="relative h-24 w-24 mx-auto">
        <Image src={'/ackn/acaedf.png'} alt="acaedf" fill className='mix-blend-color-dodge'/>
      </div>
      <div className="relative h-28 w-28 mx-auto">
        <Image src={'/ackn/kodecamp.png'} alt="kodecamp" fill className='mix-blend-color-dodge'/>
      </div>
      <div className="relative h-24 w-36 mx-auto">
        <Image src={'/ackn/FreeCodeCamp.png'} alt="freecodecamp" fill className='mix-blend-color-dodge'/>
      </div>
      <div className="relative h-24 w-36 mx-auto">
        <Image src={'/ackn/stack.png'} alt="stackoverflow" fill className='mix-blend-color-dodge'/>
      </div>
    </div>
  );
}

export default Acknowledgement;
