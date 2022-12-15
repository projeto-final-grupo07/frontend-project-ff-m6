import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { StyledButton } from "../../styles/button";
import { StyledParagraph, StyledTitle } from "../../styles/typography";

export const Home = () => {
  return (
    <>
      <StyledTitle fontSize="Heading-1-700" tag="h1">
        Olá! essa e a Home
      </StyledTitle>
      <Modal
        propsButton={{
          buttonStyle: "alert",
          buttonSize: "medium",
        }}
        nameModal="Teste algo"
        nameButtonOpen="ABRIRRRE"
      >
        Algo aqui
      </Modal>
      <StyledParagraph>Bem-vindo</StyledParagraph>
      <Footer />
    </>
  );
};
