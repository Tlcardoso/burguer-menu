import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MenuPage from '../pages/index';

const routes: RouteObject[] = [
  {
    path: '/menu/:id',
    element: <MenuPage />,
  },
];

export const routesList = createBrowserRouter(routes);
