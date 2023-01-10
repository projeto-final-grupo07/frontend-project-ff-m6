import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { AiOutlineClose } from 'react-icons/ai';
import { StyledTitle } from '../../../styles/typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '100%', sm: '70%', md: '50%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
  '& .content-box': {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    maxWidth: '520px',
    margin: '50px auto',
    background: '#ffffff',
    borderRadius: '8px',
    padding: '15px',
  },

  '& .moda-header': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px',
  },

  '& .Close': {
    margin: '0 auto',
    marginTop: '-30px',
    padding: '0.8rem',
    width: '30%',
  },
};

export interface ICreateModalProps {
  nameModal?: string;
  children: React.ReactNode;
  altName?: string;
  src: string;
}
function ImgModal({ children, nameModal, altName, src }: ICreateModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img alt={altName} src={src} onClick={() => setOpen(!open)} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        disableScrollLock={true}
      >
        <Box sx={style}>
          <div className='moda-header'>
            <StyledTitle fontSize='Heading-5-500' tag='h2'>
              {nameModal}
            </StyledTitle>
            <button onClick={() => setOpen(!open)}>
              <AiOutlineClose />
            </button>
          </div>
          {children}
        </Box>
      </Modal>
    </>
  );
}

export default ImgModal;
