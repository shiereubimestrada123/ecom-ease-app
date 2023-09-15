export function Products() {
  return (
    <div className='py-20 md:px-40 px-10 flex flex-col justify-center bg-[#e9eef5]'>
      <div className='text-center'>
        <p className='text-5xl font-extralight mb-5'>Featured Product</p>
        <p>
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>

        <div className='flex justify-evenly pt-20 gap-4'>
          <div className='w-full rounded-lg shadow-md lg:max-w-sm'>
            <img
              className='object-cover w-full h-48'
              src='https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg'
              alt='image'
            />
            <div className='p-4'>
              <h4 className='text-xl font-semibold tracking-tight text-blue-600'>
                React Tailwind Card with Image
              </h4>
              <p className='mb-2 leading-normal'>
                react tailwind css card with image It is a long established fact
                that a reader will be distracted by the readable content.
              </p>
              <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                Read more
              </button>
            </div>
          </div>

          <div className='w-full rounded-lg shadow-md lg:max-w-sm'>
            <img
              className='object-cover w-full h-48'
              src='https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg'
              alt='image'
            />
            <div className='p-4'>
              <h4 className='text-xl font-semibold tracking-tight text-blue-600'>
                React Tailwind Card with Image
              </h4>
              <p className='mb-2 leading-normal'>
                react tailwind css card with image It is a long established fact
                that a reader will be distracted by the readable content.
              </p>
              <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                Read more
              </button>
            </div>
          </div>

          <div className='w-full rounded-lg shadow-md lg:max-w-sm'>
            <img
              className='object-cover w-full h-48'
              src='https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg'
              alt='image'
            />
            <div className='p-4'>
              <h4 className='text-xl font-semibold tracking-tight text-blue-600'>
                React Tailwind Card with Image
              </h4>
              <p className='mb-2 leading-normal'>
                react tailwind css card with image It is a long established fact
                that a reader will be distracted by the readable content.
              </p>
              <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
