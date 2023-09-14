import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { App } from '@App';
import { AboutPage } from '@pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='about' element={<AboutPage />} />
    </Route>
  )
  // createRoutesFromElements(
  //   <Route>
  //     <Route index path='/' element={<App />} />
  //     <Route path='about' element={<AboutPage />} />
  //   </Route>
  // )
);
