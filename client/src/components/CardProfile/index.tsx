import { StyledTitle } from '../../styles/typography';
import { ThemeCardProfile } from './style';

interface CardProfileProps {
  name: string;
  size?: string;
}

const CardProfile = ({ name, size }: CardProfileProps) => {
  const initial = name.split('')[0].toUpperCase();

  const randomColor = 'random' + (1 + Math.floor(Math.random() * 12));
  return (
    <ThemeCardProfile color={randomColor} size={size || '32px'}>
      <span className='initial'>{initial}</span>
      <StyledTitle className='nameAuthor' fontSize='body-2-500' tag='p'>
        {name}
      </StyledTitle>
    </ThemeCardProfile>
  );
};

export default CardProfile;
