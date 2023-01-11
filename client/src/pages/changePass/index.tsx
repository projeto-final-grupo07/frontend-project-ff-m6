import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import * as yup from 'yup';
import { ReactNode, useState, useEffect } from 'react';
import { StyledContainer } from './style';
import { StyledButton } from '../../styles/button';
import api from '../../services';
import { router } from '../../routes';
import Logo from '../../components/Logo';

export const ChangePassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [load, setLoad] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const formSchema = yup.object().shape({
    email: yup.string().required('O campo Email é obrigatório'),
    token: yup.string().required('O campo Token é obrigatório'),
    password: yup.string().required('O campo Senha é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    setLoad(true);
    api
      .post('/resetPassword', data)
      .then(() => {
        setLoad(false);
        setNotFound(false);
        router.navigate('/login');
      })
      .catch(() => {
        setNotFound(true);
        setLoad(false);
      });
  };

  return (
    <StyledContainer>
      <Logo white />
      {load ? (
        <>Loading...</>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type='email'
              label='Email'
              placeholder='Seu Email'
              registerName='email'
              register={register}
            />
            {errors.email?.message && (
              <span className='error'>{errors.email.message as ReactNode}</span>
            )}
            <Input label='Token' placeholder='Seu Token' registerName='token' register={register} />
            {errors.token?.message && (
              <span className='error'>{errors.token.message as ReactNode}</span>
            )}
            <Input
              type='password'
              label='Senha'
              placeholder='Nova senha'
              registerName='password'
              register={register}
            />
            {notFound && (
              <span className='NotFound'>
                Email não cadastrado na base da dados, ou Token expirado
              </span>
            )}
            {errors.password?.message && (
              <span className='error'>{errors.password.message as ReactNode}</span>
            )}
            <StyledButton buttonStyle='outlined2'>Enviar</StyledButton>
          </form>
          <div className='btn2'>
            <p>Não tem código?</p>
            <StyledButton
              onClick={() => router.navigate('/recoverPassword')}
              buttonStyle='outlined'
            >
              Enviar código
            </StyledButton>
          </div>
        </>
      )}
    </StyledContainer>
  );
};
