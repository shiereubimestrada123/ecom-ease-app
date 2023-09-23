import { SimpleSlider } from '..';

export function Brands() {
  return (
    <div className='py-20 md:px-40 px-10 flex flex-col justify-center bg-[#e9eef5]'>
      <div className='text-center'>
        <p className='mb-5 text-5xl font-extralight'>Our Brands</p>
        <p className='mb-20'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </p>

        <SimpleSlider />
      </div>
    </div>
  );
}
