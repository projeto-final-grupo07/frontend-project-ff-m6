import styled from 'styled-components';

export const StyledVehicleDetail = styled.div`
  .mainContainer {
    padding: 1rem 60px;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-start;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 900px) {
    padding: 0;
    width: 100%;
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
`;
export const StyledPhotoDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 400px;
  padding: 2rem;
  gap: 1rem;
  object-fit: center;

  background: var(--whiteFixed);
  border-radius: 4px;
  .photoGalery {
    width: 100%;
    img {
      width: calc((100% - 2rem) / 3);
      cursor: pointer;
    }
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
