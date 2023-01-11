import Logo from '../Logo';
import { NavBackground, NavbarContainer, NotWide } from './style';
import { Link } from 'react-router-dom';
import { StyledTitle } from '../../styles/typography';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import CardProfile from '../CardProfile';
import jwt_decode from 'jwt-decode';
import api from '../../services';
import { StyledButton } from '../../styles/button';
import StyledModal from '../StyledModal';
import { router } from '../../routes';
import EditProfile from '../EditProfile';

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
      <NavBackground />
      <NavbarContainer>
        <section>
          <Logo className='logo' />

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

export interface IDecodedToken {
  email: string;
  id: string;
}

const NavButtons = (): JSX.Element => {
  const token = localStorage.getItem('token');
  const [userData, setUserData] = useState({ name: 'User Name', id: '123', typeAccount: false });

  if (token) {
    const decodedToken: IDecodedToken = jwt_decode(token);

    useEffect(() => {
      api
        .get(`/user/${decodedToken.id}`)
        .then((resp) => {
          setUserData(resp.data);
        })
        .catch((err) => console.error(err));
    }, []);
  }

  const [inLogin, setInLogin] = useState('no');
  const [inRegister, setInRegister] = useState('registerBtn');

  useEffect(() => {
    if (document.URL.includes('login')) {
      setInLogin('inLogin');
    } else if (document.URL.includes('register')) {
      setInRegister('inRegister');
    } else {
      setInLogin('no');
      setInRegister('registerBtn');
    }
  });

  const [open, setOpen] = useState(false);
  return (
    <>
      <a href='/#car' className='navButtons'>
        <StyledTitle fontSize='button-big-text' tag='h3'>
          Carros
        </StyledTitle>
      </a>
      <a href='/#moto' className='navButtons'>
        <StyledTitle fontSize='button-big-text' tag='h3'>
          Motos
        </StyledTitle>
      </a>
      <a href='/#auction' className='navButtons'>
        <StyledTitle fontSize='button-big-text' tag='h3'>
          Leião
        </StyledTitle>
      </a>
      <hr />
      {token ? (
        <>
          <button className='profile' onClick={() => setOpen(!open)}>
            <div className='barrier'></div>
            <CardProfile name={userData.name} userId={userData.id} />
          </button>
          {open ? (
            <div className='profileButtons'>
              <EditProfile />

              <StyledModal
                propsButton={{
                  buttonStyle: 'link',
                }}
                nameModal='Editar endereço'
                nameButtonOpen='Editar endereço'
              >
                ... Conteudo ...
              </StyledModal>

              {userData.typeAccount ? (
                <StyledButton type='button' buttonStyle='link'>
                  <Link to={`/profile/${userData.id}`}>Meus Anúncios</Link>
                </StyledButton>
              ) : (
                <></>
              )}

              <StyledButton type='button' buttonStyle='link'>
                <Link
                  to={'/'}
                  onClick={() => {
                    localStorage.clear();
                    router.navigate('/');
                    window.location.reload();
                  }}
                >
                  <StyledTitle fontSize='body-1-400' tag='p'>
                    Sair
                  </StyledTitle>
                </Link>
              </StyledButton>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <Link to={'/login'} className='navButtons'>
            <StyledTitle fontSize='button-big-text' tag='h3' className={inLogin}>
              Fazer Login
            </StyledTitle>
          </Link>
          <Link to={'/register'} className={inRegister}>
            Cadastrar
          </Link>
        </>
      )}
    </>
  );
};

export default Navbar;
