import styled from 'styled-components';

interface ColorRandomProps {
  color: string;
}

export const ThemeProductCard = styled.div`
  min-width: 312px;
  max-width: 312px;

  display: flex;
  flex-direction: column;

  .divImage {
    height: 152px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    /* margin: 0 auto; */
    background-color: var(--grey7);
    border: 2px solid transparent;
    z-index: -1;
    position: relative;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    height: 100%;
    width: 312px;

    margin: 1px 0;
    padding: 0 25px;

    z-index: -1;
  }
  .divImage:hover {
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

  .title {
    font-family: 'Lexend', sans-serif;
    text-align: left;
    line-height: 20px;
  }

  .description {
    line-height: 24px;
  }

  .active {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    /* top: 110px;
    left: 160px; */

    background-color: var(--brand1);
    color: var(--whiteFixed);

    padding: 4px 8px;

    margin: 11px 0 0 16px;

    height: 24px;
    width: 51px;
  }
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
    font-size: 14px;
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
