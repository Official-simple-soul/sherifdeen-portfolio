/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { useGlobalContext } from '../context/context';
import Link from 'next/link';

function MainTop() {
  const { light } = useGlobalContext();

  const handleType = (count) => {
    // access word count number
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`)
  };

  return (
    <div className={`bg2 p-8 lg:p-16 relative`}>
      <div className="content text-center lg:text-start">
        <h1 className="text-4xl text-white font-bold">
          What's on Your Mind <br></br>Let's Bring it To Reality
        </h1>
        <code
          className={`${
            light && 'text-white'
          } block my-4 text-[12px] lg:text-[14px]`}
        >
          <span className="text-other1 mr-2">{'<code>'}</span>
          <span>
            <Typewriter
              words={[
                'I build web interface',
                'I build ios and andriod app',
                'I create responsive web app',
                'I offer mentorship & training',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
          <span className="text-other1 ml-2">{'<code>'}</span>
        </code>
        <Link href={'/projects'}>
          <button className="py-3 px-8 text-black bg-other1 text-sm">
            Explore Now
          </button>
        </Link>
      </div>
      <Image
        src={'/skillImages/mainf.png'}
        alt=""
        // fill
        height={420}
        width={420}
        className="hidden lg:block absolute right-0 -top-10"
      />
    </div>
  );
}

export default MainTop;
