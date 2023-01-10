import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import GlobalStyle from './styles/globalStyle';
import Providers from './contexts/Providers';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import StyledBackdrop from './components/Backdrop';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Providers>
      <RouterProvider router={router} />
      <ToastContainer />
      <StyledBackdrop />
    </Providers>
  </React.StrictMode>,
);
