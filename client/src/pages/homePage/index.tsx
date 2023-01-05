import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import imgCarro from '../../assets/images/unsplash_3ZUsNJhi_Ik.png';
import Navbar from '../../components/Navbar';
import { MainContainer } from './style';
import VehicleList from '../../components/VehicleList';
import RegisterVehicle from '../../components/RegisterVehicle';
import ProductCardAuction from '../../components/ProductCardAuction';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';


export const Home = () => {
  const {  home } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <MainContainer>
        <StyledTitle fontSize='Heading-1-700' tag='h1'>
          Olá! essa e a {home}
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
        <StyledParagraph>Bem-vindo</StyledParagraph>

        <RegisterVehicle />

        <StyledTitle className='titleVehicles' fontSize='Heading-5-600' tag='h5'>
          Carros
        </StyledTitle>
        <VehicleList typeVehicle={false} />
        <StyledTitle className='titleVehicles' fontSize='Heading-5-600' tag='h5'>
          Motos
        </StyledTitle>
        <VehicleList typeVehicle={true} />
        <Link to={"/profile/e2a01b35-03ee-46db-a9cd-54adeb085e20"}>
          ausgdiuas
        </Link>

        <ProductCardAuction
          title={'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '}
          name={'Steve Jobs'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
          }
          year={2022}
          km={2}
          img={imgCarro}
          price={23000}
          time={'01:52:00'}
        />
      </MainContainer>
      <Footer />
    </>
  );
};
