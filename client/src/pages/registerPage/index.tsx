import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import { StyledTitle } from '../../styles/typography';
import * as yup from 'yup';
import { StyledButton } from '../../styles/button';
import { RegisterContainer } from './style';
import { ReactNode } from 'react';

export const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('O campo Nome é obrigatório'),
    email: yup.string().required('O campo Email é obrigatório'),
    cpf: yup.string().required('O campo CPF é obrigatório'),
    phone: yup.string().required('O campo Celular é obrigatório'),
    birthdate: yup.string().required('O campo Data de Nascimento é obrigatório'),
    description: yup.string().required('O campo Descrição é obrigatório'),
    cep: yup.string().required('O campo CEP é obrigatório'),
    state: yup.string().required('O campo Estado é obrigatório'),
    city: yup.string().required('O campo Cidade é obrigatório'),
    road: yup.string().required('O campo Rua é obrigatório'),
    number: yup.string().required('O campo Número é obrigatório'),
    complement: yup.string().required('O campo Complemento é obrigatório'),
    userType: yup.string().required('O campo Tipo de Conta é obrigatório'),
    password: yup.string().required('O campo Senha é obrigatório'),
    confPassword: yup
      .string()
      .required('O campo Confirmar Senha é obrigatório')
      .oneOf([yup.ref('password')], 'Senha não corresponde'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(typeof data);
    if (data.userType == 0) {
      data.userType = false;
    } else if (data.userType) {
      data.userType = true;
    }
    console.log(data);
    reset();
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
        <Input label='CPF' placeholder='000.000.000-00' registerName='cpf' register={register} />
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
          placeholder='Digitar descrição'
          registerName='description'
          register={register}
        />
        {errors.description?.message && (
          <p className='error'>{errors.description.message as ReactNode}</p>
        )}

        <StyledTitle fontSize='body-2-500' tag='p'>
          Infomações de endereço
        </StyledTitle>

        <Input label='CEP' placeholder='00000.000' registerName='cep' register={register} />
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
            placeholder='Digitar cidade'
            registerName='city'
            register={register}
          />
        </div>
        {errors.state?.message && <p className='error'>{errors.state.message as ReactNode}</p>}
        {errors.city?.message && <p className='error'>{errors.city.message as ReactNode}</p>}

        <Input label='Rua' placeholder='00000.000' registerName='road' register={register} />
        {errors.road?.message && <p className='error'>{errors.road.message as ReactNode}</p>}

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
            <input checked value={0} id='select1' {...register('userType')} type='radio' />
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
          {errors.userType?.message && (
            <p className='error'>{errors.userType.message as ReactNode}</p>
          )}
        </div>

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

        <StyledButton type='submit' buttonStyle='brand'>
          Finalizar cadastro
        </StyledButton>
      </RegisterContainer>

      <Footer />
    </>
  );
};
