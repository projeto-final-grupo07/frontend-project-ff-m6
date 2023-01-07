import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import * as yup from 'yup';
import { ReactNode, useState } from 'react';
import { StyledContainer } from './style';
import { StyledButton } from '../../styles/button';
import api from '../../services';
import { router } from '../../routes';

export const Recover = () => {
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
      .then((_) => {
        setLoad(false);
        setNotFound(false);
        router.navigate('/changePassword');
      })
      .catch((error) => {
        setNotFound(true);
        setLoad(false);
      });
  };

  return (
    <StyledContainer>
      {load ? (
        <>Loading...</>
      ) : (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {notFound && <p className='NotFound'>Email não cadastrado na base da dados</p>}
            <Input label='Email' placeholder='Seu Email' registerName='email' register={register} />
            {errors.email?.message && (
              <span className='error'>{errors.email.message as ReactNode}</span>
            )}
            <StyledButton buttonStyle='outlinedBrand1'>Enviar</StyledButton>
            <p>Já tem código?</p>
          </form>
          <StyledButton
            onClick={() => router.navigate('/changePassword')}
            buttonStyle='outlinedBrand1'
          >
            Mudar senha
          </StyledButton>
        </div>
      )}
    </StyledContainer>
  );
};
