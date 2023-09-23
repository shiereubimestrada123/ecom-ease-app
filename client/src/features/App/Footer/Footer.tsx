import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

export function Footer() {
  return (
    <>
      <div className='md:flex justify-evenly gap-2 bg-[#212934] text-[#cfd6e1] py-14 md:px-40 px-2'>
        <div className='flex flex-col gap-4 mb-10'>
          <h2 className='border-b pb-4 text-[#59ab6e] font-medium text-3xl'>
            Ecom Ease Shop
          </h2>
          <p className='flex items-center gap-1'>
            <BiLocationPlus />
            <span>123 Consectetur at ligula 10660</span>
          </p>
          <p className='flex items-center gap-1'>
            <AiOutlinePhone />
            <span>010-020-0340</span>
          </p>
          <p className='flex items-center gap-1'>
            <AiOutlineMail />
            <span>info@company.com</span>
          </p>
        </div>
        <div className='flex flex-col gap-4 mb-10'>
          <h2 className='pb-4 text-3xl font-medium border-b'>Products</h2>
          <p>Luxury</p>
          <p>Sport Wear</p>
          <p>Men's Shoes</p>
          <p>Women's Shoes</p>
          <p>Popular Dress</p>
          <p>Gym Accessories</p>
          <p>Sport Shoes</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='pb-4 text-3xl font-medium border-b'>Further Info</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Shop Locations</p>
          <p>FAQs</p>
          <p>Contact</p>
        </div>
      </div>

      <div className='bg-[#1d242d] text-[#cfd6e1]'>
        <p className='py-4 text-center'>Copyright © 2023 Company Name</p>
      </div>
    </>
  );
}
