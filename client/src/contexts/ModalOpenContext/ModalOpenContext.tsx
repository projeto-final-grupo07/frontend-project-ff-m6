import { createContext, ReactNode, useState } from 'react';

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
  const [openModalAnnouncementSuccess, setOpenModalAnnouncementSuccess] = useState(false);

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
