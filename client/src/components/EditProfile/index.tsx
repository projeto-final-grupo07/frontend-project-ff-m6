import { ReactNode, useEffect, useState, useContext } from 'react';
import { StyledButton } from '../../styles/button';
import StyledModal from '../StyledModal';
import { StyledForm } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services';
import Input from '../../components/Input';
import { StyledTitle } from '../../styles/typography';
import { BiLoaderCircle } from 'react-icons/bi';
import formSchema from './schema';
import { UserContext } from '../../contexts/UserContext/UserContext';

interface IPropsVehicle {
  findUser: () => void;
}
const EditProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { userData } = useContext(UserContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: any) => {
    setLoading(true);
    console.log(userData, data);
    const request = {
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      phone: data.phone,
      birthDate: `${
        data.birthdate.getMonth() + 1
      }/${data.birthdate.getDate()}/${data.birthdate.getFullYear()}`,
      describe: data.description,
    };
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
        <Input label='Nome' placeholder='Ex: Samuel Leão' registerName='name' register={register} />
        {errors.name?.message && <p className='error'>{errors.name.message as ReactNode}</p>}
        <Input
          type='email'
          label='Email'
          placeholder='Ex: samuel@kenzie.com.br'
          registerName='email'
          register={register}
        />
        {errors.email?.message && <p className='error'>{errors.email.message as ReactNode}</p>}
        <Input
          type='number'
          label='CPF'
          placeholder='000.000.000-00'
          registerName='cpf'
          register={register}
        />
        {errors.cpf?.message && <p className='error'>{errors.cpf.message as ReactNode}</p>}
        <Input
          type='tel'
          label='Celular'
          placeholder='(DDD) 90000-0000'
          registerName='phone'
          register={register}
        />
        {errors.phone?.message && <p className='error'>{errors.phone.message as ReactNode}</p>}

        <Input
          type='date'
          label='Data de nascimento'
          placeholder='00/00/00'
          registerName='birthdate'
          register={register}
        />
        {errors.birthdate?.message && (
          <p className='error'>{errors.birthdate.message as ReactNode}</p>
        )}

        <Input
          text
          label='Descrição'
          placeholder='Digitar Descrição'
          registerName='description'
          register={register}
        />
        {errors.description?.message && (
          <p className='error'>{errors.description.message as ReactNode}</p>
        )}

        {/* <StyledTitle fontSize='body-2-500' tag='p'>
          Infomações de endereço
        </StyledTitle>

        <Input
          type='number'
          label='CEP'
          placeholder='00000.000'
          registerName='cep'
          register={register}
        />
        {errors.cep?.message && <p className='error'>{errors.cep.message as ReactNode}</p>}

        <div className='flexRow'>
          <Input
            label='Estado'
            placeholder='Digitar Estado'
            registerName='state'
            register={register}
          />

          <Input
            label='Cidade'
            placeholder='Digitar Cidade'
            registerName='city'
            register={register}
          />
        </div>
        {errors.state?.message && <p className='error'>{errors.state.message as ReactNode}</p>}
        {errors.city?.message && <p className='error'>{errors.city.message as ReactNode}</p>}

        <Input label='Rua' placeholder='Digitar Rua' registerName='street' register={register} />
        {errors.street?.message && <p className='error'>{errors.street.message as ReactNode}</p>}

        <div className='flexRow'>
          <Input
            type='number'
            label='Número'
            placeholder='Digitar número'
            registerName='number'
            register={register}
          />

          <Input
            label='Complemento'
            placeholder='Ex: apart 307'
            registerName='complement'
            register={register}
          />
        </div>
        {errors.number?.message && <p className='error'>{errors.number.message as ReactNode}</p>}
        {errors.complement?.message && (
          <p className='error'>{errors.complement.message as ReactNode}</p>
        )} */}

        <div className='buttonsTypes'>
          <StyledButton buttonStyle='negative' type='button'>
            Cancelar
          </StyledButton>
          {error && <p className='error'>{error}</p>}
          <StyledButton type='submit' buttonStyle={success ? 'sucess' : error ? 'alert' : 'brand'}>
            {success ? (
              'Cadastrado com sucesso!'
            ) : loading ? (
              <BiLoaderCircle size={'2em'} className='loading' />
            ) : error ? (
              'Tente Novamente'
            ) : (
              'Finalizar Edição'
            )}
          </StyledButton>
        </div>
      </StyledForm>
    </StyledModal>
  );
};

export default EditProfile;
