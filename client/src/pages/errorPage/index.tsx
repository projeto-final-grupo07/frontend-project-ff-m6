import { Link } from 'react-router-dom';
import { StyledButton } from '../../styles/button';
import { Container } from './style';
import { BiErrorCircle } from 'react-icons/bi';

export const PageError = () => {
  return (
    <Container>
      <div>
        <BiErrorCircle size={'2rem'} className='icon' />
        <h1>Algum erro ocorreu!</h1>
        <p>Verifique se o URL está correto e tente novamente.</p>
        <Link to={'/'}>
          <StyledButton buttonStyle='grey1'>Volte a pagina inicial</StyledButton>
        </Link>
      </div>
    </Container>
  );
};
