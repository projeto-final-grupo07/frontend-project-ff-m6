import { Box, Modal } from '@mui/material';
import { useContext } from 'react';
import { CommentContext } from '../../../contexts/CommentContext/CommentContext';
import { StyledButton } from '../../../styles/button';
import { StyledTitle } from '../../../styles/typography';
import { StyledTitleModal } from '../ModalEditComment/style';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  height: 150,
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  textAlign: 'center',
};

const ModalDeleteComment = () => {
  const { openModalDelete, setOpenModalDelete, deleteComment } = useContext(CommentContext);

  return (
    <div>
      <Modal
        open={openModalDelete}
        onClose={() => setOpenModalDelete(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        disableScrollLock={true}
      >
        <Box sx={style}>
          <StyledTitleModal>
            <StyledTitle fontSize='Heading-6-600' tag='h4'>
              Deseja realmente deletar seu comentário?
            </StyledTitle>
          </StyledTitleModal>
          <StyledButton onClick={deleteComment} type='submit' buttonStyle='alert' buttonSize='big'>
            Excluir comentário
          </StyledButton>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDeleteComment;
