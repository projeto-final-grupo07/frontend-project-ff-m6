import { StyledTitle } from '../../styles/typography';
import CardProfile from '../CardProfile';
import { BiTimeFive } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

import {
  TimeSection,
  ThemeDivInfoVehicle,
  ThemeProductCard,
  FooterSection,
  ProductCardAuctionContainer,
} from './style';

interface ProductCardProps {
  title: string;
  description: string;
  img: string;
  name: string;
  km: number;
  year: number;
  price: number;
  time: string;
}

const ProductCardAuction = ({
  title,
  description,
  img,
  name,
  km,
  year,
  price,
  time,
}: ProductCardProps) => {
  return (
    <ProductCardAuctionContainer>
      <ThemeProductCard>
        <div className='backGround'></div>
        <img className='image' src={img} alt='Image of the vehicle' />

        <TimeSection>
          <BiTimeFive color='var(--brand1)' size={'20px'} />
          <StyledTitle fontSize='Heading-7-500' tag='h6'>
            {time}
          </StyledTitle>
        </TimeSection>

        <StyledTitle fontSize='Heading-6-600' tag='h6'>
          {title}
        </StyledTitle>
        <StyledTitle className='description' fontSize='body-2-400' tag='p'>
          {description}
        </StyledTitle>

        <CardProfile name={name} />

        <ThemeDivInfoVehicle>
          <div>
            <StyledTitle fontSize='body-2-500' tag='p' className='km'>
              {km} KM
            </StyledTitle>
            <StyledTitle fontSize='body-2-500' tag='p' className='year'>
              {year}
            </StyledTitle>
          </div>
          <StyledTitle fontSize='Heading-7-500' tag='h3'>
            {price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </StyledTitle>
        </ThemeDivInfoVehicle>
      </ThemeProductCard>

      <FooterSection>
        <StyledTitle fontSize='button-big-text' tag='p' className='year'>
          Acessar página do leilão
        </StyledTitle>
        <BsArrowRight size={'26px'} />
      </FooterSection>
    </ProductCardAuctionContainer>
  );
};

export default ProductCardAuction;
