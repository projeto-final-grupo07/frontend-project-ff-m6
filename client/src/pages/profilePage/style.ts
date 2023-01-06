import styled from 'styled-components';

export const ProfileTop = styled.section`
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
    font-size: 130%;
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
    max-width: 1240px;
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

export const VehiclesSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  padding: 10px 30px;
  margin: 0px 0 100px;

  h5 {
    padding: 30px 10px;
  }

  ::-webkit-scrollbar {
    height: 30px;
  }
  ::-webkit-scrollbar-thumb {
    border: 10px solid var(--grey8);
    border-radius: 50px;
    background: var(--grey5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--grey4);
  }

  .vehicleCards {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`;
