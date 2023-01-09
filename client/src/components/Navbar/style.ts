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
    right: 50px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 6px;

    background-color: var(--whiteFixed);
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.2);
  }

  .isWide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  hr {
    border: none;
    width: 2px;
    height: 80px;
    background-color: var(--grey6);
    margin: 0 20px;
  }

  a {
    color: var(--grey2);
  }
  .navButtons {
    margin: 5px 10px;
    padding: 10px 15px;
    border-radius: 4px;
    width: fit-content;
  }
  .navButtons:hover {
    background-color: var(--grey8);
  }

  .profile {
    margin: 0px 5px;
    border-radius: 4px;
    margin: 5px 10px;
    padding: 0 15px;
    position: relative;

    a {
      margin: 0;
      padding: 0;
    }
  }
  .profile:hover {
    background-color: var(--grey8);
  }

  .barrier {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
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
    text-align: center;
    border-radius: 4px;
    padding: 10px 20px;
    font-weight: 800;
  }
  .registerBtn:hover {
    color: var(--whiteFixed);
    border: 2px solid var(--brand1);
    background-color: var(--brand1);
  }

  .inLogin {
    color: var(--brand1);
  }
  .inRegister {
    background-color: var(--brand4);
    border: 2px solid var(--brand1);
    color: var(--brand1);
    text-align: center;
    border-radius: 4px;
    padding: 10px 20px;
    font-weight: 800;
  }
  .inRegister:hover {
    color: var(--whiteFixed);
    border: 2px solid var(--brand1);
    background-color: var(--brand1);
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
  }
  .navButtons {
    margin: 20px 10px;
    padding: 10px;
    border-radius: 4px;
    width: fit-content;
  }
  .navButtons:hover {
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

  button:hover {
    color: var(--grey1);
    background-color: var(--grey6);
  }

  .registerBtn {
    margin: auto;
    margin-bottom: 30px;
    text-align: center;
    border: 2px solid var(--grey4);
    color: var(--grey1);
    border-radius: 4px;
    padding: 15px;
    width: 96%;
    font-weight: 800;
  }
  .registerBtn:hover {
    color: var(--whiteFixed);
    border: 2px solid var(--brand1);
    background-color: var(--brand1);
  }

  .inLogin {
    color: var(--brand1);
  }
  .inRegister {
    color: var(--brand1);
    border: 2px solid var(--brand1);
    background-color: var(--brand3);
    margin: auto;
    margin-bottom: 30px;
    text-align: center;
    border-radius: 4px;
    padding: 15px;
    width: 96%;
    font-weight: 800;
  }
  .inRegister:hover {
    color: var(--whiteFixed);
    border: 2px solid var(--brand1);
    background-color: var(--brand1);
  }

  .profile {
    margin: 10px;
    padding: 0 10px;
    width: fit-content;
    border-radius: 4px;
    position: relative;

    a {
      margin: 0;
      padding: 0;
    }
  }

  .barrier {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }

  .profileButtons {
    border-top: 2px solid var(--grey7);
    top: 70px;
    right: 60px;
    padding-top: 10px;

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
