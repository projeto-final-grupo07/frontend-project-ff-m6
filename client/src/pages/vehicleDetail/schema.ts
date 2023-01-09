import * as yup from 'yup';
export const formSchema = yup.object().shape({
  message: yup.string().required('Preencha o campo comentário'),
});
