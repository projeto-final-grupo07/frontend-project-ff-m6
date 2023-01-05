import { createContext } from 'react';

export const UserContext = createContext({} as any);

export const UserProviders = ({ children }: any) => {
  const home = 'Home';
  return <UserContext.Provider value={{ home }}>{children}</UserContext.Provider>;
};
