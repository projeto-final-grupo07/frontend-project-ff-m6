import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input {
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    font-size: 16px;
    padding: 0.6rem;
    margin-top: 0.3rem;
    width: fit-content;
    width: 100%;
  }
  input:focus {
    border-color: var(--brand2);
  }

  textarea {
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    font-size: 16px;
    padding: 0.6rem;
    margin-top: 0.3rem;
    height: 5rem;
    width: 100%;
    resize: none;
  }

  input::placeholder {
    color: var(--grey2);
    font-weight: 400;
    font-size: 16px;
  }
  textarea::placeholder {
    color: var(--grey2);
    font-weight: 400;
    font-size: 16px;
  }
`;
