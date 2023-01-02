import * as yup from 'yup';
export const formSchema = yup.object().shape({
  title: yup.string().required('O campo Título é obrigatório'),
  year: yup.string().max(4).required('O campo Ano é obrigatório'),
  mileage: yup.string().max(10).required('O campo Quilometragem é obrigatório'),
  price: yup.string().required('O campo Preço é obrigatório'),
  describe: yup.string().required('O campo Descrição é obrigatório'),
  coverImg: yup.string().required('O campo Imagem de capa é obrigatório'),
  img1: yup.string().required('O campo Imagem é obrigatório'),
  img2: yup.string(),
  img3: yup.string(),
  img4: yup.string(),
});
