import * as yup from 'yup';
const getAdultDate = (currentDate: any) => {
  const year = +currentDate.split('/')[2] - 18;
  const correctDate = currentDate.split('/');
  correctDate[2] = year;
  return correctDate.reverse().join('-');
};

const formSchema = yup.object().shape({
  name: yup.string().required('O campo Nome é obrigatório').min(3, 'Mínimo de 3 letras no Nome'),
  email: yup
    .string()
    .required('O campo Email é obrigatório')
    .email('Necessário ser um Email valido'),
  cpf: yup
    .string()
    .required('O campo CPF é obrigatório')
    .min(11, 'Necessário ser um CPF valido')
    .max(11, 'Necessário ser um CPF valido')
    .typeError('CPF Inválido'),
  phone: yup
    .string()
    .required('O campo Celular é obrigatório')
    .min(11, 'Necessário ser um Número valido')
    .max(12, 'Necessário ser um Número valido'),
  birthdate: yup
    .date()
    .required('O campo Data de Nascimento é obrigatório')
    .max(getAdultDate(new Date().toLocaleDateString()), 'Necessário ser maior de 18 anos')
    .min('01-01-1900', 'Data Inválida')
    .typeError('Data Inválida'),
  description: yup
    .string()
    .required('O campo Descrição é obrigatório')
    .min(30, 'Mínimo de 30 letras na Descrição')
    .max(200, 'Maximo de 200 letras na Descrição'),
  cep: yup
    .string()
    .required('O campo CEP é obrigatório')
    .min(8, 'Necessário ser um CEP valido')
    .max(8, 'Necessário ser um CEP valido'),
  state: yup
    .string()
    .required('O campo Estado é obrigatório')
    .min(2, 'Mínimo de 2 letras no Estado')
    .max(2, 'Maximo de 2 letras no Estado'),
  city: yup
    .string()
    .required('O campo Cidade é obrigatório')
    .min(2, 'Mínimo de 2 letras na Cidade'),
  street: yup.string().required('O campo Rua é obrigatório').min(2, 'Mínimo de 2 letras na Rua'),
  number: yup.number().required('O campo Número é obrigatório'),
  complement: yup.string().required('O campo Complemento é obrigatório'),
  userType: yup
    .string()
    .required('O campo Tipo de Conta é obrigatório')
    .typeError('Selecione o Tipo da Conta'),
  password: yup
    .string()
    .required('O campo Senha é obrigatório')
    .min(6, 'Mínimo de 6 Caracteres na Senha')
    .matches(/.*[0-9].*/, 'Necessário ter ao menos 1 número na Senha')
    .matches(/.*[a-zA-Z].*/, 'Necessário ter ao menos 1 letra na Senha'),

  confPassword: yup
    .string()
    .required('O campo Confirmar Senha é obrigatório')
    .oneOf([yup.ref('password')], 'Senha não corresponde'),
});

export default formSchema;
