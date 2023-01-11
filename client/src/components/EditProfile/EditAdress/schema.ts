import * as yup from 'yup';

const formSchema = yup.object().shape({
  cep: yup.string().min(8, 'Necessário ser um CEP valido').max(8, 'Necessário ser um CEP valido'),
  state: yup.string().min(2, 'Mínimo de 2 letras no Estado').max(2, 'Maximo de 2 letras no Estado'),
  city: yup.string().min(2, 'Mínimo de 2 letras na Cidade'),
  street: yup.string().min(2, 'Mínimo de 2 letras na Rua'),
  number: yup.number().typeError('Número Inválido'),
  complement: yup.string(),
});

export default formSchema;
