import Footer from '../../components/Footer';
import { StyledTitle } from '../../styles/typography';
import Navbar from '../../components/Navbar';
import { AuctionSection, Header, HomeContainer } from './style';
import VehicleList from '../../components/VehicleList';
import ProductCardAuction from '../../components/ProductCardAuction';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { fakeUser } from '../../fakeData';
import { StyledButton } from '../../styles/button';

export const Home = () => {
  const { home } = useContext(UserContext);
  home;
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
        {/* <Modal
          propsButton={{
            buttonStyle: 'alert',
            buttonSize: 'medium',
          }}
          nameModal='Teste algo'
          nameButtonOpen='ABRIRRRE'
        >
          Algo aqui
        </Modal> */}

        <AuctionSection>
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
            }) || <p>funciona krai</p>}
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
