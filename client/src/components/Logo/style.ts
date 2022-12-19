import styled from 'styled-components';

interface LogoProps {
  white: string;
}

export const StyledLogo = styled.h3<LogoProps>`
  background-image: linear-gradient(
    ${({ white }) => (white ? '#fff, #fff' : '90deg, #0b0d0d -1.61%, #4529e6 100.99%')}
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  font-size: 26px;
  span {
    font-size: 16px;
  }
`;
