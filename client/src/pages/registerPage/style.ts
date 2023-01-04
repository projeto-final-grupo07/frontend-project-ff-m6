import styled from 'styled-components';

export const RegisterContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--grey10);
  margin: 50px auto;
  max-width: 411px;
  padding: 48px;
  border-radius: 5px;

  button {
    padding: 24px;
    width: 100%;
  }

  .error {
    color: red;
    font-size: 12px;
    font-weight: 600;
  }

  .flexRow {
    display: flex;
    gap: 10px;
    width: 100px;
    width: 100%;
  }

  .buttonsTypes {
    display: flex;
    gap: 10px;
    width: 100px;
    width: 100%;

    div {
      width: 100%;
    }

    #select1 {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      padding: 10px;
      width: 154px;
      /* width: 100%; */
      height: 50px;

      /* padding: 10px; */
      /* width: 15%; */
      /* height: 5%; */
      /* top: 0; */
      position: absolute;

      /* background-color: rgb(0, 0, 0, 0.5); */
    }

    #select2 {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      padding: 10px;
      width: 154px;
      height: 50px;

      /* padding: 10px; */
      /* width: 15%; */
      /* height: 5%; */
      /* top: 0; */
      position: absolute;

      /* background-color: rgb(0, 0, 0, 0.5); */
    }

    #select1:checked ~ .buyer {
      background-color: var(--brand1);
      color: var(--whiteFixed);
    }

    #select2:checked ~ .seller {
      background-color: var(--brand1);
      color: var(--whiteFixed);
    }
  }
`;
