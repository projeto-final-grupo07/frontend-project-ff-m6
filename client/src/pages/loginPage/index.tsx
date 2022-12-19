import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

export const Login = () => {
  return (
    <>
      <Navbar />

      <StyledTitle fontSize='Heading-1-700' tag='h1'>
        Olá! essa e a pagina de Login
      </StyledTitle>
      <StyledParagraph>Bem-vindo!</StyledParagraph>
      <Footer />
    </>
  );
};
