import Footer from '../../components/Footer';
import { StyledTitle } from '../../styles/typography';
import Navbar from '../../components/Navbar';
import { AuctionSection, Header, HomeContainer } from './style';
import VehicleList from '../../components/VehicleList';
import ProductCardAuction from '../../components/ProductCardAuction';
import { fakeUser } from '../../fakeData';
import { StyledButton } from '../../styles/button';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Header>
        <StyledTitle fontSize='Heading-1-700' tag='h2' className='title'>
          Velocidade e experiência em um lugar feito para você
        </StyledTitle>
        <StyledTitle fontSize='body-1-400' tag='p'>
          Um ambiente feito para você explorar o seu melhor
        </StyledTitle>
        <div>
          <a href='#car'>
            <StyledButton type='button' buttonStyle='outlined2'>
              Carros
            </StyledButton>
          </a>
          <a href='#moto'>
            <StyledButton type='button' buttonStyle='outlined2'>
              Motos
            </StyledButton>
          </a>
        </div>
      </Header>
      <HomeContainer>
        <AuctionSection id='auction'>
          <StyledTitle fontSize='Heading-5-600' tag='h5'>
            Leilão
          </StyledTitle>
          <section className='cards'>
            {fakeUser?.vehicles.map((vehicle) => {
              return (
                <ProductCardAuction
                  key={vehicle.id}
                  title={vehicle.title}
                  name={fakeUser.name}
                  description={vehicle.describe}
                  year={vehicle.year}
                  km={vehicle.mileage}
                  img={vehicle.coverImg}
                  price={vehicle.price}
                  time={'01:52:00'}
                />
              );
            }) || <p>Null</p>}
          </section>
        </AuctionSection>

        <div id='car' className='vehicleCards'>
          <StyledTitle className='titleVehicles' fontSize='Heading-5-600' tag='h5'>
            Carros
          </StyledTitle>
          <VehicleList typeVehicle={false} />
        </div>
        <div id='moto' className='vehicleCards'>
          <StyledTitle className='titleVehicles' fontSize='Heading-5-600' tag='h5'>
            Motos
          </StyledTitle>
          <VehicleList typeVehicle={true} />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};
