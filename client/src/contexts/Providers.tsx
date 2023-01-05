import { UserProviders } from './UserContext/UserContext';

interface IDefaultProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IDefaultProps) => {
  return <UserProviders>{children}</UserProviders>;
};
export default Providers;
