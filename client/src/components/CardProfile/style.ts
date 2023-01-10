import styled from 'styled-components';

interface ColorRandomProps {
  color: string;
  size?: string;
  direction?: string;
}

export const ThemeCardProfile = styled.div<ColorRandomProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'true' ? 'column' : 'row')};
  align-items: center;
  /* justify-content: center; */
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  word-break: normal;
  /* width: fit-content; */

  .initial {
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ size, direction }) => (direction === 'true' ? '104px' : size || '32px')};
    height: ${({ size, direction }) => (direction === 'true' ? '104px' : size || '32px')};

    background-color: var(--${({ color }) => color});

    padding: 16px 7.5px;
    margin-right: 8px;

    margin-bottom: ${({ direction }) => (direction === 'true' ? '28px' : '0px')};
    border-radius: 100%;

    color: var(--brand4);

    font-size: ${({ direction }) => (direction === 'true' ? '36px' : '0.875rem')};
    font-weight: 500;
  }
`;
