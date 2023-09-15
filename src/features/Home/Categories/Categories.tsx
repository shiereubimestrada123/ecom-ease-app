export function Categories() {
  return (
    <div className='flex flex-col justify-center px-10 py-20 md:px-40'>
      <div className='text-center'>
        <p className='mb-5 text-5xl font-extralight'>Categories of the Month</p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>

        <div className='flex pt-20 justify-evenly'>
          <div>
            <div className='h-[100px] w-[100px] bg-black rounded-full' />
            <p>Watches</p>
            <button>Go Shop</button>
          </div>
          <div>
            <div className='h-[100px] w-[100px] bg-black rounded-full' />
            <p>Shoes</p>
            <button>Go Shop</button>
          </div>
          <div>
            <div className='h-[100px] w-[100px] bg-black rounded-full' />
            <p>Accesories</p>
            <button>Go Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
}
