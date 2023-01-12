import * as yup from 'yup';
const getAdultDate = (currentDate: any) => {
  const year = +currentDate.split('/')[2] - 18;
  const correctDate = currentDate.split('/');
  correctDate[2] = year;
  return correctDate.reverse().join('-');
};

const formSchema = yup.object().shape({
  name: yup.string().min(3, 'Mínimo de 3 letras no Nome'),
  email: yup.string().email('Necessário ser um Email valido'),
  cpf: yup
    .string()
    .min(11, 'Necessário ser um CPF valido')
    .max(11, 'Necessário ser um CPF valido')
    .typeError('CPF Inválido'),
  phone: yup
    .string()

    .min(11, 'Necessário ser um Número valido')
    .max(12, 'Necessário ser um Número valido'),
  birthdate: yup
    .date()

    .max(getAdultDate(new Date().toLocaleDateString()), 'Necessário ser maior de 18 anos')
    .min('01-01-1900', 'Data Inválida')
    .typeError('Data Inválida'),
  description: yup
    .string()

    .min(30, 'Mínimo de 30 letras na Descrição')
    .max(200, 'Maximo de 200 letras na Descrição'),
  cep: yup.string().min(8, 'Necessário ser um CEP valido').max(8, 'Necessário ser um CEP valido'),
  state: yup.string().min(2, 'Mínimo de 2 letras no Estado').max(2, 'Maximo de 2 letras no Estado'),
  city: yup.string().min(2, 'Mínimo de 2 letras na Cidade'),
  street: yup.string().min(2, 'Mínimo de 2 letras na Rua'),
  number: yup.number().typeError('Número Inválido'),
  complement: yup.string(),
});

export default formSchema;
