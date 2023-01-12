import { ReactNode, useEffect, useState, useContext } from 'react';
import { StyledButton } from '../../../styles/button';
import StyledModal from '../../StyledModal';
import { StyledForm } from './style';
import { useForm } from 'react-hook-form';

import api from '../../../services';
import Input from '../../Input';
import { StyledTitle } from '../../../styles/typography';
import { BiLoaderCircle } from 'react-icons/bi';

import { UserContext } from '../../../contexts/UserContext/UserContext';

const EditAdress = () => {
  const { userData, loadUser } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadUser();
  }, []);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = async (data: any) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    const request = {
      ...data,
    };

    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .patch('/user/address', request)
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setError('');
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        setSuccess(false);

        if (err.message === 'Network Error') {
          setLoading(false);
          setError('Erro no servidor... tente novamente mais tarde.');
        } else {
          setLoading(false);
          setError('Erro');
        }
      });
  };

  return (
    <StyledModal
      propsButton={{
        buttonStyle: 'link',
      }}
      nameModal='Editar Endereço'
      nameButtonOpen='Editar Endereço'
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle fontSize='body-2-500' tag='p'>
          Infomações de Endereço
        </StyledTitle>
        <Input
          defaultValue={userData?.Address.cep}
          label='CEP'
          placeholder='Ex: Samuel Leão'
          registerName='cep'
          register={register}
        />
        {errors.name?.message && <p className='error'>{errors.name.message as ReactNode}</p>}
        <div className='buttonsTypes'>
          <Input
            label='Estado'
            placeholder='Paraná'
            registerName='state'
            register={register}
            defaultValue={userData?.Address.state}
          />
          {errors.email?.message && <p className='error'>{errors.email.message as ReactNode}</p>}
          <Input
            label='Cidade'
            placeholder='Curitiba'
            registerName='city'
            register={register}
            defaultValue={userData?.Address.city}
          />
          {errors.cpf?.message && <p className='error'>{errors.cpf.message as ReactNode}</p>}
        </div>

        <Input
          label='Rua'
          placeholder='Rua do paraná'
          registerName='street'
          register={register}
          defaultValue={userData?.Address.street}
        />
        {errors.phone?.message && <p className='error'>{errors.phone.message as ReactNode}</p>}
        <div className='buttonsTypes'>
          <Input
            type='number'
            label='Número'
            placeholder='1029'
            registerName='number'
            register={register}
          />
          {errors.birthdate?.message && (
            <p className='error'>{errors.birthdate.message as ReactNode}</p>
          )}

          <Input
            label='Complemento'
            placeholder='Apart 12'
            registerName='complement'
            register={register}
            defaultValue={userData?.Address.complement}
          />
          {errors.description?.message && (
            <p className='error'>{errors.description.message as ReactNode}</p>
          )}
        </div>

        <div className='buttonsTypes'>
          <StyledButton buttonStyle='negative' type='button' onClick={() => reset()}>
            Cancelar
          </StyledButton>
          {error && <p className='error'>{error}</p>}
          <StyledButton
            type='submit'
            buttonStyle={success ? 'sucess' : error ? 'alert' : 'brand'}
            disabled={loading}
          >
            {success ? (
              'Salvo com sucesso!'
            ) : loading ? (
              <BiLoaderCircle size={'2em'} className='loading' />
            ) : error ? (
              'Tente Novamente'
            ) : (
              'Salvar Alterações'
            )}
          </StyledButton>
        </div>
      </StyledForm>
    </StyledModal>
  );
};

export default EditAdress;
