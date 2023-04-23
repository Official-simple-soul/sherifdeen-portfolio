import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useGlobalContext } from '../context/context';

const Loader = () => {
  const {timer, setTimer} = useGlobalContext()

  useEffect(() => {
    if (timer === 25 || timer === 45 || timer === 70 || timer === 80 || timer === 95) {
      setTimeout(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 50);
      if (timer === 115) {
        clearInterval(intervalId);
      }
      return () => {
        clearInterval(intervalId); // Cleanup the interval when the component unmounts or when the effect runs again
      };
    }
  }, [timer]);

  const handleType = (count) => {
    // access word count number
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#E5E4E9] dark:bg-priBG">
      <code className="text-black dark:text-other2 block my-4 text-[11px] md:text-[14px]">
        <span className="text-other1 mr-2">{'<loading>'}</span>
        <span>
          <Typewriter
            words={[
              'Please wait...',
              'Setting up',
              'Done!!!',
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={500}
            onLoopDone={handleDone}
            onType={handleType}
            stop={1}
            
          />
        </span>
        <span className="text-other1 ml-2">{'</loading>'}</span>
      </code>
      <div className="bg-[black] w-80 h-1 mt-6 rounded-md">
        <div className="bg-other1 h-full rounded-md" style={{ width: `${timer}%` }}></div>
      </div>
      <p className='text-black dark:text-other2'>{timer}%</p>
    </div>
  );
};

export default Loader;
