import { ReactNode, useState } from 'react';
import { StyledButton } from '../../styles/button';
import ImageGallery from '../ImageGallery';
import StyledModal from '../StyledModal';
import { StyledForm } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema';
import api from '../../services';

const RegisterVehicle = () => {
  const [GalleryImg, setGalleryImg] = useState(['1']);
  const [typeVehicles, setTypeVehicles] = useState(false);
  const [typeOffer, setTypeOffer] = useState(true);
  const [imageGalleryArr, setImageGalleryArr] = useState([]);
  const [value, setValue] = useState('');

  const token = localStorage.getItem('token');

  const eventClick = () => {
    const newElem = GalleryImg.length + 1;
    if (newElem <= 4) {
      setGalleryImg([...GalleryImg, newElem.toString()]);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const changeTypeVehiclesFalse = () => {
    setTypeVehicles(false);
  };

  const changeTypeVehiclesTrue = () => {
    setTypeVehicles(true);
  };

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitFunction = (data: any) => {
    data['typeOffer'] = typeOffer;
    data['typeVehicles'] = typeVehicles;

    data['GalleryImg'] = [{ url: data.img1 }];
    delete data.img1;

    if (data.img2 !== undefined) {
      data['GalleryImg'] = [...data['GalleryImg'], { url: data.img2 }];
      delete data.img2;
    }
    if (data.img3 !== undefined) {
      data['GalleryImg'] = [...data['GalleryImg'], { url: data.img3 }];
      delete data.img3;
    }
    if (data.img4 !== undefined) {
      data['GalleryImg'] = [...data['GalleryImg'], { url: data.img4 }];
      delete data.img4;
    }

    api
      .post('/vehicle', data, {
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
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
        } else {
          setLoading(false);
          setError('Erro');
        }
      });
  };

  return (
    <>
      <StyledModal
        nameButtonOpen='Criar anuncio'
        nameModal='Criar Anuncio'
        propsButton={{
          buttonStyle: 'outlinedBrand1',
          buttonSize: 'big',
          color: '#FDFDFD',
        }}
        closeButton={{
          buttonStyle: 'negative',
          buttonSize: 'medium',
        }}
      >
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
          <div className='TypeAnnounce'>
            <p>Tipo de anuncio</p>
            <div>
              <StyledButton type='button' buttonStyle='brand'>
                Venda
              </StyledButton>
              <StyledButton type='button' buttonStyle='outlined2'>
                Leilão
              </StyledButton>
            </div>
          </div>
          <div className='InfoAnnounce'>
            <p>Informações do veículo</p>
            <div className='Title'>
              <label>Título</label>
              <input placeholder='Digitar título' {...register('title')} />
              {errors.title?.message && (
                <p className='errorValue'>{errors.title.message as ReactNode}</p>
              )}
            </div>
            <div className='InputsValues'>
              <div className='AgeAndPrice'>
                <div>
                  <label>Ano</label>
                  <input placeholder='Digitar Ano' {...register('year')} />
                  {errors.year?.message && (
                    <p className='errorValue'>{errors.year.message as ReactNode}</p>
                  )}
                </div>
                <div>
                  <label>Quilometragem</label>
                  <input placeholder='0' {...register('mileage')} />
                  {errors.mileage?.message && (
                    <p className='errorValue'>{errors.mileage.message as ReactNode}</p>
                  )}
                </div>
              </div>
              <div>
                <label>Preço</label>
                <input placeholder='Digitar Preço' {...register('price')} />
                {errors.price?.message && (
                  <p className='errorValue'>{errors.price.message as ReactNode}</p>
                )}
              </div>
            </div>
            <div className='Describe'>
              <label>Descrição</label>
              <textarea placeholder='Digitar descrição' {...register('describe')}></textarea>
              {errors.describe?.message && (
                <p className='errorValue'>{errors.describe.message as ReactNode}</p>
              )}
            </div>
          </div>
          <div className='TypeAnnounce'>
            <p>Tipo de veículo</p>
            <div>
              <StyledButton
                type='button'
                buttonStyle='brand'
                onClick={() => changeTypeVehiclesFalse()}
              >
                Carro
              </StyledButton>
              <StyledButton
                type='button'
                buttonStyle='outlined2'
                onClick={() => changeTypeVehiclesTrue()}
              >
                Moto
              </StyledButton>
            </div>
          </div>
          <div className='Pictures'>
            <label>Imagem de capa</label>
            <input placeholder='Inserir URL da imagem' {...register('coverImg')} />
            {errors.coverImg?.message && (
              <p className='errorValue'>{errors.coverImg.message as ReactNode}</p>
            )}

            <ul>
              {GalleryImg.map((img) => (
                <li key={img}>
                  <ImageGallery errors={errors} indexImage={img} register={register} />
                </li>
              ))}
            </ul>

            <button type='button' className='BtnAddImg' onClick={eventClick}>
              Adicionar campo para imagem da galeria
            </button>
            <div className='BtnSubmityAndClose'>
              <StyledButton
                buttonSize='medium'
                type='submit'
                className='Submit'
                buttonStyle='disabled'
              >
                Criar anúncio
              </StyledButton>
            </div>
          </div>
        </StyledForm>
      </StyledModal>
    </>
  );
};

export default RegisterVehicle;
