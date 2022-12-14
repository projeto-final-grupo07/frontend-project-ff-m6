import styled from 'styled-components';

export const ProductCardAuctionContainer = styled.div`
  min-width: 735px;
  max-width: 735px;

  @media (max-width: 800px) {
    min-width: 328px;
  }
`;

export const ThemeProductCard = styled.div`
  color: var(--whiteFixed);

  transition-property: background-color;
  transition-duration: 0.5s;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 10px;
  height: 330px;
  position: relative;
  padding: 20px 30px;

  a {
    color: var(--whiteFixed);
  }

  .backGround {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 5px 5px 0px 0px;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  .description {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  .image {
    position: absolute;
    z-index: -2;
    align-self: center;
    display: flex;
  }
`;

export const ThemeDivInfoVehicle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 12px;
  }

  .km {
    color: var(--brand1);
    padding: 4px 8px;
    border-radius: 5px;
    background-color: var(--brand4);
  }

  .year {
    color: var(--brand1);
    padding: 4px 8px;
    border-radius: 5px;
    background-color: var(--brand4);
  }
`;

export const TimeSection = styled.div`
  background: var(--whiteFixed);
  color: var(--grey0);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 123px;
  height: 36px;
  border-radius: 32px;
  gap: 10px;
  margin-bottom: 69px;
`;

export const FooterSection = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--brand1);
  color: var(--whiteFixed);

  border-radius: 0px 0px 5px 5px;
  height: 62px;
  padding: 0 36px;
  width: 100%;

  :hover {
    filter: brightness(0.9);
  }
`;
