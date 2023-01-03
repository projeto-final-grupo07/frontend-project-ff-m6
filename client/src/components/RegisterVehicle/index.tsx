import { ReactNode, useState } from 'react';
import { StyledButton } from '../../styles/button';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import { StyledForm } from './style';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema';

const RegisterVehicle = () => {
  const [imageGallery, setImageGallery] = useState(['1']);
  const [typeVehicles, setTypeVehicles] = useState(false);
  const [typeOffer, setTypeOffer] = useState(true);

  const [imageGalleryArr, setImageGalleryArr] = useState([]);
  const [value, setValue] = useState('');

  const eventClick = () => {
    const newElem = imageGallery.length + 1;
    if (newElem <= 4) {
      setImageGallery([...imageGallery, newElem.toString()]);
    }
  };

  const {
    register,
    handleSubmit,
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

  const onSubmitFunction = (data: any) => {
    data['typeOffer'] = typeOffer;
    data['typeVehicles'] = typeVehicles;

    data['imageGallery'] = [{ url: data.img1 }];
    delete data.img1;

    if (data.img2 !== undefined) {
      data['imageGallery'] = [...data['imageGallery'], { url: data.img2 }];
      delete data.img2;
    }
    if (data.img3 !== undefined) {
      data['imageGallery'] = [...data['imageGallery'], { url: data.img3 }];
      delete data.img3;
    }
    if (data.img4 !== undefined) {
      data['imageGallery'] = [...data['imageGallery'], { url: data.img4 }];
      delete data.img4;
    }

    console.log(data);
  };
  return (
    <>
      <Modal
        nameButtonOpen='Criar anuncio'
        nameModal='Criar Anuncio'
        propsButton={{
          buttonStyle: 'outlinedBrand1',
          color: '#FDFDFD',
        }}
        closeButton={{
          buttonStyle: 'negative',
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
              {imageGallery.map((img) => (
                <li key={img}>
                  <ImageGallery errors={errors} indexImage={img} register={register} />
                </li>
              ))}
            </ul>

            <button type='button' className='BtnAddImg' onClick={eventClick}>
              Adicionar campo para imagem da galeria
            </button>
            <div className='BtnSubmityAndClose'>
              <StyledButton type='submit' className='Submit' buttonStyle='disabled'>
                Criar anúncio
              </StyledButton>
            </div>
          </div>
        </StyledForm>
      </Modal>
    </>
  );
};

export default RegisterVehicle;
