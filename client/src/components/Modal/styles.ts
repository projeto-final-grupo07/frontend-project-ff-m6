import styled from 'styled-components';

export const StyledCreateModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background-color: rgb(0, 0, 0, 0.5);

  .content-box {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 520px;
    margin: 50px auto;
    background: #ffffff;
    border-radius: 8px;
    padding: 15px;
  }

  .moda-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .Close {
    margin: 0 auto;
    margin-top: -30px;
    padding: 0.8rem;
    width: 30%;

    @media (max-width: 600px) {
      margin: 0;
      margin-top: -30px;
      width: 40%;
    }
  }
`;
