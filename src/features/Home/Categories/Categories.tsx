import { useAppSelector } from '@hooks';
import { Button } from '@components';

export function Categories() {
  const { categories } = useAppSelector((state) => state.category);

  const categoryImages = [
    {
      category: 'electronics',
      path: './images/electronics.jpg',
    },
    {
      category: 'jewelery',
      path: './images/jewelry.jpg',
    },
    {
      category: "men's clothing",
      path: './images/mens.jpg',
    },
    {
      category: "women's clothing",
      path: './images/womens.jpg',
    },
  ];

  const mappedCategories = categories.map((category) => {
    const imageInfo = categoryImages.find((item) => item.category === category);

    return {
      category: category,
      path: imageInfo ? imageInfo.path : null,
    };
  });

  return (
    <div className='flex flex-col justify-center px-10 py-20 md:px-40'>
      <div className='text-center'>
        <p className='mb-5 text-5xl font-extralight'>Categories of the Month</p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>

        <ul className='flex flex-wrap items-center justify-center gap-4 pt-20'>
          {mappedCategories.map((c) => (
            <li
              key={c.category}
              className='flex flex-col items-center justify-center w-full md:w-auto'
            >
              <img
                className='md:h-[350px] md:w-[350px] h-[75px] w-[75px] bg-black rounded-full mb-6'
                src={c.path ?? undefined}
                alt={c.category}
              />

              <p>{c.category}</p>
              <Button
                type='button'
                text='Go Shop'
                className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
