import { NavLink } from 'react-router-dom';
import { useBoolean, useAppDispatch } from '@hooks';
import { logoutUser } from '@store';

import { useAppSelector } from '@hooks';

import { LoginModal } from '.';

import {
  AiFillPhone,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineClose,
} from 'react-icons/ai';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

import { cn } from '@utils';

export function NavigationBar() {
  const dispatch = useAppDispatch();

  const token = useAppSelector(({ user }) => user.token);

  // BiLogIn
  const {
    value: isLoginDialogOpen,
    toggle: toggleLoginDialog,
    off: closeLoginDialog,
  } = useBoolean(false);

  // hamburger icon
  const {
    value: isHamburgerOpen,
    toggle: toggleHamburger,
    off: isHamburgerClose,
  } = useBoolean(false);

  const linkStyle = cn(
    'flex md:items-center md:flex-row flex-col gap-2 md:pb-0 pb-6 md:gap-10 absolute md:static md:z-auto z-[30] left-0 md:w-auto w-full bg-white transition-all duration-500 ease-in'
  );

  const navLinks = ['home', 'about', 'shop', 'contact'];

  const handleOutLineUser = () => {
    toggleLoginDialog();
    toggleHamburger();
  };

  const handleLogout = () => {
    dispatch(logoutUser());

    isHamburgerClose();
  };

  return (
    <nav className='shadow-md'>
      <div className='md:flex justify-between bg-[#212934] min-h-[40px] hidden text-[#cfd6e1] md:px-20'>
        <div className='flex items-center gap-1 md:gap-2'>
          <BsFillEnvelopeFill />
          <p>info@company.com </p>
          <AiFillPhone />
          <p>010-020-0340</p>
        </div>
        <div className='flex items-center gap-1 md:gap-2'>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
      </div>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-20 px-7 min-h-[90px] text-xl'>
        <p className='text-[#59ab6e] text-3xl font-medium'>EcomEase</p>

        <div
          onClick={toggleHamburger}
          className='absolute text-3xl cursor-pointer md:hidden right-8 top-6'
        >
          {isHamburgerOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={cn(
            linkStyle,
            isHamburgerOpen ? 'top-20' : 'top-[-490px]',
            'text-[#212934]'
          )}
        >
          {navLinks.map((link) => {
            const linkCapitalize = link[0].toUpperCase() + link.slice(1);

            return (
              <li
                key={link}
                className={cn(
                  'p-2 md:hover:text-[#59ab6e] hover:text-white md:hover:bg-white hover:bg-[#59ab6e] cursor-pointer'
                )}
              >
                <NavLink
                  onClick={toggleHamburger}
                  to={link === 'home' ? '/' : `/${link}`}
                  className={({ isActive }) =>
                    isActive ? 'md:text-[#59ab6e] block' : 'block'
                  }
                >
                  {linkCapitalize}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul
          className={cn(
            linkStyle,
            isHamburgerOpen ? 'top-56' : 'top-[-490px]',
            'text-[#212934]'
          )}
        >
          <li className='p-2 md:hover:text-[#59ab6e] hover:text-white md:hover:bg-white hover:bg-[#59ab6e] cursor-pointer'>
            <AiOutlineSearch />
          </li>
          <li className='p-2 md:hover:text-[#59ab6e] hover:text-white md:hover:bg-white hover:bg-[#59ab6e] cursor-pointer'>
            <AiOutlineShoppingCart />
          </li>
          <li className='p-2 md:hover:text-[#59ab6e] hover:text-white md:hover:bg-white hover:bg-[#59ab6e] cursor-pointer'>
            {token ? (
              <BiLogOut onClick={handleLogout} />
            ) : (
              <BiLogIn onClick={handleOutLineUser} />
            )}
          </li>
        </ul>
      </div>

      {isLoginDialogOpen && (
        <LoginModal
          closeLoginDialog={closeLoginDialog}
          isLoginDialogOpen={isLoginDialogOpen}
        />
      )}
    </nav>
  );
}
