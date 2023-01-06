import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 25px;

  background-color: var(--brand2);
  color: var(--grey10);
  width: 100%;
  padding: 160px;

  .title {
    max-width: 750px;
    text-align: center;
  }

  button {
    padding: 25px;
    width: 180px;
    background: none;
    border-color: var(--grey10);
    color: var(--grey10);
  }
  button:hover {
    background-color: var(--brand4);
    color: var(--grey1);
  }

  div {
    margin-top: 40px;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 700px) {
    padding: 80px 25px;
    h2 {
      font-size: 32px;
    }
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;

export const HomeContainer = styled.div`
  /* @media (max-width: 800px) {
    margin-left: 23px;
  } */

  display: flex;
  flex-direction: column;
  gap: 200px;
  padding: 100px 0 100px 60px;

  .header {
    background-color: var(--brand1);
    width: 100%;
    /* position: absolute; */
  }

  .vehicleCards {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-right: 60px;
  }

  @media (max-width: 700px) {
    padding: 100px 0 100px 10px;

    .vehicleCards {
      margin-right: 10px;
    }
  }
`;

export const AuctionSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 50px;
  margin-right: 60px;
  height: fit-content;

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

  .cards {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  @media (max-width: 700px) {
    margin-right: 10px;
  }
`;
