import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { StyledButton } from '../../styles/button';
import { useParams } from 'react-router-dom';
import {
  StyledVehicleDetail,
  StyledSection,
  StyledSectionFixed,
  StyledPhotoDetail,
  StyledBox,
  StyledDivGap,
  SytledDivInfoVehicle,
  StyledRegisterComment,
  StyledForm,
} from './style';
import { StyledTitle } from '../../styles/typography';
import CardProfile from '../../components/CardProfile';
import CommentCard from '../../components/CommentCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema';
import { BiLoaderCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { router } from '../../routes';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { useContext } from 'react';
import { data } from '../../fakeData/data';
import { Grid } from '@mui/material';
import ImgModal from '../../components/StyledModal/ImgModal';

export interface IVehicle {
  id: string;
  typeOffer: boolean;
  title: string;
  year: string;
  mileage: string;
  price: number;
  describe: string;
  typeVehicles: boolean;
  coverImg: string;
  isActive: boolean;
  user_id: string;
  GalleryImgs: IGalleryImg[];
  Message: IMessage[];
}

export interface IGalleryImg {
  id: string;
  url: string;
  vehicle_id: string;
}

export interface IMessage {
  id: string;
  comment: string;
  createdAt: string;
  user_id: string;
  vehicle_id: string;
  user: IUser;
}

export interface IUser {
  name: string;
}

export interface IUserData {
  name: string;
  id: string;
}

export const VehicleDetail = () => {
  const { id } = useParams();

  const { userData, loadUser } = useContext(UserContext);

  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);
  const [vehicleData, setVehicleData] = useState<IVehicle>();
  const [commentData, setCommentData] = useState<IMessage[]>([]);
  const [flagComment, setFlagComment] = useState<boolean>(false);
  const [price, setPrice] = useState(0);

  if (token) {
    useEffect(() => {
      loadUser();
      api
        .get(`/vehicle/${id}`)
        .then((res) => {
          setVehicleData(res.data);

          setCommentData(res.data.Message);
          setPrice(+res.data.price);
        })
        .catch((err) => console.log(err));
    }, [flagComment]);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const notifySuccess = () =>
    toast.success('Comentário adicionado com sucesso', { autoClose: 1500 });
  const notifyError = (msg: string) => toast.error(msg, { autoClose: 1500, position: 'top-right' });

  const onSubmitFunction = (data: any) => {
    setLoading(true);
    api
      .post(`/comment/${id}`, data, {
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        notifySuccess();
        setLoading(false);
        reset();
        setCommentData([...commentData, data]);
        loadUser();
        setFlagComment(!flagComment);
      })
      .catch((err) => {
        setLoading(false);
        reset();
        if (err.message === 'Request failed with status code 401') {
          setTimeout(() => router.navigate('/login'), 2500);
          notifyError('Faça login novamente');
        } else {
          notifyError('Tente novamente mais tarde');
        }
      });
  };

  function days(commentDate: Date) {
    const date1: any = new Date();
    const date2: any = new Date(commentDate);

    const diff = date1 - date2;
    console.log(diff);

    const daysComment = (date1 - date2) / 86400000;

    console.log(daysComment);

    return Math.trunc(daysComment);
  }

  return (
    <StyledVehicleDetail>
      <Navbar />
      <div className='divRoxinha'></div>
      <div className='mainContainer'>
        <StyledSection>
          <StyledBox className='mainImage'>
            <img src={vehicleData?.coverImg} alt='x' />
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              <StyledTitle fontSize='Heading-6-600' tag='h6'>
                {vehicleData?.title}
              </StyledTitle>
              <SytledDivInfoVehicle>
                <div>
                  <StyledTitle fontSize='body-2-500' tag='p' className='tag'>
                    {vehicleData?.year}
                  </StyledTitle>
                  <StyledTitle fontSize='body-2-500' tag='p' className='tag'>
                    {vehicleData?.mileage} KM
                  </StyledTitle>
                </div>
                <StyledTitle fontSize='Heading-7-500' tag='h3'>
                  {price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </StyledTitle>
              </SytledDivInfoVehicle>
            </StyledDivGap>
            <StyledButton buttonStyle='brand' buttonSize='medium'>
              Comprar
            </StyledButton>
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              <StyledTitle fontSize='Heading-6-600' tag='h6'>
                Descrição
              </StyledTitle>
              <StyledTitle fontSize='body-1-400' tag='p' fontColor='var(--grey2)'>
                {vehicleData?.describe}
              </StyledTitle>
            </StyledDivGap>
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              <StyledTitle fontSize='Heading-6-600' tag='h6'>
                Comentários
              </StyledTitle>
              {commentData?.map((comment) => {
                return (
                  <CommentCard
                    key={comment.id}
                    name={comment.user?.name || 'Name'}
                    comment={comment.comment}
                    daysOfComment={days(new Date(comment.createdAt))}
                  />
                );
              })}
            </StyledDivGap>
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              <CardProfile name={userData?.name || 'Name'} userId={userData?.id} />
              <StyledForm
                onSubmit={handleSubmit((evt) => {
                  return onSubmitFunction(evt);
                })}
              >
                <div className='textarea-container'>
                  <StyledRegisterComment
                    rows={2}
                    maxLength={250}
                    placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
                    {...register('message')}
                  ></StyledRegisterComment>
                  <StyledButton
                    type='submit'
                    className='commentButton'
                    buttonStyle='brand'
                    buttonSize='medium'
                  >
                    {loading ? <BiLoaderCircle size={'2em'} className='loading' /> : 'Comentar'}
                  </StyledButton>
                </div>
              </StyledForm>
            </StyledDivGap>
          </StyledBox>
        </StyledSection>
        <StyledSectionFixed>
          <StyledPhotoDetail>
            <h2>Fotos</h2>
            <Grid
              container
              justifyContent='center'
              spacing={1}
              columns={12}
              className='gridGallery'
            >
              {vehicleData?.GalleryImgs.length === 0 ? (
                <StyledBox className='noImage'>Sem mais imagens</StyledBox>
              ) : (
                vehicleData?.GalleryImgs.map((image) => {
                  return (
                    <Grid
                      key={image?.id}
                      item
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      sx={{ cursor: 'pointer' }}
                    >
                      <ImgModal
                        key={image?.id}
                        src={image?.url}
                        altName={'Imagem de um veículo'}
                        nameModal='Imagem do veículo'
                        className='imgGallery'
                      >
                        <img src={image?.url} alt={'Imagem de um veículo'} className='imgGallery' />
                      </ImgModal>
                    </Grid>
                  );
                })
              )}
            </Grid>
          </StyledPhotoDetail>
          <StyledBox center flex columnFlex>
            <StyledDivGap center>
              <CardProfile direction='true' name={userData?.name || 'undefined'} />
              <StyledTitle fontSize='body-1-400' tag='p' fontColor='var(--grey2)'>
                {userData?.describe}
              </StyledTitle>
            </StyledDivGap>
            <Link to={`/profile/${vehicleData?.user_id}`}>
              <StyledButton buttonStyle='grey1' buttonSize='medium'>
                Ver todos os anuncios
              </StyledButton>
            </Link>
          </StyledBox>
        </StyledSectionFixed>
      </div>
      <Footer />
    </StyledVehicleDetail>
  );
};
