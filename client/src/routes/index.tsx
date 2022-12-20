import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/dashBoard';
import { PageError } from '../pages/errorPage';
import { Home } from '../pages/homePage';
import { Login } from '../pages/loginPage';
import { Register } from '../pages/registerPage';
import { VehicleDetail } from '../pages/vehicleDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageError />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <PageError />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <PageError />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <PageError />,
  },
  {
    path: '/vehicle/:id',
    element: <VehicleDetail />,
    errorElement: <PageError />,
  },
]);
