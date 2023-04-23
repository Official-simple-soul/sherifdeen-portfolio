import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { skill } from '../data/data';



function Skill() {
  const [showId, setShowId] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowId((prevShowId) => {
        // Increment the showId by 1, or reset to 1 if it reaches the end of the skill array
        return prevShowId === skill.length ? 1 : prevShowId + 1;
      });
    }, 5000);

    // Clean up the interval on unmount or when showId changes
    return () => {
      clearInterval(intervalId);
    };
  }, [showId]);

  let IconComp = skill[showId - 1].icon;
  return (
    <div className="relative flex justify-center items-center border-b pt-4 pb-8 border-gray-500">
      <div
        className="flex justify-center items-center circle w-[7rem] h-[7rem] border-8 border-dashed rounded-full transition-all ease-in-out duration-500"
        style={{ borderColor: skill[showId - 1].color }}
      ></div>
      {skill.map((skill) => (
        <SkillCard key={skill.id} skill={skill} showId={showId} IconComp={IconComp}/>
      ))}
    </div>
  );
}

export default Skill;


const SkillCard = ({skill, showId, IconComp}) => {
  return <>
  <div
    key={skill.id}
    className={`${
      skill.id === showId ? 'scale-100' : 'scale-[92%] opacity-0'
    } transition-all ease-in-out duration-1000 absolute flex justify-center items-center shadow`}
  >
    <IconComp
      className={`${
        skill.id === showId ? 'scale-100' : 'scale-[92%] opacity-0'
      } transition-all ease-in-out duration-500 absolute shadow text-[50px]`}
      style={{ color: skill.color }}
    />
  </div>
  <h1
    className={`${
      skill.id === showId ? 'flex' : 'hidden'
    } absolute bottom-0 text-[14px]`}
  >
    {skill.skill}
  </h1>
</>
}