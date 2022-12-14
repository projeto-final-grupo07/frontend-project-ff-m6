import Footer from "../../components/Footer";
import { StyledParagraph, StyledTitle } from "../../styles/typography";

export const Home = () => {
  return (
    <>
      <StyledTitle fontSize="Heading-1-700" tag="h1">
        Olá! essa e a Home
      </StyledTitle>
      <StyledParagraph>Bem-vindo</StyledParagraph>
      <Footer />
    </>
  );
};
