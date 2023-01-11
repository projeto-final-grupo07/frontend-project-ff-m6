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

export const Recover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [load, setLoad] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const formSchema = yup.object().shape({
    email: yup.string().required('O campo Email é obrigatório'),
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
      .post('/sendEmail', data)
      .then(() => {
        setLoad(false);
        setNotFound(false);
        router.navigate('/changePassword');
      })
      .catch(() => {
        setNotFound(true);
        setLoad(false);
      });
  };

  return (
    <>
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
              {notFound && <span>Email não cadastrado na base da dados</span>}
              {errors.email?.message && (
                <span className='error'>{errors.email.message as ReactNode}</span>
              )}
              <StyledButton buttonStyle='outlined2'>Enviar</StyledButton>
            </form>
            <div className='btn2'>
              <p>Já tem código?</p>
              <StyledButton
                onClick={() => router.navigate('/changePassword')}
                buttonStyle='outlined'
              >
                Mudar senha
              </StyledButton>
            </div>
          </>
        )}
      </StyledContainer>
    </>
  );
};
