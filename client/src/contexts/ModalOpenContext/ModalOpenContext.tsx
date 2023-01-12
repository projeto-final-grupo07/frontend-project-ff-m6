import { createContext, ReactNode, useEffect, useState } from 'react';
import { IDecodedToken } from '../../components/Navbar';
import api from '../../services';

interface IModalContext {
  openModalAccountSuccess: boolean;
  setOpenModalAccountSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalProviderProps {
  children: ReactNode;
}

export const ModalOpenContext = createContext({} as IModalContext);

export const ModalOpenProviders = ({ children }: IModalProviderProps) => {
  const [openModalAccountSuccess, setOpenModalAccountSuccess] = useState(false);

  return (
    <ModalOpenContext.Provider value={{ openModalAccountSuccess, setOpenModalAccountSuccess }}>
      {children}
    </ModalOpenContext.Provider>
  );
};
