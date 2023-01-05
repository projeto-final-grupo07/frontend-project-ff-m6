import { data } from '../../data/data';
import ProductCard from '../ProductCard';
import { ThemeCarList } from './style';

interface IVehicleListProps {
  typeVehicle: boolean;
}

const VehicleList = ({ typeVehicle }: IVehicleListProps) => {
  return (
    <ThemeCarList>
      <div className='divCars'>
        {data.map((vehicle) => {
          if (vehicle.typeVehicles == typeVehicle)
            return (
              <ProductCard
                key={vehicle.id}
                title={vehicle.title}
                describe={vehicle.describe}
                coverImg={vehicle.coverImg}
                name={vehicle.name}
                mileage={vehicle.mileage}
                year={vehicle.year}
                price={vehicle.price}
              ></ProductCard>
            );
        })}
      </div>
    </ThemeCarList>
  );
};

export default VehicleList;
