import { Link } from 'react-router-dom';
import { StyledLogo } from './style';

function Logo(white: any) {
  return (
    <Link to='/'>
      <StyledLogo white={white.white}>
        Motors <span>shop</span>
      </StyledLogo>
    </Link>
  );
}

export default Logo;
