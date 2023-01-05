import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import GlobalStyle from './styles/globalStyle';
import Providers from './contexts/Providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>,
);
