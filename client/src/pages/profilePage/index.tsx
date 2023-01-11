import CardProfile from '../../components/CardProfile';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { StyledTitle } from '../../styles/typography';
import { ProfileTop, VehiclesSection } from './style';
import { fakeUser } from '../../fakeData';
import { useEffect, useState } from 'react';
import api from '../../services';
import { useParams } from 'react-router-dom';
import RegisterVehicle from '../../components/RegisterVehicle';

interface IVehicle {
  id: string;
  typeOffer: boolean;
  title: string;
  year: number;
  mileage: number;
  price: number;
  describe: string;
  typeVehicles: boolean;
  coverImg: string;
  GalleryImg: IGalleryImg[];
  user: IUser;
  isActive: boolean;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birthDate: string;
  describe: string;
  typeAccount: boolean;
  is_active: boolean;
  id: string;
  Vehicle: IVehicle[];
}

interface IGalleryImg {
  id?: string;
  url: string;
}

export const Profile = () => {
  const [data, setData] = useState<IUser>();
  const { userId } = useParams();

  const findUser = () => {
    api
      .get(`/user/${userId}`)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    findUser();
  }, []);

  return (
    <>
      <Navbar />
      <ProfileTop>
        <div className='containerProfileTop'>
          <section>
            <div>
              <CardProfile direction='true' name={data?.name || 'User name'} size='100px' />
            </div>
            <StyledTitle className='profileTag' fontSize='body-2-500' tag='p'>
              Anunciante
            </StyledTitle>
          </section>

          <StyledTitle fontSize='body-1-400' tag='p'>
            {fakeUser.describe}
          </StyledTitle>
          <RegisterVehicle findUser={findUser} />
        </div>
      </ProfileTop>

      <VehiclesSection>
        <StyledTitle fontSize='Heading-5-600' tag='h5'>
          Carros
        </StyledTitle>
        <section className='vehicleCards'>
          {data?.Vehicle.map((vehicle) => {
            if (vehicle.typeVehicles == false)
              return (
                <ProductCard
                  appearActive
                  userId={data.id}
                  vehicleId={vehicle.id}
                  key={vehicle.id}
                  title={vehicle.title}
                  describe={vehicle.describe}
                  coverImg={vehicle.coverImg}
                  name={data.name}
                  mileage={vehicle.mileage}
                  year={vehicle.year}
                  price={+vehicle.price}
                  active={vehicle.isActive}
                />
              );
          }) || <p>Null</p>}
        </section>
      </VehiclesSection>

      <VehiclesSection>
        <StyledTitle fontSize='Heading-5-600' tag='h5'>
          Motos
        </StyledTitle>
        <section className='vehicleCards'>
          {data?.Vehicle.map((vehicle) => {
            if (vehicle.typeVehicles == true)
              return (
                <ProductCard
                  appearActive
                  userId={data.id}
                  vehicleId={vehicle.id}
                  key={vehicle.id}
                  title={vehicle.title}
                  describe={vehicle.describe}
                  coverImg={vehicle.coverImg}
                  name={data.name}
                  mileage={vehicle.mileage}
                  year={vehicle.year}
                  price={+vehicle.price}
                  active={vehicle.isActive}
                />
              );
          }) || <p>Null</p>}
        </section>
      </VehiclesSection>
      <Footer />
    </>
  );
};
