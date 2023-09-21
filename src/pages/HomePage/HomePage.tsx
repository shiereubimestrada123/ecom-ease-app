import { useEffect } from 'react';
import { CustomCarousel, Categories, Products } from '@features';
import { useAppDispatch } from '@hooks';
import { fetchCategories, fetchProducts } from '@store';

export function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <CustomCarousel />
      <Categories />
      <Products />
    </>
  );
}
