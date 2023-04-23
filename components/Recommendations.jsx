import React, { useState } from 'react';
import { reviews } from '../data/data';
import Image from 'next/image';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import Star from '../functions/Star'
import { useGlobalContext } from '../context/context';

function Recommendations() {
  const [num, setNum] = useState(1);
  const {light} = useGlobalContext()

  const handleNext = () => {
    num === reviews.length
      ? setNum(reviews.length)
      : setNum((prev) => prev + 1);
  };

  const handlePrev = () => {
    num === 1 ? setNum(1) : setNum((prev) => prev - 1);
  };


  return (
    <div className='mt-6' id='recommendations'>
      <h1 className='text-center md:text-start'>Recommendations</h1>
      <div className="mt-5 relative">
        {reviews.map((rev, idx) => {
          const { name, title, review, rating, image } = rev;

          const cardLeft =
            idx + 1 === num - 1
              ? '-left-[100%] opacity-0'
              : idx + 1 === num
              ? 'left-[0%]'
              : idx + 1 === num + 1
              ? 'md:left-[52%] left-[100%]'
              : 'left-[200%] opacity-0';
          return (
            <div
              className={`${cardLeft}  ${light?'bg-white':'bg-cards'} shadow-md card p-5 absolute w-[100%] md:w-[48%] h-[210px] transition-all ease-in-out duration-1000`}
              key={name}
            >
              <div className="absolute h-16 w-16 right-7 -top-7">
                <Image src={image} alt="" fill className="rounded-full" />
              </div>
              <h1 className="text-[14px]">{name}</h1>
              <h1 className="text-[12px] italic text-other2 mt-1">{title}</h1>
              <p className="text-[12px] text-other2 mt-6">{review}</p>
              <div className="flex justify-start mt-6">
                <div className={`${light?'bg-[#DFDFE5]':'bg-secBG'} flex space-x-1 px-4 py-2 rounded-xl text-[14px]`}>
                  <Star n={rating} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex py-5 mt-[210px] justify-between items-center">
        <div className="flex items-center space-x-3">
          {reviews.slice(0, reviews.length - 1).map((e, idx) => (
            <div
              className={`${
                idx + 1 === num ? 'w-6 bg-other1' : 'w-2 bg-other2'
              } h-1 rounded transition-all ease-in-out duration-1000`}
              key={idx}
            ></div>
          ))}
        </div>
        <div className="flex space-x-3 mt-4">
          <FaAngleLeft
            onClick={handlePrev}
            className={`${num === 1 && 'text-other2'} cursor-pointer`}
          />
          <FaAngleRight
            onClick={handleNext}
            className={`${
              num === reviews.length - 1 && 'text-other2'
            } cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
}

export default Recommendations;


