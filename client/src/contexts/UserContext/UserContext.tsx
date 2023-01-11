import { createContext, ReactNode, useEffect, useState } from 'react';
import { IDecodedToken } from '../../components/Navbar';
import jwt_decode from 'jwt-decode';
import api from '../../services';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birthDate: string;
  describe: string;
  typeAccount: boolean;
  is_active: boolean;
  passwordResetToken: any;
  passwordResetExpires: any;
  Address: IAddress;
  Vehicle: IVehicle[];
  Message: IMessage[];
}

export interface IAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  user_id: string;
}

export interface IVehicle {
  id: string;
  typeOffer: boolean;
  title: string;
  year: string;
  mileage: string;
  price: string;
  describe: string;
  typeVehicles: boolean;
  coverImg: string;
  isActive: boolean;
  user_id: string;
}

export interface IMessage {
  id: string;
  comment: string;
  createdAt: string;
  user_id: string;
  vehicle_id: string;
}

interface IUserContext {
  loadUser(): void;
  userData: IUser | undefined;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }: IUserProviderProps) => {
  const [userData, setUserData] = useState<IUser>();
  const [globalLoading, setGlobalLoading] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    if (token) {
      setToken(localStorage.getItem('token') || '');
    }
  }, []);

  const loadUser = () => {
    const decodedToken: IDecodedToken = jwt_decode(token);
    setGlobalLoading(true);
    api
      .get(`/user/${decodedToken.id}`)
      .then((resp) => {
        setUserData(resp.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setGlobalLoading(false));
  };

  return (
    <UserContext.Provider value={{ loadUser, userData, globalLoading, setGlobalLoading, token }}>
      {children}
    </UserContext.Provider>
  );
};
