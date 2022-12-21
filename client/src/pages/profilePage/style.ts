import styled from 'styled-components';

export const ProfileTop = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, var(--brand1) 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 0px;
    margin-bottom: 0px;

    gap: 24px;
  }

  .nameAuthor {
    font-size: 20px;
    font-weight: 600;
  }

  .profileTag {
    background-color: var(--brand4);
    color: var(--brand1);

    padding: 4px 8px;
    border-radius: 4px;
  }

  .containerProfileTop {
    display: flex;
    align-items: flex-start;
    background-color: var(--whiteFixed);

    width: 90%;
    padding: 40px 29px;
    gap: 10px;
    border-radius: 4px;

    section {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 10px;
    }
  }
`;
