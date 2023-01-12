import { ReactNode, useState } from 'react';
import React from 'react';
import { StyledButton } from '../../styles/button';
import StyledModal from '../StyledModal';
import { ConfModalExclude, StyledForm } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema';
import api from '../../services';
import ImageGallery from '../ImageGallery';
import { StyledTitle } from '../../styles/typography';
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
  vehicle: IVehicle;
}
const EditVehicle = ({ setData, userId, vehicle }: IPropsVehicle) => {
  const [GalleryImg, setImageGallery] = useState(['1']);

  const [typeVehicles, setTypeVehicles] = useState(vehicle.typeVehicles);
  const [typeOffer, setTypeOffer] = useState(vehicle.typeOffer);
  const [isActive, setIsActive] = useState(vehicle.isActive);
  const [closeModal, setCloseModal] = useState(false);
  const [closeModalExclude, setCloseModalExclude] = useState(false);

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

  const token = localStorage.getItem('token');

  const onSubmitFunction = async (data: any) => {
    data['typeOffer'] = typeOffer;
    data['typeVehicles'] = typeVehicles;
    data['isActive'] = isActive;

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

    if (!data.GalleryImg[0].url) {
      delete data.GalleryImg;
    }

    if (token) {
      try {
        setCloseModal(true);
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.patch(`/vehicle/${vehicle.id}`, data);
        findUser();
        reset();
      } catch (error) {
        console.log(error);
      } finally {
        setCloseModal(false);
      }
    }
  };

  const excludeFunction = async () => {
    if (token) {
      try {
        setCloseModal(true);
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.delete(`/vehicle/${vehicle.id}`);
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
        nameButtonOpen='Editar'
        nameModal='Editar Anúncio'
        propsButton={{
          buttonStyle: 'outlined',
          buttonSize: 'medium',
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
              <input
                defaultValue={vehicle.title}
                placeholder='Digitar título'
                {...register('title')}
              />
              {errors.title?.message && (
                <p className='errorValue'>{errors.title.message as ReactNode}</p>
              )}
            </div>
            <div className='InputsValues'>
              <div className='AgeAndPrice'>
                <div>
                  <label>Ano</label>
                  <input
                    defaultValue={vehicle.year}
                    placeholder='Digitar Ano'
                    {...register('year')}
                  />
                  {errors.year?.message && (
                    <p className='errorValue'>{errors.year.message as ReactNode}</p>
                  )}
                </div>
                <div>
                  <label>Quilometragem</label>
                  <input defaultValue={vehicle.mileage} placeholder='0' {...register('mileage')} />
                  {errors.mileage?.message && (
                    <p className='errorValue'>{errors.mileage.message as ReactNode}</p>
                  )}
                </div>
              </div>
              <div>
                <label>Preço</label>
                <input
                  defaultValue={vehicle.price}
                  placeholder='Digitar Preço'
                  {...register('price')}
                />
                {errors.price?.message && (
                  <p className='errorValue'>{errors.price.message as ReactNode}</p>
                )}
              </div>
            </div>
            <div className='Describe'>
              <label>Descrição</label>
              <textarea
                defaultValue={vehicle.describe}
                placeholder='Digitar descrição'
                {...register('describe')}
              ></textarea>
              {errors.describe?.message && (
                <p className='errorValue'>{errors.describe.message as ReactNode}</p>
              )}
            </div>
          </div>
          <div className='TypeAnnounce'>
            <p>Tipo de veículo</p>
            <div>
              {!typeVehicles ? (
                <StyledButton
                  type='button'
                  buttonStyle='brand'
                  onClick={() => setTypeVehicles(false)}
                >
                  Carro
                </StyledButton>
              ) : (
                <StyledButton
                  type='button'
                  buttonStyle='outlined2'
                  onClick={() => setTypeVehicles(false)}
                >
                  Carro
                </StyledButton>
              )}
              {typeVehicles ? (
                <StyledButton
                  type='button'
                  buttonStyle='brand'
                  onClick={() => setTypeVehicles(true)}
                >
                  Moto
                </StyledButton>
              ) : (
                <StyledButton
                  type='button'
                  buttonStyle='outlined2'
                  onClick={() => setTypeVehicles(true)}
                >
                  Moto
                </StyledButton>
              )}
            </div>
          </div>
          <div className='isActive'>
            <p>Publicado</p>
            <div>
              {isActive ? (
                <StyledButton type='button' buttonStyle='brand' onClick={() => setIsActive(true)}>
                  Sim
                </StyledButton>
              ) : (
                <StyledButton
                  type='button'
                  buttonStyle='outlined2'
                  onClick={() => setIsActive(true)}
                >
                  Sim
                </StyledButton>
              )}
              {!isActive ? (
                <StyledButton type='button' buttonStyle='brand' onClick={() => setIsActive(false)}>
                  Não
                </StyledButton>
              ) : (
                <StyledButton
                  type='button'
                  buttonStyle='outlined2'
                  onClick={() => setIsActive(false)}
                >
                  Não
                </StyledButton>
              )}
            </div>
          </div>
          <div className='Pictures'>
            <label>Imagem de capa</label>
            <input
              defaultValue={vehicle.coverImg}
              placeholder='Inserir URL da imagem'
              {...register('coverImg')}
            />
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
          </div>
          <div className='BtnSubmityAndClose'>
            <StyledModal
              nameButtonOpen='Excluir anúncio'
              nameModal='Excluir anúncio'
              propsButton={{
                buttonStyle: 'grey6',
                buttonSize: 'big',
              }}
              closeModal={closeModalExclude}
            >
              <ConfModalExclude>
                <StyledTitle fontSize='Heading-7-500' tag='h5'>
                  Tem certeza que deseja remover este anúncio?
                </StyledTitle>
                <StyledTitle fontSize='body-1-400' tag='p'>
                  Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e
                  removerá seus dados de nossos servidores.
                </StyledTitle>

                <div>
                  <StyledButton
                    buttonSize='big'
                    type='button'
                    buttonStyle='grey6'
                    onClick={() => setCloseModalExclude(!closeModalExclude)}
                  >
                    Cancelar
                  </StyledButton>

                  <StyledButton
                    buttonSize='big'
                    type='button'
                    className='exclude'
                    buttonStyle='alert'
                    onClick={() => excludeFunction()}
                  >
                    Sim, excluir anúncio
                  </StyledButton>
                </div>
              </ConfModalExclude>
            </StyledModal>
            <StyledButton buttonSize='big' type='submit' className='save' buttonStyle='disabled'>
              Salvar alterações
            </StyledButton>
          </div>
        </StyledForm>
      </StyledModal>
    </>
  );
};

export default EditVehicle;
