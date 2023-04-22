import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
function MainTop() {


  const handleType = (count) => {
    // access word count number
  }

  const handleDone = () => {
    // console.log(`Done after 5 loops!`)
  }

  return (
    <div className="bg2 p-16 relative">
      <div className="content">
        <h1 className="text-4xl text-white font-bold">
          Discover my Amazing <br></br>Art Space!
        </h1>
        <code className="block my-4">
          <span className="text-other1 mr-2">{'<code>'}</span><span>
          <Typewriter
            words={['I build web interface', 'I build ios and andriod app', 'I create responsive web app', 'I offer mentorship and trainings']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
            </span><span className="text-other1 ml-2">{'<code>'}</span>
        </code>
        <button className="py-3 px-8 text-black bg-other1 text-sm">
          Explore Now
        </button>
      </div>
      <Image
        src={'/skillImages/mainf.png'}
        alt=""
        // fill
        height={420}
        width={420}
        className="absolute right-0 -top-10"
      />
    </div>
  );
}

export default MainTop;