import { NavigationBar, Footer } from '@features';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}
