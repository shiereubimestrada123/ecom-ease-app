export function Hero() {
  return (
    <>
      <div className='flex items-center justify-evenly gap-4 px-20 h-[700px] bg-[#59ab6e] text-white'>
        <div className='w-1/2'>
          <h1 className='mb-4 text-5xl font-medium'>About Us</h1>
          <p className='md:leading-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <img
          src='./images/about-hero.svg'
          alt='about hero'
          className='w-[400px]'
        />
      </div>
    </>
  );
}
