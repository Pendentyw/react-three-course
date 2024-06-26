import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState('toggle');
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 fixed bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt='logo'
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Alutka <span>| Very Alutka</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={` ${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
