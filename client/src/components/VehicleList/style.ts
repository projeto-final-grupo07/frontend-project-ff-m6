import styled from 'styled-components';

export const ThemeCarList = styled.div`
  display: flex;
  justify-content: flex-start;

  overflow-x: auto;

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
  padding: 10px 30px;

  .divCars {
    display: flex;
    align-items: center;

    flex-direction: row;

    width: 100vw;
    gap: 0px 40px;
  }
`;
