export function Categories() {
  return (
    <div className='py-20 md:px-40 px-10 flex flex-col justify-center'>
      <div className='text-center'>
        <p className='text-5xl font-extralight mb-5'>Categories of the Month</p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>

        <div className='flex justify-evenly pt-20'>
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

      {/* <div>
        <div className='h-20 w-20 border-slate-950 rounded-full' />
        <p>asdfsad</p>
      </div> */}
    </div>
  );
}
