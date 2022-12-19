import styled, { css } from 'styled-components';

export interface iStyledButtonProps {
  buttonSize?: 'big' | 'medium';
  buttonStyle:
    | 'grey1'
    | 'outlined'
    | 'outlined2'
    | 'outlinedBrand1'
    | 'brand'
    | 'alert'
    | 'sucess'
    | 'disabled'
    | 'negative';
  color?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  border: 1.5px solid;
  transition: 0.3s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'big':
        return css`
          padding: 12px 28px;
          height: 48px;
        `;
      case 'medium':
        return css`
          padding: 12px 20px;
          height: 38px;
        `;
      default:
        return css`
          padding: 12 20px;
          height: 30px;
        `;
    }
  }}
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case 'grey1':
        return css`
          background: var(--grey0);
          border-color: var(--grey0);
          color: var(--whiteFixed);
          &:hover {
            background: var(--grey1);
            border-color: var(--grey1);
          }
        `;
      case 'negative':
        return css`
          background: var(--grey6);
          border-color: var(--grey6);
          color: var(--grey2);
          &:hover {
            background: var(--grey5);
            border-color: var(--grey5);
          }
        `;
      case 'outlined':
        return css`
          background: var(--whiteFixed);
          border-color: var(--grey0);
          color: var(--grey0);
          &:hover {
            background: var(--grey1);
            border-color: var(--grey1);
            color: var(--grey10);
          }
        `;
      case 'outlined2':
        return css`
          background: var(--whiteFixed);
          border-color: var(--grey4);
          color: var(--grey0);
          &:hover {
            background: var(--grey1);
            border-color: var(--grey1);
            color: var(--grey10);
          }
        `;
      case 'brand':
        return css`
          background: var(--brand1);
          border-color: var(--brand1);
          color: var(--whiteFixed);
          &:hover {
            background: var(--brand2);
            border-color: var(--brand2);
          }
        `;
      case 'outlinedBrand1':
        return css`
          background: var(--whiteFixed);
          border-color: var(--brand1);
          color: var(--brand1);
          &:hover {
            background: var(--brand4);
            border-color: var(--brand1);
            color: var(--brand1);
          }
        `;
      case 'alert':
        return css`
          background: var(--alert3);
          border-color: var(--alert3);
          color: var(--alert1);
          &:hover {
            background: var(--alert2);
            border-color: var(--alert2);
          }
        `;
      case 'sucess':
        return css`
          background: var(--sucess3);
          border-color: var(--sucess3);
          color: var(--sucess1);
          &:hover {
            background: var(--sucess2);
            border-color: var(--sucess2);
          }
        `;
      case 'disabled':
        return css`
          background: var(--brand3);
          border-color: var(--brand3);
          color: var(--brand4);
          &:hover {
            filter: brightness(0);
          }
        `;
    }
  }}
  &:disabled {
    cursor: not-allowed;
  }
`;
