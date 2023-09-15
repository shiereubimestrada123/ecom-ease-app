export function ProductLists() {
  return (
    <div className='px-2 py-2 md:px-20 md:py-5'>
      <div className='flex justify-between gap-4 text-[#212529]'>
        <div className='w-1/5'>
          <h1>Categories</h1>
          <ul>
            <li>Gender</li>
            <li>Sale</li>
            <li>Product</li>
          </ul>
        </div>

        <div className='w-4/5'>
          <ul className='items-center justify-between md:flex'>
            <div className='flex gap-4 mb-2 md:mb-0 md:gap-10'>
              <li>All</li>
              <li>Mens</li>
              <li>Womens</li>
            </div>

            <input type='text' className='border' />
          </ul>

          <div className='flex flex-wrap justify-between gap-8 mt-4'>
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
                  react tailwind css card with image It is a long established
                  fact that a reader will be distracted by the readable content.
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
                  react tailwind css card with image It is a long established
                  fact that a reader will be distracted by the readable content.
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
                  react tailwind css card with image It is a long established
                  fact that a reader will be distracted by the readable content.
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
                  react tailwind css card with image It is a long established
                  fact that a reader will be distracted by the readable content.
                </p>
                <button className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
