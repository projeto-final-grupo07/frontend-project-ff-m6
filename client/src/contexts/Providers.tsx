import { CommentProviders } from './CommentContext/CommentContext';
import { ModalOpenContext, ModalOpenProviders } from './ModalOpenContext/ModalOpenContext';
import { UserProviders } from './UserContext/UserContext';

interface IDefaultProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IDefaultProps) => {
  return (
    <UserProviders>
      <ModalOpenProviders>
        <CommentProviders>{children}</CommentProviders>
      </ModalOpenProviders>
    </UserProviders>
  );
};
export default Providers;
