import styled from 'styled-components';

interface ColorRandomProps {
  color: string;
}

export const ThemeCardProfile = styled.div<ColorRandomProps>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;

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
