import { StyledBox, StyledDivGap } from '../../pages/vehicleDetail/style';
import CardProfile from '../CardProfile';
import { StyledTitle } from '../../styles/typography';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { StyledDiv } from './style';
import { CommentContext } from '../../contexts/CommentContext/CommentContext';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';

interface ICommentCard {
  name: string;
  comment: string;
  daysOfComment: number;
  commentId: string;
  userId: string;
}

const CommentCard = ({ name, comment, daysOfComment, commentId, userId }: ICommentCard) => {
  const { setCommentIdClicked, setCommentTextClicked, setOpen, setOpenModalDelete } =
    useContext(CommentContext);

  const { userData } = useContext(UserContext);

  const editFunction = () => {
    setCommentTextClicked(comment);
    setCommentIdClicked(commentId);
    setOpen(true);
  };

  const deleteFunction = () => {
    setCommentIdClicked(commentId);
    setOpenModalDelete(true);
  };

  return (
    <StyledBox paddingC='0'>
      <StyledDivGap row center marginC='0'>
        <CardProfile name={name} userId={userId} />
        <StyledTitle tag='p' fontSize='body-2-400' fontColor='var(--grey3)'>
          {`há ${daysOfComment} dias`}
        </StyledTitle>
      </StyledDivGap>
      <StyledDiv>
        <StyledTitle tag='p' fontSize='body-2-400' fontColor='var(--grey2)'>
          {comment}
        </StyledTitle>
        {userData?.id === userId ? (
          <div>
            <button type='submit' onClick={editFunction}>
              <FaEdit />
            </button>
            <button onClick={deleteFunction}>
              <FaTrash />
            </button>
          </div>
        ) : (
          <></>
        )}
      </StyledDiv>
    </StyledBox>
  );
};

export default CommentCard;
