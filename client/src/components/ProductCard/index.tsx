import { StyledParagraph, StyledTitle } from '../../styles/typography'
import CardProfile from '../CardProfile'
import Logo from '../Logo'

import {
  ThemeDivAuthor,
  ThemeDivInfoVehicle,
  ThemeProductCard,
  ThemeTitleProductCard,
} from './style'

interface ProductCardProps {
  title: string
  description: string
  img: string
  name: string
  km: number
  year: number
  price: number
}

const ProductCard = ({ title, description, img, name, km, year, price }: ProductCardProps) => {
  const initial = name.split('')[0].toUpperCase()

  const randomColor = 'random' + (1 + Math.floor(Math.random() * 12))
  return (
    <ThemeProductCard>
      <Logo></Logo>
      <div className='divImage'>
        <img className='image' src={img} alt='Image of the vehicle' />
      </div>
      <ThemeTitleProductCard>
        {title.length > 20 ? title.substring(0, 20) + ' ...' : title}
      </ThemeTitleProductCard>
      <StyledTitle className='title' fontSize='body-2-400' tag='p'>
        {description.length > 50 ? description.substring(0, 50) + ' ...' : description}
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
        <StyledTitle className='productPrice' fontSize='Heading-7-500' tag='h3'>
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledTitle>
      </ThemeDivInfoVehicle>
    </ThemeProductCard>
  )
}

export default ProductCard
