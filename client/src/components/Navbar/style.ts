import styled from 'styled-components';

export const NavBackground = styled.section`
  background-color: white;
  height: 80px;
`;

export const NavbarContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  inset: 0;
  padding: 0px 60px;
  height: 80px;

  background: var(--grey10);
  color: var(--grey2);

  border-bottom: 2px solid var(--grey6);
  font-size: 16px;
  z-index: 999;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .profileButtons {
    position: absolute;
    top: 70px;
    right: 60px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 6px;

    background-color: var(--whiteFixed);
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.1));
  }

  .isWide {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  hr {
    border: none;
    width: 2px;
    height: 80px;
    background-color: var(--grey6);
  }

  a {
    color: var(--grey2);
    border-radius: 4px;
    padding: 10px;
    margin: 5px 10px;
    width: fit-content;
  }
  a:hover {
    background-color: var(--grey8);
  }

  .profile {
    padding: 0 28px;
    margin: 0px 5px;
  }
  .profile:hover {
    color: var(--grey1);
    background-color: var(--grey8);
  }

  button {
    color: var(--grey2);
    margin: 5px 10px;
    padding: 10px;
    border-radius: 4px;
    width: fit-content;
    font-weight: 400;
  }

  .registerBtn {
    border: 2px solid var(--grey4);
  }

  @media (max-width: 700px) {
    padding: 15px;
  }
`;

export const NotWide = styled.section`
  background: var(--whiteFixed);
  display: flex;
  flex-direction: column;

  position: fixed;
  width: 100%;
  height: fit-content;
  top: 80px;

  background: var(--grey10);
  color: var(--grey2);

  filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.2));
  z-index: 999;

  a {
    color: var(--grey2);
    margin: 5px 10px;
    padding: 10px;
    border-radius: 4px;
    width: fit-content;
  }
  a:hover {
    background-color: var(--grey6);
  }

  button {
    color: var(--grey2);
    margin: 5px 10px;
    padding: 10px;
    border-radius: 4px;
    width: fit-content;
    font-weight: 400;
  }

  .registerBtn {
    text-align: center;
    border: 2px solid var(--grey4);
    border-radius: 4px;
    padding: 10px;
    width: 100%;
  }

  .profile {
    margin: 10px;
    padding: 0 10px;
    width: fit-content;
    border-radius: 4px;
  }
  .profile:hover {
    color: var(--grey1);
    background-color: var(--grey8);
  }

  .profileButtons {
    border-top: 2px solid var(--grey7);
    top: 70px;
    right: 60px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 5px;

    background-color: var(--whiteFixed);
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.1));
  }

  hr {
    width: 100%;
    height: 2px;
  }
`;
