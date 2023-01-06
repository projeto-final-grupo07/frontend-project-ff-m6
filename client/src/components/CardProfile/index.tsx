import { Link } from 'react-router-dom';
import { StyledTitle } from '../../styles/typography';
import { ThemeCardProfile } from './style';

interface CardProfileProps {
  name: string;
  size?: string;
  userId?: string;
}

const CardProfile = ({ name, size, userId }: CardProfileProps) => {
  const arrName = name.split(' ');

  const initials =
    arrName.length > 1 ? arrName[0][0] + arrName[arrName.length - 1][0] : arrName[0][0];

  const randomColor = 'random' + (1 + Math.floor(Math.random() * 12));
  return (
    <Link to={`/profile/${userId}`}>
      <ThemeCardProfile color={randomColor} size={size}>
        <span className='initial'>{initials}</span>
        <StyledTitle className='nameAuthor' fontSize='body-2-500' tag='p'>
          {name}
        </StyledTitle>
      </ThemeCardProfile>
    </Link>
  );
};

export default CardProfile;
