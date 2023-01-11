import { CommentProviders } from './CommentContext/CommentContext';
import { UserProviders } from './UserContext/UserContext';

interface IDefaultProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IDefaultProps) => {
  return (
    <UserProviders>
      <CommentProviders>{children}</CommentProviders>
    </UserProviders>
  );
};
export default Providers;
