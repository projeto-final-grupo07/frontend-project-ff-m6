import styled from 'styled-components';

interface ColorRandomProps {
  color: string;
  size?: string;
  direction?: boolean;
}

export const ThemeCardProfile = styled.div<ColorRandomProps>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  flex-direction: ${({ direction }) => (direction ? 'column' : 'row')};

  .initial {
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ size, direction }) => (direction ? '104px' : size || '32px')};
    height: ${({ size, direction }) => (direction ? '104px' : size || '32px')};

    background-color: var(--${({ color }) => color});

    padding: 16px 7.5px;
    margin-right: 8px;

    margin-bottom: ${({direction }) => (direction ? '28px': '0')};
    border-radius: 100%;

    color: var(--brand4);

    font-size: ${({ direction }) => (direction ? '36px' : '0.875rem')};
    font-weight: 500;
  }
`;
