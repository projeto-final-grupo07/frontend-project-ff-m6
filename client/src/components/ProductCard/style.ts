import styled from 'styled-components';

interface ColorRandomProps {
  color: string;
}

export const ThemeProductCard = styled.div`
  width: 312px;
  min-width: 312px;

  display: flex;
  flex-direction: column;

  padding: 10px;

  .divImage {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey7);
  }

  .image {
    margin: 1px 0;
    padding: 0 25px;
    border: 2px solid transparent;
  }
  .image:hover {
    border: 2px solid var(--brand1);
    cursor: pointer;
  }

  .nameAuthor {
    color: var(--grey2);
  }
  .productPrice {
    font-size: 16px;
    color: var(--grey1);
    font-family: 'Lexend', sans-serif;
  }
`;

export const ThemeTitleProductCard = styled.h3`
  font-family: 'Lexend', sans-serif;
  text-align: left;
`;

export const ThemeDivAuthor = styled.div<ColorRandomProps>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  .initial {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    background-color: var(--${({ color }) => color});

    padding: 16px 7.5px;
    margin-right: 8px;

    border-radius: 50%;

    color: var(--brand4);

    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const ThemeDivInfoVehicle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 500;
  }

  div .km {
    margin-right: 12px;
    color: var(--brand1);
    padding: 4px 8px;

    border-radius: 5px;

    background-color: var(--brand4);
  }

  div .year {
    color: var(--brand1);
    padding: 4px 8px;

    border-radius: 5px;

    background-color: var(--brand4);
  }
`;
