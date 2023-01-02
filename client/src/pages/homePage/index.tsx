import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import imgCarro from '../../assets/images/unsplash_3ZUsNJhi_Ik.png';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import ProductCardAuction from '../../components/ProductCardAuction';
import { fakeUser } from '../../fakeData';

export const Home = () => {
  return (
    <>
      <Navbar />
      <StyledTitle fontSize='Heading-1-700' tag='h1'>
        Olá! essa e a Home
      </StyledTitle>
      <Modal
        propsButton={{
          buttonStyle: 'alert',
          buttonSize: 'medium',
        }}
        nameModal='Teste algo'
        nameButtonOpen='ABRIRRRE'
      >
        Algo aqui
      </Modal>
      <ProductCard
        title={'Mustang'}
        name={'Matheus Zeiser'}
        description={'Um carro bem ASDAAAAAAAAA asdasd asdasfas asdasd asdas asda asdas'}
        year={2020}
        km={0}
        img={imgCarro}
        price={40000}
      />
      <StyledParagraph>Bem-vindo</StyledParagraph>

      <ProductCardAuction
        title={'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '}
        name={'Steve Jobs'}
        description={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
        }
        year={2022}
        km={2}
        img={imgCarro}
        price={23000}
        time={'01:52:00'}
      />

      <button onClick={() => localStorage.setItem('token', '111111')}>Login falso</button>

      <Footer />
    </>
  );
};
