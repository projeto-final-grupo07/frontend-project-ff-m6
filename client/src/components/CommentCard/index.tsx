import React from 'react';
import { StyledBox, StyledDivGap } from '../../pages/vehicleDetail/style';
import CardProfile from '../CardProfile';
import { StyledTitle } from '../../styles/typography';

const CommentCard = () => {
  return (
    <StyledBox paddingC='0'>
      <StyledDivGap row center marginC='0'>
        <CardProfile name='roinaldo' />
        <StyledTitle tag='p' fontSize='body-2-400' fontColor='var(--grey3)'>
          há x dias
        </StyledTitle>
      </StyledDivGap>
      <StyledTitle tag='p' fontSize='body-2-400' fontColor='var(--grey2)'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </StyledTitle>
    </StyledBox>
  );
};

export default CommentCard;
