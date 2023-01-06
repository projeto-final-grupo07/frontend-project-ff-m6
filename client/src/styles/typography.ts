import styled, { css } from 'styled-components';
import Typograph from './components/Typograph';

export const StyledTitle = styled(Typograph)`
  font-weight: ${(props) => props.fontWeight || 700};
  color: ${(props) => props.fontColor || ''};
  ${({ fontSize }) => {
    switch (fontSize) {
      case 'Heading-1-700':
        return css`
          font-size: 44px;
          font-weight: 700;
          @media (max-width: 800px) {
            font-size: 46px;
          }
        `;
      case 'Heading-2-600':
        return css`
          font-size: 36px;
          font-weight: 600;
          @media (max-width: 800px) {
            font-size: 35px;
          }
        `;

      case 'Heading-3-600':
        return css`
          font-size: 32px;
          font-weight: 600;
          @media (max-width: 800px) {
            font-size: 30px;
          }
        `;
      case 'Heading-3-500':
        return css`
          font-size: 32px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 30px;
          }
        `;
      case 'Heading-4-600':
        return css`
          font-size: 28px;
          font-weight: 600;
          @media (max-width: 800px) {
            font-size: 26px;
          }
        `;
      case 'Heading-4-500':
        return css`
          font-size: 28px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 26px;
          }
        `;
      case 'Heading-5-600':
        return css`
          font-size: 24px;
          font-weight: 600;
          @media (max-width: 800px) {
            font-size: 20px;
          }
        `;
      case 'Heading-5-500':
        return css`
          font-size: 24px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 20px;
          }
        `;
      case 'Heading-6-600':
        return css`
          font-size: 20px;
          font-weight: 600;
          @media (max-width: 800px) {
            font-size: 15px;
          }
        `;
      case 'Heading-6-500':
        return css`
          font-size: 20px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 15px;
          }
        `;
      case 'Heading-7-500':
        return css`
          font-size: 16px;
          font-weight: 500;
          @media (max-width: 800px) {
            font-size: 13px;
          }
        `;
      case 'body-1-400':
        return css`
          font-size: 16px;
          font-weight: 400;
        `;
      case 'body-1-600':
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
      case 'body-2-400':
        return css`
          font-size: 14px;
          font-weight: 400;
        `;
      case 'body-2-500':
        return css`
          font-size: 14px;
          font-weight: 500;
        `;
      case 'button-big-text':
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
      case 'button-medium-text':
        return css`
          font-size: 14px;
          font-weight: 600;
        `;
      case 'input-placeholder':
        return css`
          font-size: 16px;
          font-weight: 400;
        `;
      case 'input-label':
        return css`
          color: var(--grey1);
          font-size: 14px;
          font-weight: 500;
        `;
    }
  }}
`;
interface iStyledParagraphProps {
  error?: boolean;
}

export const StyledParagraph = styled.p<iStyledParagraphProps>`
  font-weight: 400;
  font-size: 14px;
  color: ${({ error }) => (error ? 'var(--alert1)' : 'var(--grey0)')};
`;
