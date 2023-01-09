import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import { StyledTitle } from '../../styles/typography';
import { StyledButton } from '../../styles/button';
import { RegisterContainer } from './style';
import { ReactNode, useState } from 'react';
import api from '../../services';
import { BiLoaderCircle } from 'react-icons/bi';
import formSchema from './schema';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: any) => {
    setLoading(true);
    if (data.userType == 0) {
      data.userType = false;
    } else {
      data.userType = true;
    }

    const request = {
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      phone: data.phone,
      birthDate: `${
        data.birthdate.getMonth() + 1
      }/${data.birthdate.getDate()}/${data.birthdate.getFullYear()}`,
      typeAccount: data.userType,
      is_active: true,
      describe: data.description,
      Address: {
        cep: data.cep,
        state: data.state,
        city: data.city,
        street: data.street,
        number: data.number.toString(),
        complement: data.complement,
      },
    };

    api
      .post('/user', request)
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setError('');
        reset();
      })
      .catch((err) => {
        setSuccess(false);

        if (err.message === 'Network Error') {
          setLoading(false);
          setError('Erro no servidor... tente novamente mais tarde.');
        } else if (err.response.data.message === 'User already exists') {
          setLoading(false);
          setError('Email já cadastrado');
        } else {
          setLoading(false);
          setError('Erro');
        }
      });
  };

  return (
    <>
      <Navbar />

      <RegisterContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle fontSize='Heading-5-500' tag='h2'>
          Cadastro
        </StyledTitle>

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

        <StyledTitle fontSize='body-2-500' tag='p'>
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
        )}

        <StyledTitle fontSize='body-2-500' tag='p'>
          Tipo de conta
        </StyledTitle>

        <div className='buttonsTypes'>
          <div>
            <input value={0} id='select1' {...register('userType')} type='radio' />
            <StyledButton className='buyer' type='button' buttonStyle='outlined2'>
              Comprador
            </StyledButton>
          </div>

          <div>
            <input value={1} id='select2' {...register('userType')} type='radio' />

            <StyledButton className='seller' type='button' buttonStyle='outlined2'>
              Anunciante
            </StyledButton>
          </div>
        </div>
        {errors.userType?.message && (
          <p className='error'>{errors.userType.message as ReactNode}</p>
        )}

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

        <Input
          type='password'
          label='Confirmar Senha'
          placeholder='Digitar senha'
          registerName='confPassword'
          register={register}
        />
        {errors.confPassword?.message && (
          <p className='error'>{errors.confPassword.message as ReactNode}</p>
        )}

        {error && <p className='error'>{error}</p>}
        <StyledButton type='submit' buttonStyle={success ? 'sucess' : error ? 'alert' : 'brand'}>
          {success ? (
            'Cadastrado com sucesso!'
          ) : loading ? (
            <BiLoaderCircle size={'2em'} className='loading' />
          ) : error ? (
            'Tente Novamente'
          ) : (
            'Finalizar cadastro'
          )}
        </StyledButton>
      </RegisterContainer>

      <Footer />
    </>
  );
};
