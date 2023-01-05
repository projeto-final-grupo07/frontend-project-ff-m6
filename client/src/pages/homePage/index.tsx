import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import imgCarro from '../../assets/images/unsplash_3ZUsNJhi_Ik.png';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import { MainContainer } from './style';
import VehicleList from '../../components/VehicleList';

export const Home = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <StyledTitle fontSize='Heading-1-700' tag='h1'>
          Olá! essa e a Home
        </StyledTitle>
        <Modal
          propsButton={{
            buttonStyle: 'alert',
            buttonSize: 'medium',
          }}
          nameModal='Teste algo'
          nameButtonOpen='ABRIRRRE'
        >
          Algo aqui
        </Modal>
        <StyledTitle className='titleVehicles' fontSize='Heading-5-600' tag='h5'>
          Carros
        </StyledTitle>
        <VehicleList typeVehicle={false} />
        <StyledTitle className='titleVehicles' fontSize='Heading-5-600' tag='h5'>
          Motos
        </StyledTitle>
        <VehicleList typeVehicle={true} />
      </MainContainer>
      <Footer />
    </>
  );
};
