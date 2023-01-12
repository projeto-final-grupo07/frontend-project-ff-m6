import * as yup from 'yup';
export const formSchema = yup.object().shape({
  title: yup.string(),
  year: yup.string().max(4),
  mileage: yup.string().max(10),
  price: yup.string(),
  describe: yup.string(),
  coverImg: yup.string(),
  img1: yup
    .string()
    .matches(
      /((?:(ftp|http[s]?:[//])?)?([w]{3}[.])?)((.*[.](com|php|net|org|br|dk|at|us|tv|info|uk|co.uk|biz|se)?)?)((.*[.](aspx|htm|html|HTM|HTML|jhtm|jhtml|JHTM|JHTML|xhtm|xhtml|XHTM|XHTML)?)?)/,
    ),
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
