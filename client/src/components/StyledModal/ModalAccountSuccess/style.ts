import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 24px;
  div {
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  .describe {
    text-align: left;
    margin: 20px auto;
  }
`;
