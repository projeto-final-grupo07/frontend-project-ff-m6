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

    .error {
      flex-direction: column;
      align-self: flex-start;
    }

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
      height: 50px;
      position: absolute;
    }

    #select2 {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      padding: 10px;
      width: 154px;
      height: 50px;
      position: absolute;
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
