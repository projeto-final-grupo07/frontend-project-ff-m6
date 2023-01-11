import styled from 'styled-components';

export const StyledFormEditComment = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 10px;
`;

export const StyledEditComment = styled.textarea`
  width: 100%;
  min-height: 128px;

  padding: 20px 28px 0px 28px;

  border: 1.5px solid var(--grey7);

  overflow-y: hidden;
  resize: none;
`;

export const StyledTitleModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
