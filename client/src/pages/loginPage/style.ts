import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  gap: 100px;
`;

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--grey10);
  margin: auto;
  margin-top: 50px;
  padding: 48px;
  border-radius: 5px;

  max-width: 412px;
  width: 90vw;

  button {
    padding: 24px;
    width: 100%;
  }

  .error {
    color: red;
    font-size: 12px;
    font-weight: 600;
  }
  .flexEnd {
    align-self: flex-end;
    color: var(--grey2);
  }
  .flexCenter {
    align-self: center;
  }

  .loading {
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
  }
`;
