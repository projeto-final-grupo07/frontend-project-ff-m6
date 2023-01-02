import * as yup from 'yup';
export const formSchema = yup.object().shape({
  title: yup.string().required('O Título é obrigatório'),
  year: yup.string().max(4).required('O Ano é obrigatório'),
  mileage: yup.string().max(10).required('O Quilometragem é obrigatório'),
  price: yup.string().required('O Preço é obrigatório'),
  describe: yup.string().required('O Descrição é obrigatório'),
  coverImg: yup.string().required('O Imagem de capa é obrigatório'),
});
