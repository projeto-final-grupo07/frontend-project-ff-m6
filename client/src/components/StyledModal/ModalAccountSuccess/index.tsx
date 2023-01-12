import { Box, Modal } from '@mui/material';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ModalOpenContext } from '../../../contexts/ModalOpenContext/ModalOpenContext';
import { StyledButton } from '../../../styles/button';
import { StyledTitle } from '../../../styles/typography';
import { ContainerModal } from './style';

const style = {
  position: 'absolute',
  top: '26%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  bgcolor: 'background.paper',
  boxShadow: 24,
  height: 287,
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  textAlign: 'center',
  borderRadius: '5px',
};

const ModalAccountSuccess = () => {
  const { openModalAccountSuccess, setOpenModalAccountSuccess } = useContext(ModalOpenContext);

  return (
    <div>
      <Modal
        open={openModalAccountSuccess}
        onClose={() => setOpenModalAccountSuccess(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        disableScrollLock={true}
      >
        <Box className='boxModal' sx={style}>
          <ContainerModal>
            <div>
              <StyledTitle fontSize='button-big-text' tag='p'>
                Sucesso!
              </StyledTitle>
              <button onClick={() => setOpenModalAccountSuccess(false)}>
                <AiOutlineClose />
              </button>
            </div>
            <StyledTitle tag='p' fontSize='button-big-text'>
              Sua conta foi criada com sucesso!
            </StyledTitle>
            <StyledTitle className='describe' tag='h5' fontSize='body-1-400'>
              Agora você poderá ver seus negócios crescendo em grande escala
            </StyledTitle>
            <Link to='/login'>
              <StyledButton buttonStyle='brand' buttonSize='medium'>
                Ir para o login
              </StyledButton>
            </Link>
          </ContainerModal>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAccountSuccess;
