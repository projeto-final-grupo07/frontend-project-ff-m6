import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  margin: 100px auto;
  padding: 10px;
  justify-content: center;

  border: 1px solid black;
  border-radius: 15px;
  background-color: #adb5bd;
  width: 300px;

  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  span {
    color: red;
  }

  .NotFound {
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;
