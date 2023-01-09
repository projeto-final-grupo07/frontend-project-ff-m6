import styled from 'styled-components';

export const StyledVehicleDetail = styled.div`
  width: 100%;
  position: relative;
  .divRoxinha {
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    background-color: var(--brand1);
    height: 580px;
  }
  .mainContainer {
    margin: 2rem auto 0 auto;
    /* padding: 1rem 60px; */
    display: flex;
    justify-content: center;
    align-items: flex-start;

    flex-direction: row;
    gap: 1rem;

    max-width: 1200px;
    width: 100%;
  }
  @media (max-width: 900px) {
    .mainContainer {
      flex-direction: column;
      padding: 1rem;
    }
  }
`;
export const StyledSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 900px) {
    padding: 0;
    width: 100%;
  }

  .mainImage {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 355px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      max-height: 355px;
      max-width: 700px;
    }
  }
`;
export const StyledSectionFixed = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0px 60px;

  @media (max-width: 900px) {
    position: static;
    padding: 0;
    width: 100%;
  }
  position: static;
  right: 0;
`;
export const StyledBox = styled.div<any>`
  background: var(--whiteFixed);
  width: 100%;
  border-radius: 4px;
  padding: ${({ paddingC }) => (paddingC ? paddingC : '0.5rem 1.5rem')};
  display: ${({ flex }: any) => (flex ? 'flex' : 'block')};
  align-items: ${({ center }: any) => (center ? 'center' : 'flex-start')};
  flex-direction: ${({ columnFlex }: any) => (columnFlex ? 'column' : 'row')};
`;
export const StyledDivGap = styled.div<any>`
  display: flex;
  gap: 1rem;
  flex-direction: ${({ row }: any) => (row ? 'row' : 'column')};
  margin: ${({ marginC }: any) => (marginC ? marginC : '1rem 0')};
  align-items: ${({ center }: any) => (center ? 'center' : 'flex-start')};

  .textarea-container {
    position: relative;
    width: 100%;

    @media (width < 600px) {
      position: static;
    }

    .commentButton {
      position: absolute;
      bottom: 13px;
      right: 11px;

      @media (width < 600px) {
        position: static;
        margin-top: 0.7rem;
      }
    }
  }

  .loading {
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;

    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;
export const StyledPhotoDetail = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  height: 200px;
  min-height: 250px;
  max-height: 400px;
  padding: 2rem;
  gap: 1rem;
  object-fit: center;
  @media (900px < width < 1200px) {
    min-height: 250px;
  }
  @media (600px < width < 900px) {
    min-height: 400px;
  }
  @media (400px < width < 600px) {
    min-height: 300px;
  }
  @media (width < 400px) {
    min-height: 220px;
  }
  

  background: var(--whiteFixed);
  border-radius: 4px;

  .gridGallery {
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }

  .imgGallery {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .noImage {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    font-weight: 700;

    width: 100%;
    height: 100%;
  }
`;

export const SytledDivInfoVehicle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 12px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .tag {
    color: var(--brand1);
    padding: 4px 8px;
    border-radius: 5px;
    background-color: var(--brand4);
  }
`;

export const StyledRegisterComment = styled.textarea`
  width: 100%;
  min-height: 128px;

  padding: 20px 28px 0px 28px;

  border: 1.5px solid var(--grey7);

  overflow-y: hidden;
  resize: none;
`;

export const StyledForm = styled.form`
  width: 100%;
`;
