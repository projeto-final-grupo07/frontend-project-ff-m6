import { createBrowserRouter } from 'react-router-dom';
import { ChangePassword } from '../pages/changePass';
import { PageError } from '../pages/errorPage';
import { Home } from '../pages/homePage';
import { Login } from '../pages/loginPage';
import { Profile } from '../pages/profilePage';
import { Recover } from '../pages/recoverPass';
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
    path: '/recoverPassword',
    element: <Recover />,
    errorElement: <PageError />,
  },
  {
    path: '/changePassword',
    element: <ChangePassword />,
    errorElement: <PageError />,
  },
  {
    path: '/profile/:userId',
    element: <Profile />,
    errorElement: <PageError />,
  },
  {
    path: '/vehicle/:id',
    element: <VehicleDetail />,
    errorElement: <PageError />,
  },
]);
