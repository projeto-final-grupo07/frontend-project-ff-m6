import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

export const Dashboard = () => {
  return (
    <>
      <Navbar />

      <StyledTitle fontSize='Heading-1-700' tag='h1'>
        Olá! esse e o DashBoard
      </StyledTitle>
      <StyledParagraph>Bem-vindo!</StyledParagraph>
      <Footer />
    </>
  );
};
