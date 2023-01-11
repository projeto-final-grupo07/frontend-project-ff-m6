import { StyledBox, StyledDivGap } from '../../pages/vehicleDetail/style';
import CardProfile from '../CardProfile';
import { StyledTitle } from '../../styles/typography';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { StyledDiv } from './style';
import { CommentContext } from '../../contexts/CommentContext/CommentContext';
import { useContext } from 'react';

interface ICommentCard {
  name: string;
  comment: string;
  daysOfComment: number;
  commentId: string;
}

const CommentCard = ({ name, comment, daysOfComment, commentId }: ICommentCard) => {
  const {
    commentIdClicked,
    editComment,
    setCommentIdClicked,
    setCommentTextClicked,
    commentTextClicked,
    setOpen,
  } = useContext(CommentContext);

  const editFunction = () => {
    setCommentTextClicked(comment);
    setCommentIdClicked(commentId);
    setOpen(true);
  };

  return (
    <StyledBox paddingC='0'>
      <StyledDivGap row center marginC='0'>
        <CardProfile name={name} />
        <StyledTitle tag='p' fontSize='body-2-400' fontColor='var(--grey3)'>
          {`há ${daysOfComment} dias`}
        </StyledTitle>
      </StyledDivGap>
      <StyledDiv>
        <StyledTitle tag='p' fontSize='body-2-400' fontColor='var(--grey2)'>
          {comment}
        </StyledTitle>
        <div>
          <button type='submit' onClick={editFunction}>
            <FaEdit />
          </button>
          <FaTrash />
        </div>
      </StyledDiv>
    </StyledBox>
  );
};

export default CommentCard;
