import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 800px;
  overflow: auto;

  .errorValue {
    color: red;
    font-size: 12px;
    font-weight: 600;
  }

  .TypeAnnounce {
    display: flex;
    flex-direction: column;

    div {
      overflow: auto;
      display: flex;
      button {
        width: 100%;
        margin-right: 0.5rem;
        margin-top: 0.5rem;
        height: 3rem;
      }
    }
  }

  input {
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    font-size: 16px;
    padding: 0.6rem;
    margin-top: 0.3rem;
  }

  .InfoAnnounce {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .Title {
      display: flex;
      flex-direction: column;
    }

    .InputsValues {
      display: flex;
      gap: 0.5rem;

      input {
        width: 100%;
      }
    }

    .AgeAndPrice {
      display: flex;
      gap: 0.5rem;

      @media (max-width: 600px) {
        flex-direction: column;
      }
    }

    .Describe {
      display: flex;
      flex-direction: column;

      textarea {
        border: 1.5px solid #e9ecef;
        border-radius: 4px;
        font-size: 16px;
        padding: 0.6rem;
        margin-top: 0.3rem;
        height: 5rem;

        resize: none;
      }
    }
  }

  .Pictures,
  li {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .BtnAddImg {
    color: #4529e6;
    background: #edeafd;
    border: 1.5px solid #edeafd;
    border-radius: 4px;
    padding: 0.5rem;
    width: 60%;
    font-weight: bold;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .BtnSubmityAndClose {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    margin-right: 1rem;

    .Close,
    .Submit {
      padding: 0.8rem;
    }
  }
`;
