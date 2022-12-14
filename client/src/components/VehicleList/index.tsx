import { useContext, useEffect, useState } from 'react';
import api from '../../services';
import ProductCard from '../ProductCard';
import { ThemeCarList } from './style';
import { UserContext } from '../../contexts/UserContext/UserContext';

interface IVehicleListProps {
  typeVehicle: boolean;
}

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
}

interface IGalleryImg {
  id?: string;
  url: string;
}

const VehicleList = ({ typeVehicle }: IVehicleListProps) => {
  const { setGlobalLoading } = useContext(UserContext);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(() => {
    setGlobalLoading(true);
    api
      .get('/vehicle')
      .then((resp) => setVehicles(resp.data))
      .catch((err) => console.error(err))
      .finally(() => setGlobalLoading(false));
  }, []);

  return (
    <ThemeCarList>
      <div className='divCars'>
        {vehicles
          ?.filter((vehicle) => vehicle.isActive)
          .map((vehicle) => {
            if (vehicle.typeVehicles == typeVehicle)
              return (
                <ProductCard
                  userId={vehicle.user.id}
                  vehicleId={vehicle.id}
                  key={vehicle.id}
                  title={vehicle.title}
                  describe={vehicle.describe}
                  coverImg={vehicle.coverImg}
                  name={vehicle.user.name}
                  mileage={vehicle.mileage}
                  year={vehicle.year}
                  price={+vehicle.price}
                  active={vehicle.isActive}
                ></ProductCard>
              );
          })}
      </div>
    </ThemeCarList>
  );
};

export default VehicleList;
