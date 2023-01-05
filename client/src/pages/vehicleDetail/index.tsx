import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { StyledButton } from '../../styles/button';
import { useParams } from 'react-router-dom';
import {
  StyledVehicleDetail,
  StyledSection,
  StyledSectionFixed,
  StyledPhotoDetail,
  StyledBox,
  StyledDivGap,
} from './style';
import img from '../../assets/images/unsplash_3ZUsNJhi_Ik.png';
import { ThemeDivInfoVehicle } from '../../components/ProductCardAuction/style';
import { StyledTitle } from '../../styles/typography';
import CardProfile from '../../components/CardProfile';
import CommentCard from '../../components/CommentCard';

const handleOnWheel = (e: any) => {
  // console.log(e);
};
export const VehicleDetail = () => {
  const price = 192900;
  const { id } = useParams();
  return (
    <StyledVehicleDetail onWheel={handleOnWheel}>
      <Navbar />
      <div className='mainContainer'>
        <StyledSection>
          <StyledBox>
            <img src={img} alt='x' />
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              <StyledTitle fontSize='Heading-6-600' tag='h6'>
                Mercedes Benz A 200 CGI ADVANCE SEDAN
              </StyledTitle>
              <ThemeDivInfoVehicle>
                <div>
                  <StyledTitle fontSize='body-2-500' tag='p' className='year'>
                    2013/2014
                  </StyledTitle>
                  <StyledTitle fontSize='body-2-500' tag='p' className='km'>
                    120.024 KM
                  </StyledTitle>
                </div>
                <StyledTitle fontSize='Heading-7-500' tag='h3'>
                  {price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </StyledTitle>
              </ThemeDivInfoVehicle>
            </StyledDivGap>
            <StyledButton buttonStyle='brand' buttonSize='medium'>
              Comprar
            </StyledButton>
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              <StyledTitle fontSize='Heading-6-600' tag='h6'>
                Descrição
              </StyledTitle>
              <StyledTitle fontSize='body-1-400' tag='p' fontColor='var(--grey2)'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil sunt,
                expedita dolorum dicta sint ullam aliquam quisquam magni perspiciatis ex esse cumque
                nam pariatur, sit consequuntur ut totam. Dicta!
              </StyledTitle>
            </StyledDivGap>
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              <StyledTitle fontSize='Heading-6-600' tag='h6'>
                Comentários
              </StyledTitle>
              <CommentCard />
            </StyledDivGap>
          </StyledBox>
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
          <StyledBox center flex columnFlex>
            <StyledDivGap center>
              <CardProfile name='Ronado' />

              <StyledTitle fontSize='body-1-400' tag='p' fontColor='var(--grey2)'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys
              </StyledTitle>
            </StyledDivGap>
            <StyledButton buttonStyle='grey1' buttonSize='medium'>
              Ver todos os anuncios
            </StyledButton>
          </StyledBox>
        </StyledSectionFixed>
      </div>
      <Footer />
    </StyledVehicleDetail>
  );
};
