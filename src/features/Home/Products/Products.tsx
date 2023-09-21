import { useAppSelector } from '@hooks';

export function Products() {
  const { products } = useAppSelector((state) => state.product);

  return (
    <div className='py-20 md:px-40 px-10 flex flex-col justify-center bg-[#e9eef5]'>
      <div className='text-center'>
        <p className='mb-5 text-5xl font-extralight'>Featured Product</p>
        <p>
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>

        <div className='flex flex-wrap h-full gap-4 pt-20 justify-evenly'>
          {products.map(({ id, image, title, description, price }) => (
            <div
              key={id}
              className='flex flex-col w-full bg-white rounded-lg shadow-md lg:max-w-sm'
            >
              <img
                className='object-cover w-full h-48 rounded-lg'
                src={image}
                alt='image'
              />

              <div className='flex flex-col justify-between h-full p-4'>
                <h4 className='text-xl font-semibold tracking-tight text-blue-600'>
                  {title}
                </h4>
                <p className='mb-2 overflow-hidden leading-normal whitespace-break-spaces overflow-ellipsis'>
                  {description}
                </p>
                <p className='mb-2 leading-normal'>{price}</p>
                <div className='px-4 py-2'>
                  <button className='p-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
