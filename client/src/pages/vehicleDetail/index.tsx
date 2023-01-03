import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { StyledButton } from '../../styles/button';
import { useParams } from 'react-router-dom';
import { StyledVehicleDetail, StyledSection, StyledSectionFixed, StyledPhotoDetail } from './style';
import img from '../../assets/images/unsplash_3ZUsNJhi_Ik.png';

export const VehicleDetail = () => {
  const { id } = useParams();
  return (
    <StyledVehicleDetail>
      <Navbar />
      <div className='mainContainer'>
        <StyledSection>
          <div>
            <img src={img} alt='x' />
          </div>
          <div>
            <h2>MERCEDES-BENZ ML 350</h2>
            <span>2013/2014</span>
            <span>120.024 KM</span>
            <span>R$ 192.900,00</span>
          </div>
          <div>
            <h1>Descrição</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil sunt,
              expedita dolorum dicta sint ullam aliquam quisquam magni perspiciatis ex esse cumque
              nam pariatur, sit consequuntur ut totam. Dicta!
            </p>
          </div>
          <div>dasdadsdsds</div>
        </StyledSection>
        <StyledSectionFixed>
          <StyledPhotoDetail>
            <h2>Fotos</h2>
            <div className='photoGalery'>
              <img src={img} alt='1' />
              <img src={img} alt='1' />
              <img src={img} alt='1' />
              <img src={img} alt='1' />
              <img src={img} alt='1' />
              <img src={img} alt='1' />
            </div>
          </StyledPhotoDetail>
          <div>
            <h1>Lorem ipsum</h1>
            <p>descrição</p>
            <StyledButton buttonStyle='grey1' buttonSize='medium'>
              Ver todos os anuncios
            </StyledButton>
          </div>
        </StyledSectionFixed>
      </div>
      <Footer />
    </StyledVehicleDetail>
  );
};
