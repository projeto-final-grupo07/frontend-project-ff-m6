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
  @media (max-width: 700px) {
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
  @media (max-width: 700px) {
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

  @media (max-width: 700px) {
    position: static;
    padding: 0;
    width: 100%;
  }
  position: fixed;
  right: 0;
`;
export const StyledBox = styled.div`
  background: var(--whiteFixed);
  width: 100%;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
`;
export const StyledDivGap = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 1rem 0;
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
