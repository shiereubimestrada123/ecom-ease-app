import {
  NavigationBar,
  CustomCarousel,
  Categories,
  Products,
  Footer,
} from '@features';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      <NavigationBar />
      <CustomCarousel />
      <Categories />
      <Products />
      <Footer />
      <Outlet />
    </>
  );
}
