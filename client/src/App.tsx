import { useEffect } from 'react';
import { NavigationBar, Footer } from '@features';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '@hooks';
import { fetchAllUsers } from '@store';

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}
