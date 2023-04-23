import React from 'react';
import { skill } from '../data/data';

function SkillList() {
  return (
    <ul className='space-y-3 py-3 border-b border-gray-500'>
      {skill.map((skills) => {
        const { skill, percentage, icon, color } = skills;
        const IconIcon = icon
        return (
          <li key={skills.id}>
            <div className="flex justify-between items-center text-[14px]">
              <h6 className=''>{skill.toLowerCase()}</h6>
              <IconIcon style={{color: color}}/>
            </div>
            <div className="bg-[black] w-full h-1 mt-1">
                <div className="bg-other1 h-full" style={{width: `100%`}}></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default SkillList;
