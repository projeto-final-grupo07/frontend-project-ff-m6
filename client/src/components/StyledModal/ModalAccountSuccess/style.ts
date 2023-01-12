import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 24px;
  div {
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    button {
      width: 18px;
      height: 18px;
      .x {
        width: 100%;
        height: 100%;
        color: var(--grey4);
      }
    }
  }
  .describe {
    text-align: left;
    margin: 30px auto;
  }
`;
