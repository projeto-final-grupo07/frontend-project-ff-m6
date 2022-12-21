import Logo from '../Logo';
import { NavbarContainer, NotWide } from './style';
import { Link } from 'react-router-dom';
import { StyledTitle } from '../../styles/typography';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
    if (windowWidth > 1000) {
      setIsWide(true);
    } else {
      setIsWide(false);
    }
  }, [windowWidth]);

  return (
    <>
      <NavbarContainer>
        <section>
          <Logo />

          {isWide ? (
            <div className='isWide'>
              <NavButtons />
            </div>
          ) : (
            <button onClick={() => setOpen(!open)} aria-label={open ? 'Abrir Menu' : 'Fechar Menu'}>
              {open ? <IoClose size={'1.7em'} /> : <FaBars size={'1.5em'} />}
            </button>
          )}
        </section>
      </NavbarContainer>
      {!isWide && open ? (
        <NotWide>
          <NavButtons />
        </NotWide>
      ) : (
        <></>
      )}
    </>
  );
}

const NavButtons = (): JSX.Element => {
  return (
    <>
      <Link to={'/dashboard'}>
        <StyledTitle fontSize='button-big-text' tag='h3'>
          Carros
        </StyledTitle>
      </Link>
      <Link to={'/dashboard'}>
        <StyledTitle fontSize='button-big-text' tag='h3'>
          Motos
        </StyledTitle>
      </Link>
      <Link to={'/dashboard'}>
        <StyledTitle fontSize='button-big-text' tag='h3'>
          Leião
        </StyledTitle>
      </Link>
      <hr />
      <Link to={'/login'}>
        <StyledTitle fontSize='button-big-text' tag='h3'>
          Fazer Login
        </StyledTitle>
      </Link>
      <Link to={'/register'} className='registerBtn'>
        <StyledTitle fontColor='var(--grey0)' fontSize='button-big-text' tag='h3'>
          Cadastrar
        </StyledTitle>
      </Link>
    </>
  );
};

export default Navbar;
