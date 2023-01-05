import CardProfile from '../../components/CardProfile';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { StyledTitle } from '../../styles/typography';
import { ProfileTop, VehiclesSection } from './style';
import { fakeUser } from '../../fakeData';

export const Profile = () => {
  return (
    <>
      <Navbar />
      <ProfileTop>
        <div className='containerProfileTop'>
          <section>
            <div>
              <CardProfile name={fakeUser.name} size='100px' />
            </div>
            <StyledTitle className='profileTag' fontSize='body-2-500' tag='p'>
              Anunciante
            </StyledTitle>
          </section>

          <StyledTitle fontSize='body-1-400' tag='p'>
            {fakeUser.describe}
          </StyledTitle>
        </div>
      </ProfileTop>

      <VehiclesSection>
        <StyledTitle fontSize='Heading-5-600' tag='h5'>
          Carros
        </StyledTitle>
        <section className='vehicleCards'>
          {fakeUser.vehicles.map((vehicle) => {
            if (vehicle.typeVehicles == false)
              return (
                <ProductCard
                  key={vehicle.id}
                  title={vehicle.title}
                  describe={vehicle.describe}
                  coverImg={vehicle.coverImg}
                  name={fakeUser.name}
                  mileage={vehicle.mileage}
                  year={vehicle.year}
                  price={vehicle.price}
                />
              );
          })}
        </section>
      </VehiclesSection>

      <VehiclesSection id='moto'>
        <StyledTitle fontSize='Heading-5-600' tag='h5'>
          Motos
        </StyledTitle>
        <section className='vehicleCards'>
          {fakeUser.vehicles.map((vehicle) => {
            if (vehicle.typeVehicles == true)
              return (
                <ProductCard
                  key={vehicle.id}
                  title={vehicle.title}
                  describe={vehicle.describe}
                  coverImg={vehicle.coverImg}
                  name={fakeUser.name}
                  mileage={vehicle.mileage}
                  year={vehicle.year}
                  price={vehicle.price}
                />
              );
          })}
        </section>
      </VehiclesSection>

      <Footer />
    </>
  );
};
