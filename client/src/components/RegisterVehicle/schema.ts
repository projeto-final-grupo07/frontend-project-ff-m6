import * as yup from 'yup';
export const formSchema = yup.object().shape({
  title: yup.string().required('O campo Título é obrigatório'),
  year: yup.string().max(4).required('O campo Ano é obrigatório'),
  mileage: yup.string().max(10).required('O campo Quilometragem é obrigatório'),
  price: yup.string().required('O campo Preço é obrigatório'),
  describe: yup.string().required('O campo Descrição é obrigatório'),
  coverImg: yup.string().required('O campo Imagem de capa é obrigatório'),
  img1: yup
    .string()
    .required('O campo Imagem é obrigatório')
    .matches(
      /((?:(ftp|http[s]?:[//])?)?([w]{3}[.])?)((.*[.](com|php|net|org|br|dk|at|us|tv|info|uk|co.uk|biz|se)?)?)((.*[.](aspx|htm|html|HTM|HTML|jhtm|jhtml|JHTM|JHTML|xhtm|xhtml|XHTM|XHTML)?)?)/,
    ),
  // "(\\w+(\\.(\\w|-)+)*(/(\\w|-)+)*/?)?"/,
  img2: yup
    .string()
    .matches(
      /((?:(ftp|http[s]?:[//])?)?([w]{3}[.])?)((.*[.](com|php|net|org|br|dk|at|us|tv|info|uk|co.uk|biz|se)?)?)((.*[.](aspx|htm|html|HTM|HTML|jhtm|jhtml|JHTM|JHTML|xhtm|xhtml|XHTM|XHTML)?)?)/,
    ),
  img3: yup
    .string()
    .matches(
      /((?:(ftp|http[s]?:[//])?)?([w]{3}[.])?)((.*[.](com|php|net|org|br|dk|at|us|tv|info|uk|co.uk|biz|se)?)?)((.*[.](aspx|htm|html|HTM|HTML|jhtm|jhtml|JHTM|JHTML|xhtm|xhtml|XHTM|XHTML)?)?)/,
    ),
  img4: yup
    .string()
    .matches(
      /((?:(ftp|http[s]?:[//])?)?([w]{3}[.])?)((.*[.](com|php|net|org|br|dk|at|us|tv|info|uk|co.uk|biz|se)?)?)((.*[.](aspx|htm|html|HTM|HTML|jhtm|jhtml|JHTM|JHTML|xhtm|xhtml|XHTM|XHTML)?)?)/,
    ),
});
