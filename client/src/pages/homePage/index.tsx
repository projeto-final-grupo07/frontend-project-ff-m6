import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import {StyledButton} from "../../styles/button";
import {StyledParagraph, StyledTitle} from "../../styles/typography";
import imgCarro from "../../assets/images/unsplash_3ZUsNJhi_Ik.png";
import ProductCard from "../../components/ProductCard";

export const Home = () => {
    return (
        <>
            <StyledTitle fontSize="Heading-1-700" tag="h1">
                Olá! essa e a Home
            </StyledTitle>
            <Modal
                propsButton={{
                    buttonStyle: "alert",
                    buttonSize: "medium",
                }}
                nameModal="Teste algo"
                nameButtonOpen="ABRIRRRE"
            >
                Algo aqui
            </Modal>
            <ProductCard
                title={"Mustang"}
                name={"Matheus Zeiser"}
                description={
                    "Um carro bem ASDAAAAAAAAA asdasd asdasfas asdasd asdas asda asdas"
                }
                year={2020}
                km={0}
                img={imgCarro}
                price={40000}
            />
            <StyledParagraph>Bem-vindo</StyledParagraph>
            <Footer />
        </>
    );
};
