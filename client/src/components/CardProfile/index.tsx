import { StyledTitle } from '../../styles/typography';
import { ThemeCardProfile } from './style';

interface CardProfileProps {
  name: string;
  size?: string;
}

const CardProfile = ({ name, size }: CardProfileProps) => {
  const arrName = name.split(' ');

  const initials = arrName[0][0] + arrName[arrName.length - 1][0];

  const randomColor = 'random' + (1 + Math.floor(Math.random() * 12));
  return (
    <ThemeCardProfile color={randomColor} size={size}>
      <span className='initial'>{initials}</span>
      <StyledTitle className='nameAuthor' fontSize='body-2-500' tag='p'>
        {name}
      </StyledTitle>
    </ThemeCardProfile>
  );
};

export default CardProfile;
