import { useState } from 'react';
import { StyledButton } from '../../styles/button';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import { StyledForm } from './style';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema';

const RegisterVehicle = () => {
  const [imageGallery, setImageGallery] = useState(['1']);
  const [typeOffer, setTypeOffer] = useState(true);
  const [typeVehicles, setTypeVehicles] = useState(false);

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
            </div>
            <div className='InputsValues'>
              <div className='AgeAndPrice'>
                <div>
                  <label>Ano</label>
                  <input placeholder='Digitar Ano' {...register('year')} />
                </div>
                <div>
                  <label>Quilometragem</label>
                  <input placeholder='0' {...register('mileage')} />
                </div>
              </div>
              <div>
                <label>Preço</label>
                <input placeholder='Digitar Preço' {...register('price')} />
              </div>
            </div>
            <div className='Describe'>
              <label>Descrição</label>
              <textarea placeholder='Digitar descrição' {...register('describe')}></textarea>
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

            <ul>
              {imageGallery.map((img) => (
                <li key={img}>
                  <ImageGallery indexImage={img} />
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
