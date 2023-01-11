import { ReactNode, useEffect, useState, useContext } from 'react';
import { StyledButton } from '../../styles/button';
import StyledModal from '../StyledModal';
import { StyledForm } from './style';
import { useForm } from 'react-hook-form';

import api from '../../services';
import Input from '../../components/Input';
import { StyledTitle } from '../../styles/typography';
import { BiLoaderCircle } from 'react-icons/bi';

import { UserContext } from '../../contexts/UserContext/UserContext';

const EditProfile = () => {
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
    console.log(userData);
    const request = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone,
      describe: data.describe,
    };
    console.log(userData?.birthDate);
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .patch('/user', request)
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
      nameModal='Editar Perfil'
      nameButtonOpen='Editar Perfil'
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle fontSize='body-2-500' tag='p'>
          Infomações pessoais
        </StyledTitle>
        <Input
          defaultValue={userData?.name}
          label='Nome'
          placeholder='Ex: Samuel Leão'
          registerName='name'
          register={register}
        />
        {errors.name?.message && <p className='error'>{errors.name.message as ReactNode}</p>}
        <Input
          type='email'
          label='Email'
          placeholder='Ex: samuel@kenzie.com.br'
          registerName='email'
          register={register}
          defaultValue={userData?.email}
        />
        {errors.email?.message && <p className='error'>{errors.email.message as ReactNode}</p>}
        <Input
          type='number'
          label='CPF'
          placeholder='000.000.000-00'
          registerName='cpf'
          register={register}
          defaultValue={userData?.cpf}
        />
        {errors.cpf?.message && <p className='error'>{errors.cpf.message as ReactNode}</p>}
        <Input
          type='tel'
          label='Celular'
          placeholder='(DDD) 90000-0000'
          registerName='phone'
          register={register}
          defaultValue={userData?.phone}
        />
        {errors.phone?.message && <p className='error'>{errors.phone.message as ReactNode}</p>}

        <Input
          type='date'
          label='Data de nascimento'
          placeholder='00/00/00'
          registerName='birthdate'
          register={register}
          defaultValue={`${
            userData?.birthDate.getMonth() + 1
          }-${userData?.birthDate.getDate()}-${userData?.birthDate.getFullYear()}`}
        />
        {errors.birthdate?.message && (
          <p className='error'>{errors.birthdate.message as ReactNode}</p>
        )}

        <Input
          text
          label='Descrição'
          placeholder='Digitar Descrição'
          registerName='describe'
          register={register}
          defaultValue={userData?.describe}
        />
        {errors.description?.message && (
          <p className='error'>{errors.description.message as ReactNode}</p>
        )}

        <div className='buttonsTypes'>
          <StyledButton buttonStyle='negative' type='button' onClick={() => reset()}>
            Cancelar
          </StyledButton>
          {error && <p className='error'>{error}</p>}
          <StyledButton type='submit' buttonStyle={success ? 'sucess' : error ? 'alert' : 'brand'}>
            {success ? (
              'Salvado com sucesso!'
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

export default EditProfile;
