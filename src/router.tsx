import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { App } from '@App';
import { HomePage, AboutPage } from '@pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
    </Route>
  )
);
