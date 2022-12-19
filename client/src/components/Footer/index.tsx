import Logo from '../Logo';
import { FooterContainer } from './style';
import { FaAngleUp } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <FooterContainer>
      <Logo white />
      <p>© 2022 - Todos os direitos reservados.</p>
      <button onClick={scrollToTop}>
        <FaAngleUp size='1.5em' />
      </button>
    </FooterContainer>
  );
}

export default Footer;
