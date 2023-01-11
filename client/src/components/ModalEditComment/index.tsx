import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import api from '../../services';
import { StyledEditComment, StyledFormEditComment, StyledTitleModal } from './style';
import { StyledButton } from '../../styles/button';
import { notifyError, notifySuccess } from '../../helpers/toasts';
import { useContext } from 'react';
import { CommentContext } from '../../contexts/CommentContext/CommentContext';
import { StyledTitle } from '../../styles/typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  height: 230,
  display: 'flex',
  gap: 1,
  flexDirection: 'column',
};

interface IModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: string;
  commentTextClicked: string;
  setCommentTextClicked: React.Dispatch<React.SetStateAction<string>>;
}

const ModalEditComment = () => {
  const {
    commentIdClicked,
    editComment,
    open,
    setCommentIdClicked,
    setCommentTextClicked,
    commentTextClicked,
    setOpen,
  } = useContext(CommentContext);

  const schema = yup.object().shape({
    message: yup.string().required('Required field!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentTextClicked(event.target.value);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <StyledTitleModal >
            <StyledTitle fontSize='body-2-500' tag='h5'>
              EDITE SEU COMENTÁRIO
            </StyledTitle>
          </StyledTitleModal>
          <StyledFormEditComment onSubmit={handleSubmit(editComment)} {...register('message')}>
            <StyledEditComment
              onChange={(evt) => handleChange(evt)}
              value={commentTextClicked}
            ></StyledEditComment>
            <StyledButton type='submit' buttonStyle='brand' buttonSize='medium'>
              Editar comentário
            </StyledButton>
          </StyledFormEditComment>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalEditComment;
