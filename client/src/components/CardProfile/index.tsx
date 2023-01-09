import { Link } from 'react-router-dom';
import { StyledTitle } from '../../styles/typography';
import { ThemeCardProfile } from './style';

interface CardProfileProps {
  name: string;
  size?: string;
  userId?: string;
  direction?: boolean;
}

const CardProfile = ({ direction = false, name, size, userId }: CardProfileProps) => {
  const arrName = name.split(' ');

  const colorName: any = {
    a: '1',
    b: '1',
    c: '2',
    d: '2',
    e: '3',
    f: '3',
    g: '4',
    h: '4',
    i: '5',
    j: '5',
    k: '6',
    l: '6',
    m: '7',
    n: '7',
    o: '8',
    p: '8',
    q: '9',
    r: '9',
    s: '10',
    t: '10',
    u: '11',
    v: '11',
    w: '12',
    x: '12',
    y: '12',
    z: '12',
  };

  const initials =
    arrName.length > 1 ? arrName[0][0] + arrName[arrName.length - 1][0] : arrName[0][0];

  const number = colorName[arrName[0][0].toLowerCase()] || '1';

  return (
    <Link to={`/profile/${userId}`}>
      <ThemeCardProfile direction={direction} color={'random' + number} size={size}>
        <span className='initial'>{initials.toUpperCase()}</span>

        <StyledTitle
          className='nameAuthor'
          fontSize={direction ? 'Heading-6-600' : 'body-2-500'}
          tag='p'
        >
          {name}
        </StyledTitle>
      </ThemeCardProfile>
    </Link>
  );
};

export default CardProfile;
