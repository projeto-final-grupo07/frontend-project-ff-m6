import CardProfile from '../../components/CardProfile';
import Footer from '../../components/Footer';
import Navbar, { IDecodedToken } from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { StyledTitle } from '../../styles/typography';
import { ProfileTop, VehiclesSection } from './style';
import { useContext, useEffect, useState } from 'react';
import api from '../../services';
import { Link, useParams } from 'react-router-dom';
import RegisterVehicle from '../../components/RegisterVehicle';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { StyledButton } from '../../styles/button';
import EditVehicle from '../../components/EditVehicle';

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setGlobalLoading, userData } = useContext(UserContext);

  const { userId } = useParams();
  const [data, setData] = useState<IUser>();
  const [owner, setOwner] = useState(false);

  const token = localStorage.getItem('token' || '');

  const [flagCar, setFlagCar] = useState(false);
  const [flagMoto, setFlagMoto] = useState(false);

  useEffect(() => {
    setGlobalLoading(true);
    api
      .get(`/user/${userId}`)
      .then((resp) => {
        setData(resp.data);
        if (resp.data.Vehicle) {
          for (let i = 0; i < resp.data.Vehicle.length; i++) {
            if (resp.data.Vehicle[i].typeVehicles == false) {
              setFlagCar(true);
            }
            if (resp.data.Vehicle[i].typeVehicles == true) {
              setFlagMoto(true);
            }
          }
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setGlobalLoading(false));

    if (token) {
      const decodedToken: IDecodedToken = jwt_decode(token);
      if (userId === decodedToken.id) {
        setOwner(true);
      } else {
        setOwner(false);
      }
    }
  }, [userData]);

  return (
    <>
      <Navbar />
      <ProfileTop>
        <div className='containerProfileTop'>
          <section>
            <div>
              <CardProfile name={data?.name || 'Not Found'} size='100px' direction={'true'} />
            </div>
            <StyledTitle className='profileTag' fontSize='body-2-500' tag='p'>
              {data?.typeAccount ? 'Anunciante' : 'Comprador'}
            </StyledTitle>
          </section>

          <StyledTitle fontSize='body-1-400' tag='p'>
            {data?.describe}
          </StyledTitle>
          {owner && data?.typeAccount == true ? (
            <RegisterVehicle setData={setData} userId={userId} />
          ) : (
            <></>
          )}
        </div>
      </ProfileTop>

      <VehiclesSection>
        {flagCar || flagMoto ? (
          <></>
        ) : (
          <StyledTitle fontSize='Heading-4-500' tag='h3' fontColor='var(--grey3)'>
            Você ainda não possui nenhum anuncio...
          </StyledTitle>
        )}
        {flagCar ? (
          <>
            <StyledTitle fontSize='Heading-5-600' tag='h5'>
              Carros
            </StyledTitle>
            <section className='vehicleCards'>
              {data?.Vehicle.map((vehicle) => {
                if (vehicle.typeVehicles == false)
                  return (
                    <div className='cardContainer'>
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

                      {owner ? (
                        <div>
                          <EditVehicle setData={setData} userId={userId} vehicle={vehicle} />
                          <Link to={`/vehicle/${vehicle.id}`}>
                            <StyledButton type='button' buttonStyle='outlined' buttonSize='medium'>
                              Ver como
                            </StyledButton>
                          </Link>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
              })}
            </section>
          </>
        ) : (
          <></>
        )}
      </VehiclesSection>

      <VehiclesSection>
        {flagMoto ? (
          <>
            <StyledTitle fontSize='Heading-5-600' tag='h5'>
              Motos
            </StyledTitle>
            <section className='vehicleCards'>
              {data?.Vehicle.map((vehicle) => {
                if (vehicle.typeVehicles == true)
                  return (
                    <div className='cardContainer'>
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

                      {owner ? (
                        <div>
                          <EditVehicle setData={setData} userId={userId} vehicle={vehicle} />
                          <Link to={`/vehicle/${vehicle.id}`}>
                            <StyledButton type='button' buttonStyle='outlined' buttonSize='medium'>
                              Ver como
                            </StyledButton>
                          </Link>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
              })}
            </section>
          </>
        ) : (
          <></>
        )}
      </VehiclesSection>
      <Footer />
    </>
  );
};
