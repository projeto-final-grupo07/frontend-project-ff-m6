import { ReactNode, useContext, useEffect, useState } from 'react';
import React from 'react';
import { StyledButton } from '../../styles/button';
import StyledModal from '../StyledModal';
import { StyledForm } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema';
import api from '../../services';
import { UserContext } from '../../contexts/UserContext/UserContext';
import ImageGallery from '../ImageGallery';
interface IVehicle {
  id: string;
  typeOffer: boolean;
  title: string;
  year: number;
  mileage: number;
  price: number;
  describe: string;
  typeVehicles: boolean;
  coverImg: string;
  GalleryImg: IGalleryImg[];
  user: IUser;
  isActive: boolean;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birthDate: string;
  describe: string;
  typeAccount: boolean;
  is_active: boolean;
  id: string;
  Vehicle: IVehicle[];
}

interface IGalleryImg {
  id?: string;
  url: string;
}
interface IPropsVehicle {
  setData: (value: React.SetStateAction<IUser | undefined>) => void;
  userId: string | undefined;
}
const RegisterVehicle = ({ setData, userId }: IPropsVehicle) => {
  const { loadUser } = useContext(UserContext);
  const [GalleryImg, setImageGallery] = useState(['1']);

  const [typeVehicles, setTypeVehicles] = useState(false);
  const [typeOffer, setTypeOffer] = useState(true);
  const [closeModal, setCloseModal] = useState(false);

  const eventClick = () => {
    const newElem = GalleryImg.length + 1;
    if (newElem <= 4) {
      setImageGallery([...GalleryImg, newElem.toString()]);
    }
  };

  const findUser = () => {
    api
      .get(`/user/${userId}`)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => console.error(err));
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

  const onSubmitFunction = async (data: any) => {
    const token = localStorage.getItem('token');

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

    if (token) {
      try {
        setCloseModal(true);
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.post('/vehicle/', data);
        findUser();
        reset();
      } catch (error) {
        console.log(error);
      } finally {
        setCloseModal(false);
      }
    }
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
        closeModal={closeModal}
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
              {typeVehicles == false ? (
                <StyledButton
                  type='button'
                  buttonStyle='brand'
                  onClick={() => changeTypeVehiclesFalse()}
                >
                  Carro
                </StyledButton>
              ) : (
                <StyledButton
                  type='button'
                  buttonStyle='outlined2'
                  onClick={() => changeTypeVehiclesFalse()}
                >
                  Carro
                </StyledButton>
              )}
              {typeVehicles == true ? (
                <StyledButton
                  type='button'
                  buttonStyle='brand'
                  onClick={() => changeTypeVehiclesTrue()}
                >
                  Moto
                </StyledButton>
              ) : (
                <StyledButton
                  type='button'
                  buttonStyle='outlined2'
                  onClick={() => changeTypeVehiclesTrue()}
                >
                  Moto
                </StyledButton>
              )}
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
