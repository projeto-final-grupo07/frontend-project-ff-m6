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
    }
  }
`;
export const StyledSection = styled.div`
  width: 50%;
  gap: 1rem;
`;
export const StyledSectionFixed = styled.div`
  width: 50%;
  position: fixed;
  right: 0;
  padding: 0px 60px;
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
  .photoGalery {
    width: 100%;
    img {
      width: calc((100% - 2rem) / 3);
      cursor: pointer;
    }
  }
`;
