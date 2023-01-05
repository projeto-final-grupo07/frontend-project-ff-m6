import { Link } from 'react-router-dom';
import { StyledTitle } from '../../styles/typography';
import CardProfile from '../CardProfile';

import { ThemeDivInfoVehicle, ThemeProductCard } from './style';

interface ProductCardProps {
  title: string;
  describe: string;
  coverImg: string;
  name: string;
  mileage: number;
  year: number;
  price: number;
  appearActive?: boolean;
  active: boolean;
  id: string;
  userId: string;
}

const ProductCard = ({
  userId,
  id,
  title,
  describe,
  coverImg,
  name,
  mileage,
  year,
  price,
  appearActive,
  active,
}: ProductCardProps) => {
  return (
    <ThemeProductCard>
      <Link to={'/vehicle/12312'}>
        <div className='divImage'>
          {appearActive && <div className='active'>Ativo</div>}
          <img className='image' src={coverImg} alt='Image of the vehicle' />
        </div>
        <StyledTitle className='title' tag='h4' fontSize='Heading-7-600'>
          {title.length > 27 ? title.substring(0, 27) + ' ...' : title}
        </StyledTitle>
        <StyledTitle className='description' fontSize='body-2-400' tag='p'>
          {describe.length > 80 ? describe.substring(0, 80) + ' ...' : describe}
        </StyledTitle>
      </Link>
      <CardProfile name={name} userId={userId} />
      <ThemeDivInfoVehicle>
        <div>
          <StyledTitle fontSize='body-2-500' tag='p' className='km'>
            {mileage} KM
          </StyledTitle>
          <StyledTitle fontSize='body-2-500' tag='p' className='year'>
            {year}
          </StyledTitle>
        </div>
        <StyledTitle className='productPrice' fontSize='Heading-7-500' tag='h3'>
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledTitle>
      </ThemeDivInfoVehicle>
    </ThemeProductCard>
  );
};

export default ProductCard;
