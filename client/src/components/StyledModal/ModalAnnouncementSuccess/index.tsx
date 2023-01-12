import { Box, Modal } from '@mui/material';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalOpenContext } from '../../../contexts/ModalOpenContext/ModalOpenContext';
import { StyledTitle } from '../../../styles/typography';
import { ContainerModal } from './style';

const style = {
  position: 'absolute',
  top: '22%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  bgcolor: 'background.paper',
  boxShadow: 24,
  height: 229,
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  textAlign: 'center',
  borderRadius: '5px',
};

const ModalAnnouncementSuccess = () => {
  const { openModalAnnouncementSuccess, setOpenModalAnnouncementSuccess } =
    useContext(ModalOpenContext);

  return (
    <div>
      <Modal
        open={openModalAnnouncementSuccess}
        onClose={() => setOpenModalAnnouncementSuccess(false)}
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
              <button onClick={() => setOpenModalAnnouncementSuccess(false)}>
                <AiOutlineClose className='x' />
              </button>
            </div>
            <StyledTitle tag='p' fontSize='button-big-text'>
              Seu anúncio foi criado com sucesso!
            </StyledTitle>
            <StyledTitle className='describe' tag='h5' fontSize='body-1-400'>
              Agora você poderá ver seus negócios crescendo em grande escala
            </StyledTitle>
          </ContainerModal>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAnnouncementSuccess;
