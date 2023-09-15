import { CiDeliveryTruck } from 'react-icons/ci';
import { AiOutlinePercentage, AiOutlineCustomerService } from 'react-icons/ai';

export function Services() {
  return (
    <div className='flex flex-col justify-center px-10 py-20 md:px-40'>
      <div className='text-center'>
        <p className='mb-5 text-5xl font-extralight'>Our Services</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </p>

        <div className='flex items-center gap-4 pt-20 justify-evenly'>
          <div className='flex justify-center items-center flex-col h-56 hover:bg-[#59ab6e] text-[#59ab6e] hover:text-white shadow-2xl md:w-80 w-24 p-4 fill-blue-500'>
            <div className='text-3xl md:text-9xl'>
              <CiDeliveryTruck />
            </div>
            <p>Delivery Services</p>
          </div>

          <div className='flex justify-center items-center flex-col h-56 hover:bg-[#59ab6e] text-[#59ab6e] hover:text-white shadow-2xl md:w-80 w-24 p-4 fill-blue-500'>
            <div className='text-3xl md:text-9xl'>
              <AiOutlinePercentage />
            </div>
            <p>Promotion</p>
          </div>

          <div className='flex justify-center items-center flex-col h-56 hover:bg-[#59ab6e] text-[#59ab6e] hover:text-white shadow-2xl md:w-80 w-24 p-4 fill-blue-500'>
            <div className='text-3xl md:text-9xl'>
              <AiOutlineCustomerService />
            </div>
            <p>24 Hours Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
