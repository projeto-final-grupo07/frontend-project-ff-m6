import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { AiOutlineClose } from 'react-icons/ai';
import { iStyledButtonProps, StyledButton } from '../../styles/button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { sm: '90%', md: '30%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
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
  className?: string;
  children: React.ReactNode;
  nameModal: string;
  nameButtonOpen: string;
  propsButton: iStyledButtonProps;
  closeButton?: iStyledButtonProps;
  closeModal?: boolean;
}
function StyledModal({
  children,
  nameModal,
  nameButtonOpen,
  propsButton,
  closeButton,
  closeModal,
}: ICreateModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  if (closeModal) {
    // console.log(closeModal);
    if (open) {
      setOpen(false);
    }
  }

  return (
    <div>
      <StyledButton
        buttonStyle={propsButton.buttonStyle}
        buttonSize={propsButton.buttonSize}
        color={propsButton.color}
        onClick={() => setOpen(!open)}
      >
        {nameButtonOpen}
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='moda-header'>
            <p>{nameModal}</p>
            <button onClick={() => setOpen(!open)}>
              <AiOutlineClose />
            </button>
          </div>
          {children}
          {closeButton && (
            <StyledButton
              buttonStyle={closeButton.buttonStyle}
              buttonSize={closeButton.buttonSize}
              color={closeButton.color}
              onClick={() => setOpen(!open)}
              className='Close'
            >
              Cancelar
            </StyledButton>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default StyledModal;
