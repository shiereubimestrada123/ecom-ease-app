import { Fragment, useState, useEffect } from 'react';
import { useAppSelector } from '@hooks';
import { Tab } from '@headlessui/react';
import { Product } from '@types';
import { categoriesDict } from '@constants';

export function ProductLists() {
  const { categories } = useAppSelector((state) => state.category);
  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const defaultCategory = 'All';
  const allCategories = [defaultCategory, ...categories];

  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultCategory);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleTabClick = (category: string) => {
    setSelectedCategory(category);

    if (category === defaultCategory) {
      setFilteredProducts(products);
    } else {
      const filteredProduct = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredProduct);
    }
  };

  return (
    <div className='gap-20 px-2 py-2 md:flex md:px-20 md:py-5'>
      <Tab.Group>
        <Tab.List>
          <div className='flex flex-col'>
            {allCategories.map((category: string) => (
              <Tab key={category} as={Fragment}>
                {({ selected }) => (
                  <button
                    onClick={() => handleTabClick(category)}
                    className={
                      selected
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-black'
                    }
                  >
                    {categoriesDict[category]}
                  </button>
                )}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels>
          <div className='flex justify-between gap-8'>
            {allCategories.map((category) => (
              <Tab.Panel key={category}>
                <div className='flex flex-wrap h-full gap-10 justify-evenly'>
                  {filteredProducts
                    .filter((product: Product) =>
                      category === defaultCategory
                        ? true
                        : product.category === category
                    )
                    .map((product: Product) => (
                      <div
                        key={product.id}
                        className='flex flex-col w-full bg-white rounded-lg shadow-md lg:max-w-sm'
                      >
                        <img
                          className='object-cover w-full h-48 rounded-lg'
                          src={product.image}
                          alt='image'
                        />

                        <div className='flex flex-col justify-between h-full p-4'>
                          <h4 className='text-xl font-semibold tracking-tight text-blue-600'>
                            {product.title}
                          </h4>
                          <p className='mb-2 overflow-hidden leading-normal whitespace-break-spaces overflow-ellipsis'>
                            {product.description}
                          </p>
                          <div className='flex items-center justify-between px-4 py-2'>
                            <p className='mb-2 leading-normal'>{`$${product.price}`}</p>
                            <button className='p-2 text-sm text-blue-100 bg-blue-500 rounded shadow'>
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab.Panel>
            ))}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
