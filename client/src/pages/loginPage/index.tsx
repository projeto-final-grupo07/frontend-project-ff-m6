import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import { StyledTitle } from '../../styles/typography';
import * as yup from 'yup';
import { StyledButton } from '../../styles/button';
import { Container, LoginContainer } from './style';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services';
import { router } from '../../routes';
import { BiLoaderCircle } from 'react-icons/bi';

export const Login = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required('O campo Email é obrigatório')
      .email('Necessário ser um Email valido'),
    password: yup.string().required('O campo Senha é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = (data: any) => {
    setLoading(true);
    api
      .post('/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        router.navigate('/');
        reset();
      })
      .catch((err) => {
        console.log(err);
        if (err.message === 'Network Error') {
          setLoading(false);
          setError('Erro no servidor... tente novamente mais tarde.');
        } else {
          setLoading(false);
          setError('Email e/ou senha errados');
        }
      });
  };

  return (
    <>
      <Container>
        <Navbar />
        <LoginContainer onSubmit={handleSubmit(onSubmit)}>
          <StyledTitle fontSize='Heading-5-500' tag='h2'>
            Login
          </StyledTitle>

          <Input
            type='email'
            label='Usuário'
            placeholder='Digitar usuário'
            registerName='email'
            register={register}
          />
          {errors.email?.message && <p className='error'>{errors.email.message as ReactNode}</p>}

          <Input
            type='password'
            label='Senha'
            placeholder='Digitar senha'
            registerName='password'
            register={register}
          />
          {errors.password?.message && (
            <p className='error'>{errors.password.message as ReactNode}</p>
          )}

          <Link to={'/recoverPassword'} className='flexEnd'>
            <StyledTitle fontSize='body-2-400' tag='p'>
              Esqueci minha senha
            </StyledTitle>
          </Link>
          {error && <p className='error'>{error}</p>}
          <StyledButton type='submit' buttonStyle='brand'>
            {loading ? <BiLoaderCircle size={'2em'} className='loading' /> : 'Entrar'}
          </StyledButton>

          <StyledTitle className='flexCenter' fontSize='body-2-400' tag='p'>
            Ainda não possui conta?
          </StyledTitle>

          <Link to={'/register'}>
            <StyledButton type='button' buttonStyle='outlined2'>
              Cadastrar
            </StyledButton>
          </Link>
        </LoginContainer>

        <Footer />
      </Container>
    </>
  );
};
