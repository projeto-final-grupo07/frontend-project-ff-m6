import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import {StyledParagraph, StyledTitle} from "../../styles/typography";
import imgCarro from "../../assets/images/unsplash_3ZUsNJhi_Ik.jpg";

export const Home = () => {
    return (
        <>
            <StyledTitle fontSize="Heading-1-700" tag="h1">
                Olá! essa e a Home
            </StyledTitle>
            <StyledParagraph>Bem-vindo</StyledParagraph>
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
            <Footer />
        </>
    );
};
