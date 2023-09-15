import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';
import { cn } from '@utils';

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const test = cn(
    'flex md:items-center md:flex-row flex-col gap-2 md:pb-0 pb-6 md:gap-10 absolute md:static md:z-auto z-[30] left-0 md:w-auto w-full bg-white transition-all duration-500 ease-in'
  );

  const navLinks = ['Home', 'About', 'Shop', 'Contact'];

  const navIcons = [
    <AiOutlineSearch />,
    <AiOutlineShoppingCart />,
    <AiOutlineUser />,
  ];

  return (
    <nav>
      <div className='md:flex justify-between bg-[#212934] min-h-[40px] hidden text-[#cfd6e1] md:px-20'>
        <div className='flex items-center md:gap-2 gap-1'>
          <BsFillEnvelopeFill />
          <p>info@company.com </p>
          <AiFillPhone />
          <p>010-020-0340</p>
        </div>
        <div className='flex items-center md:gap-2 gap-1'>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
      </div>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-20 px-7 min-h-[90px] text-xl'>
        <p className='text-[#59ab6e] text-3xl font-medium'>ecomlogo</p>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-3xl absolute right-8 top-6 cursor-pointer'
        >
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={cn(
            test,
            isOpen ? 'top-20' : 'top-[-490px]',
            'text-[#212934]'
          )}
        >
          {navLinks.map((link) => (
            <li key={link} className='p-2 hover:bg-[#59ab6e]'>
              {link}
            </li>
          ))}
        </ul>

        <ul
          className={cn(
            test,
            isOpen ? 'top-56' : 'top-[-490px]',
            'text-[#212934]'
          )}
        >
          {navIcons.map((icon, i) => (
            <li key={i} className='p-2 hover:bg-[#59ab6e]'>
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
