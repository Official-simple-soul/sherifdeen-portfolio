import React from 'react';
import { useGlobalContext } from '../context/context';

function FirstContactRow() {
const {light} = useGlobalContext()

  return (
    <div>
      <h1 className='font-bold text-center md:text-start mt-5 md:mt-0'>Contact information</h1>
      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        <div className={`${light?'bg-white':'bg-cards'} card bg-cards px-5 py-8`}>
          <div className="text-[12px] flex justify-between items-center">
            <p>Country:</p>
            <p className="text-other2">Nigeria</p>
          </div>
          <div className="my-3 text-[12px] flex justify-between items-center">
            <p>State:</p>
            <p className="text-other2">Akwa-Ibom</p>
          </div>
          <div className="text-[12px] flex justify-between items-center">
            <p>City:</p>
            <p className="text-other2">Eket</p>
          </div>
        </div>
        <div className={`${light?'bg-white':'bg-cards'} card bg-cards px-5 py-8`}>
          <div className="text-[12px] flex justify-between items-center">
            <p>Email:</p>
            <p className="text-other2">abdurroheemsherifdeen@gmail</p>
          </div>
          <div className="my-3 text-[12px] flex justify-between items-center">
            <p>Github:</p>
            <p className="text-other2">Official-simple-soul</p>
          </div>
          <div className="text-[12px] flex justify-between items-center">
            <p>Linkdin:</p>
            <p className="text-other2">abdurroheemsherifdeen</p>
          </div>
        </div>
        <div className={`${light?'bg-white':'bg-cards'} card bg-cards px-5 py-8`}>
          <div className="text-[12px] flex justify-between items-center">
            <p>Twitter:</p>
            <p className="text-other2">@sir-simple-soul</p>
          </div>
          <div className="my-3 text-[12px] flex justify-between items-center">
            <p>Figma:</p>
            <p className="text-other2">figmablablabla</p>
          </div>
          <div className="text-[12px] flex justify-between items-center">
            <p>Phone:</p>
            <p className="text-other2">08139781147</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstContactRow;
