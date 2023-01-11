import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;
  margin: 15vh auto;
  padding: 20px;

  border-radius: 5px;
  background-color: var(--grey5);
  max-width: 300px;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    color: var(--alert1);
    font-weight: bold;
  }

  button {
    width: 100%;
    padding: 20px;
  }
  .btn2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
      width: fit-content;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      width: 100%;
    }
  }
`;
