import Link from 'next/link';
import React from 'react';

const nav = [
  { nav: 'About', link: '#about' },
  { nav: 'Skill', link: '#skill' },
  { nav: 'Project', link: '#project' },
  { nav: 'Contact', link: '#contact' },
];

function Nav() {
  return (
    <nav>
      <ul className="space-y-14">
        {nav.map((nav) => (
          <li key={nav.nav} className='px-10 py-2 border text-center cursor-pointer border-white rounded-md shadow shadow-white hover:shadow-black hover:border-0 hover:bg-[#83C9E4] hover:text-black hover:scale-150 transition-all ease-in-out duration-500'>
            <Link href={nav.link}>{nav.nav}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
