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
import { router } from '../../routes';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { useContext } from 'react';
import { Grid } from '@mui/material';
import ModalEditComment from '../../components/ModalEditComment';
import { notifyError, notifySuccess } from '../../helpers/toasts';
import { CommentContext } from '../../contexts/CommentContext/CommentContext';
import ImgModal from '../../components/StyledModal/ImgModal';
import StyledModal from '../../components/StyledModal';


export const VehicleDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const { userData, loadUser } = useContext(UserContext);
  const { commentData, setCommentData, setId, setVehicleData, setPrice, vehicleData, price, getVehicle } =
    useContext(CommentContext);

  setId(id);

  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);
  const [flagComment, setFlagComment] = useState<boolean>(false);

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
  } else {
    useEffect(() => {
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

  const onSubmitFunction = (data: any) => {
    setLoading(true);
    api
      .post(`/comment/${id}`, data, {
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(() => {
        notifySuccess('Comentário adicionado com sucesso!');
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

    const daysComment = (date1 - date2) / 86400000;
    return Math.trunc(daysComment);
  }

  return (
    <>
      <ModalEditComment />
      <StyledVehicleDetail>
      <Navbar />
      <div className='divRoxinha'></div>
      <div className='mainContainer'>
        <StyledSection>
          <StyledBox className='mainImage'>
            <img src={vehicleData?.coverImg} alt='Vehicle' />
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
            <StyledModal
              propsButton={{
                buttonStyle: 'brand',
                buttonSize: 'medium',
              }}
              nameModal='Comprar'
              nameButtonOpen='Comprar'
            >
              Chama no zap
            </StyledModal>
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
                    commentId={comment.id}
                  />
                );
              })}
            </StyledDivGap>
          </StyledBox>
          <StyledBox>
            <StyledDivGap>
              {token ? (
                <CardProfile name={userData?.name || 'Name'} userId={userData?.id} />
              ) : (
                <></>
              )}
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
                    buttonStyle={errors?.message ? 'alert' : token ? 'brand' : 'disabled'}
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
          <StyledBox center flex columnFlex paddingC='30px'>
            <StyledDivGap center>
              <CardProfile direction='true' name={vehicleData?.user.name || 'undefined'} />
              <StyledTitle fontSize='body-1-400' tag='p' fontColor='var(--grey2)'>
                {vehicleData?.user.describe}
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
    </>
  );
};
