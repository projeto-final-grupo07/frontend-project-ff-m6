import { createContext, ReactNode, useEffect, useState } from 'react';
import { IDecodedToken } from '../../components/Navbar';
import api from '../../services';

interface IModalContext {
  openModalAccountSuccess: boolean;
  setOpenModalAccountSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  openModalAnnouncementSuccess: boolean;
  setOpenModalAnnouncementSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalProviderProps {
  children: ReactNode;
}

export const ModalOpenContext = createContext({} as IModalContext);

export const ModalOpenProviders = ({ children }: IModalProviderProps) => {
  const [openModalAccountSuccess, setOpenModalAccountSuccess] = useState(false);
  const [openModalAnnouncementSuccess, setOpenModalAnnouncementSuccess] = useState(true);

  return (
    <ModalOpenContext.Provider
      value={{
        openModalAccountSuccess,
        setOpenModalAccountSuccess,
        openModalAnnouncementSuccess,
        setOpenModalAnnouncementSuccess,
      }}
    >
      {children}
    </ModalOpenContext.Provider>
  );
};
