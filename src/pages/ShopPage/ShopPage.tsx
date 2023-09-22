import { useEffect } from 'react';
import { useAppDispatch } from '@hooks';
import { Brands, ProductLists } from '@features';
import { fetchCategories, fetchProducts } from '@store';

export function ShopPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ProductLists />
      <Brands />
    </>
  );
}
