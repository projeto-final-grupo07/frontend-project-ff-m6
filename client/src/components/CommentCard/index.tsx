import { StyledBox, StyledDivGap } from '../../pages/vehicleDetail/style';
import CardProfile from '../CardProfile';
import { StyledTitle } from '../../styles/typography';
import { DefinedArraySchema } from 'yup/lib/array';


interface ICommentCard {
  name: string;
  comment: string;
  daysOfComment: number;
}


const CommentCard = ({ name, comment, daysOfComment }: ICommentCard) => {
  return (
    <StyledBox paddingC='0'>
      <StyledDivGap row center marginC='0'>
        <CardProfile name={name} />
        <StyledTitle tag='p' fontSize='body-2-400' fontColor='var(--grey3)'>
          {`há ${daysOfComment} dias`}
        </StyledTitle>
      </StyledDivGap>
      <StyledTitle tag='p' fontSize='body-2-400' fontColor='var(--grey2)'>
        {comment}
      </StyledTitle>
    </StyledBox>
  );
};

export default CommentCard;
