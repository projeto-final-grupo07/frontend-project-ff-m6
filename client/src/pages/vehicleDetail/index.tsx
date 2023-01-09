import Footer from '../../components/Footer';
import Navbar, { IDecodedToken } from '../../components/Navbar';
import { StyledButton } from '../../styles/button';
import { useParams } from 'react-router-dom';
import {
  StyledVehicleDetail,
  StyledSection,
  StyledSectionFixed,
  StyledPhotoDetail,
  StyledBox,
  StyledDivGap,
  SytledDivInfoVehicle,
  StyledRegisterComment,
} from './style';
import img from '../../assets/images/unsplash_3ZUsNJhi_Ik.png';
import { StyledTitle } from '../../styles/typography';
import CardProfile from '../../components/CardProfile';
import CommentCard from '../../components/CommentCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import api from '../../services';

export const VehicleDetail = () => {
  const price = 192900;
  const { id } = useParams();

  const token = localStorage.getItem('token');
  const [userData, setUserData] = useState({ name: 'User Name', id: '123' });

  if (token) {
    const decodedToken: IDecodedToken = jwt_decode(token);
    useEffect(() => {
      api
        .get(`/user/${decodedToken.id}`)
        .then((resp) => {
          console.log(resp.data);
          setUserData(resp.data);
        })
        .catch((err) => console.error(err));
    }, []);
  }

  return (
    <StyledVehicleDetail>
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
              <SytledDivInfoVehicle>
                <div>
                  <StyledTitle fontSize='body-2-500' tag='p' className='tag'>
                    2013/2014
                  </StyledTitle>
                  <StyledTitle fontSize='body-2-500' tag='p' className='tag'>
                    120.024 KM
                  </StyledTitle>
                </div>
                <StyledTitle fontSize='Heading-7-500' tag='h3'>
                  {price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </StyledTitle>
              </SytledDivInfoVehicle>
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
              <CommentCard />
              <CommentCard />
            </StyledDivGap>
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              <CardProfile name={userData.name} userId={userData.id} />
              <div className='textarea-container'>
                <StyledRegisterComment
                  rows={2}
                  maxLength={250}
                  placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
                ></StyledRegisterComment>
                <StyledButton className='commentButton' buttonStyle='brand' buttonSize='medium'>
                  Comentar
                </StyledButton>
              </div>
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
            <Link to={'/'}>
              <StyledButton buttonStyle='grey1' buttonSize='medium'>
                Ver todos os anuncios
              </StyledButton>
            </Link>
          </StyledBox>
        </StyledSectionFixed>
      </div>
      <Footer />
    </StyledVehicleDetail>
  );
};
