import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  text-align: center;
  .icon {
    align-self: flex-end;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: var(--whiteFixed);
    padding: 2rem;
    border-radius: 5px;
    button {
      padding: 5px;
    }
  }
`;
