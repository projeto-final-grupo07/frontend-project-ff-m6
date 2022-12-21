import CardProfile from '../../components/CardProfile';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { StyledTitle } from '../../styles/typography';
import { ProfileTop } from './style';
import imgCarro from '../../assets/images/unsplash_3ZUsNJhi_Ik.png';
import { fakeUser } from '../../fakeData';

export const Profile = () => {
  return (
    <>
      <Navbar />
      {/* <StyledTitle fontSize='Heading-1-700' tag='h1'>
        Olá! essa e a pagina de PROFILE
      </StyledTitle>
      <StyledParagraph>Bem-vindo!</StyledParagraph> */}

      {/* <CardProfile name='Robert' /> */}

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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s
          </StyledTitle>
        </div>
      </ProfileTop>

      <StyledTitle fontSize='Heading-5-600' tag='h5'>
        Carros
      </StyledTitle>

      <p>dasda</p>
      {fakeUser.vehicles.map((vehicle) => {
        return (
          <ProductCard
            key={vehicle.id}
            title={vehicle.title}
            description={vehicle.describe}
            img={vehicle.coverImg}
            name={fakeUser.name}
            km={vehicle.mileage}
            year={vehicle.year}
            price={vehicle.price}
          />
        );
      })}

      <StyledTitle fontSize='Heading-5-600' tag='h5'>
        Motos
      </StyledTitle>
      <Footer />
    </>
  );
};
