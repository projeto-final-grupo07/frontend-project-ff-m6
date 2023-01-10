import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';

const StyledBackdrop = () => {
  const { globalLoading } = useContext(UserContext);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={globalLoading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  );
};

export default StyledBackdrop;
